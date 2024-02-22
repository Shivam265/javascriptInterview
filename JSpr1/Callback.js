// Synchronous programming 
/*In JavaScript, synchronous refers to the execution of code in a sequential and blocking manner. In a synchronous execution model, each operation is performed one at a time, and the program waits for each operation to complete before moving on to the next one.*/ 
/*let a = prompt("What is your name")
let b = prompt("what is your age")
let c = prompt("what is your fav color")
console.log(a+"is" +b+"your age" +c+"fav color" )*/


//Asynchronous programming
/*Asynchronous programming is crucial when dealing with tasks that might take some time to complete, such as fetching data from a server, reading a file, or handling user input*/
/*console.log("start")
setTimeout (function(){
    console.log("I am settime out")

},2000);

console.log("end")*/

// callback in js
/*Callbacks are functions passed as arguments to other functions, and they are executed after the completion of a specific task. Callbacks are a traditional way of handling asynchronous operations*/
function loadScript(src,callback){
    var script = document.createElement("script")
    script.src = src;
    script.onload = function(){
        console.log("loaded script with src" + src)
        callback(null,src)
    }
    script.onerror = function(){
        console.log("error  in loading with src" + src)
        callback(new Error("src is got some error"))
    }
    document.body.appendChild(script);
}

function hello(error,src){
    if(error){
        console.log(error)
        return
    }
    alert("hello world" + src)
}

function goodmorning(error,src){
    if(error){
        console.log(error)
        return
    }
    alert("good morning" +src)
}

loadScript("https://www.google.com", goodmorning)



