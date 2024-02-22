/* Error handling in JavaScript can be done using several mechanisms, including try...catch blocks, throwing and catching exceptions, and handling asynchronous errors. Here are some common techniques for error handling in JavaScript:
/*setTimeout(()=>{
    console.log("Hacking wifi.....pls wait.....")

},2000)

setTimeout(()=>{
    console.log("Hacking user name and password.....pls wait.....")

},3000)

setTimeout(()=>{
    console.log("Hacking facebook meta fetched data .....pls wait.....")
    

},4000)

setTimeout(()=>{
    console.log("Hacking Google.....pls wait.....")

},5000)

/* Use try...catch blocks to handle synchronous errors.*/
try{

    console.log(rohit)

}

catch(error){

    console.log("error handle")


}
  


setTimeout(()=>{
    console.log("Hacking microsoft.....pls wait.....")

},6000)

console.log("Hacking wifi.....pls wait.....")
console.log("Hacking wifi.....pls wait.....")
console.log("Hacking wifi.....pls wait.....")
console.log("Hacking wifi.....pls wait.....")
console.log("Hacking wifi.....pls wait.....")
console.log("Hacking wifi.....pls wait.....")
console.log("Hacking wifi.....pls wait.....")


// self Example

/* When working with asynchronous code, use .catch() with promises or try...catch with async/await.*/
async function hello(){
    try{
        let response  =  await fetch("https://www.google.com")
        let rohit =  await response.json()
        console.log(rohit)
    }catch(error){
        console.error('error catch',error)

    }

}

hello()