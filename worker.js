import {parentPort, workerData} from 'worker_threads';
import divisionRemainder from "./divisionRemainder.js";

const outputResult = ({arr})=> {
    return  divisionRemainder(arr);
}

parentPort.postMessage(outputResult(workerData));