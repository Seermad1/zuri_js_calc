var a = prompt("Enter the first number:")
var b = prompt("Enter the second number:")
var a = parseInt(a)
var b = parseInt(b)

let operator = prompt("Select an operator: + - * /")

if (operator == "+"){
    alert(`The sum of the two number is ${a+b}`)
}else if(operator == "-"){
    alert(`The difference of the two number is ${a-b}`)
}else if(operator == "/"){
    alert(`The qoutient of the two number is ${a/b}`)
}else if(operator == "*"){
    alert(`The multiplication of the two number is ${a*b}`)
}else{
    alert("Invalid operator inputted")
}