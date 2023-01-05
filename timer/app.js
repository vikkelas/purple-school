import timerFunc from './timerFunc.js';
import { argv } from 'node:process';
const timerTime = argv[2];

//передать любое значение времени в формате пометив цифры  h-часы, m-минуты, s-секунды
timerFunc(timerTime);