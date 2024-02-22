let p1 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        alert("i am resolve")
        resolve(2)

    },2000)
})

p1.then(()=>{
    console.log("i am p1")
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(45)
        },3000)
    }).then(()=>{
        console.log(value)

    })


})

    p1.then(()=>{
        console.log("Congratulation this promise is now resolved")

    })

    
