// object with properties 
let rohit  = {
    name:"rohit",
    age: 23,
    role:"devops Engineer"

}


// Destructuting assignment

// let  {name,age,...rest} = rohit
// console.log(name,age,rest)

// let {name,role,...rest} = rohit
// console.log(name,role,rest)


// Array destructuring
let arr = [3,5,8,5,6,7,8,9]
/* no  need 
let a = arr[0]*/
//destructuring in  assignment 

// let [a,b,d,...rest] = arr
// console.log(a,b,c,d,rest)


//let[a, , b , , ...rest] = arr
//console.log(a,b,  rest)

// spread operator
//The rest syntax (...) can be used to collect remaining elements into a new array or object.

let arr1 = [3,4,5]
// array to object convert
let obj1  = {...arr1}
console.log(obj1)

function sum(v1,v2,v3){
    return v1+v2+v3
}

console.log(sum(...arr1))

let obj = {
    name:"mohit",
    company:"Google",
    role:"Engineer"
}
// change the value
//console.log({...obj, name:"sohan" , role:"deveoper"})
// without changing the value
console.log({ name:"sohan" , role:"deveoper",...obj})
