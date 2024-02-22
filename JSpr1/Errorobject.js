


try {

    let age = prompt("Enter your age")
    age = Number.parseInt(age)
   
    if(age>150){
        throw new ReferenceError("Error is probably not true")
        
    }
    
    // custom error
    //throw new ReferenceError("rohit is a not boy")

}catch(error){
    // error  name 
    console.log(error.name)
    // error meg
    console.log(error.message)
    console.log(error.stack)

}

console.log("scripting is running")