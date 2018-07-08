first = prompt("Enter first number");
second = prompt("Enter second number");
func = prompt("add, subtract, Multiply, Divide, modulo");
if (func=="add"){
    Result = alert ("Sum of first and second number is: "+ (Number(first)+Number(second)));
}else if (func=="subtract"){
    Result = alert ("Result of Sutracting numbers: "+ (Number(first)-Number(second)));
} else if (func=="Multiply"){
    Result = alert ("Multiplying first and second number is: "+ (Number(first)*Number(second)));
} else if (func=="Divide"){
    Result = alert ("Dividing  first by second gives us: "+ (Number(first)/Number(second)));
}else if(func=="modulo"){
    Result =   (Number(first)%Number(second));
    alert(Result);
}
else {
    alert("Cannot perform that function");
}