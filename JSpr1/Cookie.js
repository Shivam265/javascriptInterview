console.log(document.cookie)
//alert(document.cookie)

/* In JavaScript, you can work with cookies to store small pieces of information on the client's side. Cookies are key-value pairs associated with a specific domain, and they are sent between the client and server with each HTTP request.*/
document.cookie = "name=rohit5545"
console.log(document.cookie)


let key = prompt("Enter your key")
let value = prompt("Enter your value")
document.cookie = `${encodeURIComponent(key)} = ${encodeURIComponent(value)}`
console.log(document.cookie)