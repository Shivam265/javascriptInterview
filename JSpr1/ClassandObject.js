// In JavaScript, a class is a blueprint for creating objects. Objects are instances of classes. Classes provide a way to define the structure and behavior of objects, allowing you to create and work with instances that share common characteristics and functionality.
class RailwayForm{
    submit(){
        alert(this.name +"form is submitted for train number" +this.trainno)


    }

    cancel(){
        alert(this.name + "form is cancel for train number",this.trainno)

    }

    fill(givenname,trainno){
        this.name = givenname
        this.trainno = trainno

    }
}
// create a form rohit
let rohitForm1 = new RailwayForm()
let rohitForm2 = new RailwayForm()
// fill the form in detail 
rohitForm1.fill("rohit",12422)
rohitForm2.fill("rohit",12420)
let mohitForm = new RailwayForm()
mohitForm.fill("mohit",12184)

rohitForm1.submit()
rohitForm2.submit()
mohitForm.submit()
rohitForm2.cancel()