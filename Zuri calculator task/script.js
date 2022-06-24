var num1 = parseInt(prompt("Enter first number: "));
var opr = prompt("Enter operator(+, -, * or /)");
var num2 = parseInt(prompt("Enter second number: "));

if(opr == "+"){
    alert(num1 + num2);
} else if(opr == "-"){
    alert(num1 - num2);
} else if(opr == "*"){
    alert(num1 * num2);
} else if(opr == "/"){
    alert(num1 / num2);
}
