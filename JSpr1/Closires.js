// message = "Good global"
// function hello1(){
//    let  message= ("Good morning")
//         console.log("hello1" + message)
//     let c = function hello2(){
//         console.log("ia m c" + message)
//     }

//     return c 
// }

// c = hello1()
// c()

function outerFunction() {
    // Outer variable
    let outerVariable = 'I am from the outer function';
  
    // Inner function (closure)
    function innerFunction() {
      console.log(outerVariable);
    }
  
    // Returning the inner function
    return innerFunction;
  }
  
  // Creating a closure by calling outerFunction
  const closure = outerFunction();
  
  // Executing the closure
  closure(); // Outputs: I am from the outer function