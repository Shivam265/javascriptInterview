const sayHello = (name,greeting)=> 
console.log(greeting +""+ name )

const s = {
    name:"rohit",
    role:"Engineer",
    age:25,

    show: function(){
        console.log(`the name is ${this.name}`)
        setTimeout (()=>{

        },3000)
        }


    }



console.log(s.name)


// sayHello("rohit","Good after noon")