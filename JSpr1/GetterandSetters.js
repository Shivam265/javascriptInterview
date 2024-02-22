/* In JavaScript, getters and setters are special methods that allow you to define the behavior of reading and writing properties on an object. They are part of the ES5 and later versions of the language and are commonly used to control access to the properties of an object.*/

class Animal{
    constructor(name){
        this._name = name;
    }

    fly(){
        alert("mai udhh rha hoon")
    }

    get name(){
        return this._name
    }

    set name(newName){
        this._name = newName
    }

}

let a = new Animal("rohit")
a.fly()
console.log(a.name)
a.name = "mohit"
console.log(a.name)