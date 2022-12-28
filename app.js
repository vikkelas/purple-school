import MyEmmitter from 'events';
import calcSum from "./sumFunc.js";

const myEmitter = new MyEmmitter;
const firstNum = +process.argv[2];
const secondNum = +process.argv[3];

myEmitter.on('addDate', (arg1,arg2)=>{
    myEmitter.emit('result', arg1, arg2)
})

myEmitter.on('result', (arg1, arg2)=>{
    calcSum(arg1, arg2);
})
myEmitter.emit('addDate', firstNum, secondNum);