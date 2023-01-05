class Calc {
    constructor(arg1, arg2) {
        this.firstNum = arg1;
        this.secondNum = arg2;
    }

    calcStart(operation){
        switch (operation){
            case 'sum':
                this.calcSum()
                break
            case 'multiply':
                this.calcMultiplication()
                break
            case 'division':
                this.calcDivision()
                break
            case 'difference':
                this.calcDifference()
                break
        }
    }
    calcSum(){
        console.log(this.firstNum+this.secondNum);
    }
    calcDifference(){
        console.log(this.firstNum-this.secondNum);
    }
    calcDivision(){
        console.log(this.firstNum/this.secondNum);
    }
    calcMultiplication(){
        console.log(this.firstNum*this.secondNum);
    }

}
export default Calc;