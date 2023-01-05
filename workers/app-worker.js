import {Worker} from 'worker_threads'
const ARRAY_SIZE = 30_000_000
const WORKER_COUNT = 4
const arr = Array.from(Array(ARRAY_SIZE),(_,i)=>i+1);
const spliceChunks = (arr, chunkSize)=>{
    const res = [];
    while (arr.length>0){
        const chunk = arr.splice(0, chunkSize);
        res.push(chunk);
    }
    return res;
}

const arrChunks = spliceChunks(arr,ARRAY_SIZE/WORKER_COUNT);

const compute = (arr)=>{
    return new Promise((resolve,reject)=>{
        const worker = new Worker('./worker.js', {
            workerData: {
                arr
            }
        })
        worker.on("message", (msg)=>{
            console.log(worker.threadId);
            resolve(msg);
        })
        worker.on('error', (err)=>{
            reject(err);
        })
    })
}
const main  = async () => {
    try {
        performance.mark('start');
        const result = await Promise.all(
            arrChunks.map(item=>compute(item))
        )
        const number = result.reduce((accum,currentValue)=>accum+currentValue,0)
        console.log(number)
        performance.mark('end');
        performance.measure('main', 'start', 'end');
        console.log(performance.getEntriesByName('main').pop());
    } catch (e){
        console.error(e.message);
    }

}

void main();