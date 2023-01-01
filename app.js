import MyEmmitter from 'events';
import Calc from "./Calc.js";

const firstNum = Number(process.argv[2]);
const secondNum = Number(process.argv[3]);
const operation = process.argv[4];

//передать три значения, где первые два аргумента числа, а третий вид операции "sum" "multiply" "division" "difference"

const myEmitter = new MyEmmitter;
const calc = new Calc(firstNum,secondNum);

myEmitter.on('addDate', (operation)=>{
    myEmitter.emit('result', operation)
})

myEmitter.on('result', (operation)=>{
    calc.calcStart(operation);
})
myEmitter.emit('addDate', operation);