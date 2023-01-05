import timerFunc from './timerFunc.js';
import { argv } from 'node:process';
const timerTime = argv[2];

timerFunc(timerTime);

