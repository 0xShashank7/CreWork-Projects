let num1 = parseFloat(prompt("Enter the first number: "))
let num2 = parseFloat(prompt("Enter the second number: "))

let input = prompt("Enter the operation to be performed[ +,-,*,/ ]:")

let calculator = {
    add(num1,num2){
        x = num1+num2
        console.log(x)
    },
    subtract(num1,num2){
        y = num1-num2
        console.log(y)
    },
    multiplication(num1,num2){
        a = num1*num2
        console.log(a)
    },
    division(num1,num2){
        b = num1/num2
        console.log(b)
    }
}

if (input == '+'){
    calculator.add(num1,num2)
} else if(input == '-'){
    calculator.subtract(num1,num2)
} else if(input == '*'){
    calculator.multiplication(num1,num2)
} else if(input == '/'){
    calculator.division(num1,num2)
} else console.log("Please enter correct input")