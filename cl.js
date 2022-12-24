// class funWithNumber{
//     firstNumber:number;
//     secondNumber:number;
//     constructor(a:number,b:number){
//         this.firstNumber = a;
//         this.secondNumber = b;
//     }
//     add(){
//         return this.firstNumber+this.secondNumber
//     }
//     substract(){
//         return this.firstNumber - this.secondNumber
//     }
//     divide(){
//         return this.firstNumber / this.secondNumber
//     }
//     multiply(){
//         return this.firstNumber * this.secondNumber
//     }
// }
// let class_calc = new funWithNumber(8,4);
// console.log(class_calc.add());
// console.log(class_calc.substract());
// console.log(class_calc.divide());
// console.log(class_calc.multiply());
import inquirer from "inquirer";
const answer = await inquirer.prompt([
    {
        type: "number",
        name: "numberone",
        message: "kindly enter your first no"
    },
    {
        type: "number",
        name: "numbertwo",
        message: "kindly enter your second no"
    },
    {
        type: "list",
        name: "operator",
        choices: ["+", "-", "*", "/"],
        Message: "select operator"
    },
]);
const { numberone, numbertwo, operator } = answer;
if (numberone && numbertwo && operator) {
    let result = 0;
    if (operator === "+") {
        result = numberone + numbertwo;
    }
    else if (operator === "-") {
        result = numberone - numbertwo;
    }
    if (operator === "*") {
        result = numberone * numbertwo;
    }
    if (operator === "/") {
        result = numberone / numbertwo;
    }
    console.log("your result is :", result);
}
else {
    console.log("kindly enter valid input");
}

