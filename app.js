import Calc from "./Calc.js";
const firstNum = Number(process.argv[2]);
const secondNum = Number(process.argv[3]);
const operation = process.argv[4];

//передать три значения, где первые два аргумента числа, а третий вид операции "sum" "multiply" "division" "difference"

const calc = new Calc(firstNum,secondNum);
calc.calcStart(operation);

