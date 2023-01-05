import divisionRemainder from "./divisionRemainder.js";

const outputResult = ()=>{
    performance.mark('start');
    const arr = Array.from(Array(30000000),(_,i)=>i+1);
    const result = divisionRemainder(arr);
    console.log(result);
    performance.mark('end');
    performance.measure('output', 'start', 'end');
    console.log(performance.getEntriesByName('output'));
}
outputResult();