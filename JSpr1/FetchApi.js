// Making a simple GET request
let p = fetch("https://ifsc.razorpay.com/")
// Check if the response status is OK (status code 200-299)
p.then((response)=>{
    console.log(response.status)
    console.log(response.ok)
    console.log(response.headers)
    return response

}).then((value2)=>{
    console.log(value2)
})

