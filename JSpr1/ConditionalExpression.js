// the conditional operator used in ternary operator and if-else statement
//let  a  = 20;
let a = prompt("Enter your value")
a = Number.parseInt(a)
if(a<10){
    console.log("if condition")
}

else if(a<20) {
    console.log("else if condition")
    
}

else if(a<=20){
    console.log("condion is true")
}

else{
    console.log("condition is false")
}
// Ternary operator 
console.log((a>18? "eligible for vote":"eligible not vote"))
