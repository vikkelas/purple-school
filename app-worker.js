import {Worker} from 'worker_threads'
const arr = Array.from(Array(30000000),(_,i)=>i+1);
const spliceChunks = (arr, chunkSize)=>{
    const res = [];
    while (arr.length>0){
        const chunk = arr.splice(0, chunkSize);
        res.push(chunk);
    }
    return res;
}

const arrChunks = spliceChunks(arr,7500000);

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
        const result = await Promise.all([
            compute(arrChunks[0]),
            compute(arrChunks[1]),
            compute(arrChunks[2]),
            compute(arrChunks[3]),
            // compute(arrChunks[4]),
            // compute(arrChunks[5]),
            // compute(arrChunks[6]),
            // compute(arrChunks[7])
        ])
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