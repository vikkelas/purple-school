import Calc from "./Calc.js";
const firstNum = Number(process.argv[2]);
const secondNum = Number(process.argv[3]);
const operation = process.argv[4];
const myEmitter = new MyEmmitter;
//передать три значения, где первые два аргумента числа, а третий вид операции "sum" "multiply" "division" "difference"
import MyEmmitter from 'events';
import calcSum from "./sumFunc.js";

const myEmitter = new MyEmmitter;
const firstNum = +process.argv[2];
const secondNum = +process.argv[3];

const calc = new Calc(firstNum,secondNum);
calc.calcStart(operation);


myEmitter.on('result', (arg1, arg2)=>{
    calcSum(arg1, arg2);
})
myEmitter.emit('addDate', firstNum, secondNum);