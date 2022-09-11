
function validate(){
    let num1 = parseFloat(prompt("Enter the first number: "))
    let num2 = parseFloat(prompt("Enter the second number: "))

    let input = prompt("Enter the operation to be performed[ +,-,*,/ ]:")

    let text = document.querySelector('.text')

let calculator = {
    add(num1,num2){
        x = num1+num2
        console.log(x)
        text.innerHTML = `The addition operation is equal to ${x}`
    },
    subtract(num1,num2){
        y = num1-num2
        console.log(y)
        text.innerHTML = `The Subtraction operation is equal to ${y}`
    },
    multiplication(num1,num2){
        a = num1*num2
        console.log(a)
        text.innerHTML = `The Multiplication operation is equal to ${a}`
    },
    division(num1,num2){
        b = num1/num2
        console.log(b)
        text.innerHTML = `The Division operation is equal to ${b}`
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



}