//Logic Statement

let rain = true
if(rain)  {
    console.log("do not go")
} else {
    console.log("go")
}

let age = 17
if (age < 18) {
    console.log("You cannot enter")
} else {
    console.log("you may enter")
}


// Ternary Operators
// operand1 ? operand2 : operand3;
// expression? statement for true : statement for false;

let access = age < 18 ? "denied" : "allowed"
access

let access1 = age < 18 ? "You may enter" : "You cannot enter"
access1