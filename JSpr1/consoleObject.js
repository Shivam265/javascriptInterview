// console  used in object provides method in debugger and  monitoring 
console.log("log")
console.info("this is a information in selection in frontend developer")
// output the warning meg 
console.warn("this is a warning")
//  output the error message 
console.error("this is a error")
let emp = [
    {
        name:"rohit",
        comp:"Google",
        age:28
    }
];
// table and tabular in display
console.table(emp);
// start time to execution process  end time 
console.time("p1")
console.timeEnd("p1")

//start time  to and execution time end process time
console.time("for loop")
let a = "rohit"
for(let i = 0; i<a.length; i++){
    console.log(i)
}
console.timeEnd("for loop")
