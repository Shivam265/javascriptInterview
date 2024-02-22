/* In JavaScript, a constructor is a special method that is called when an object is created from a class. It initializes the object's properties and sets up any initial state. The constructor method is defined using the constructor keyword within a class.*/
class RailwayForm{
    constructor(givenname,trainno){
        console.log("Constructer is called " + givenname + trainno)
        this.name = givenname
        this.trainno = trainno
       

    }
        
    
    submit(){
        alert(this.name +"form is submitted for train number" +this.trainno)


    }

    cancel(){
        alert(this.name + "form is cancel for train number",this.trainno)

    }

   
}
// create a form rohit
let rohitForm = new RailwayForm("rohit",12122)

// create a form a forms for mohit
let mohitForm1 = new RailwayForm("mohit",12420)
let mohitForm12 = new RailwayForm("mohit",12420)
//mohitForm2.fill("mohit",12184)

rohitForm.submit()
mohitForm1.submit()
mohitForm1.submit()
mohitForm1.cancel()
