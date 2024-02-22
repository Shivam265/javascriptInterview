/*The 'async' keyword is used to define a function as asynchronous, and the 'await' keyword is used to pause the execution of the function until a promise is resolved. Async a function keyword return a promise */
/*async function rohit (){
let delhiWeather = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("27 deg")

    },2000)

})

let bangloreWeather = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("20 deg")
    },4000)

})

// delhiWeather.then(alert)
// bangloreWeather.then(alert)

console.log('fetching delhi weather plas wait ')
//await makes a function wait for a Promise
let delhiW = await delhiWeather
console.log("fetched delhi weather is " + delhiW)
console.log("fetcing banglore weather pls wait ")
let bangloreW = await bangloreWeather
console.log('Fetched  banglore weather is' + bangloreW)
return [delhiW,bangloreW]

}

const mohit = async ()=>{
    console.log("hey i am mohit wait")
}

const main1 = async()=>{
console.log("welcome to weather control room")
let a = await rohit()
let b = await mohit()

}

main1()*/


// self example
async function university (){
    let bca = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("i am resolve")

        },3000)

    })


    let mca = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            reject ( new Error("failed value"))

        },6000)
    })


    bca.then(alert)
    mca.then(alert)



    let b = await bca
    console.log("i am  wait bca" + b) 

    let c = await mca
    console.log("i am wait mca" + c) 
}


university()
