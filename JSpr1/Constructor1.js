/*class RailwayForm{
    constructor(givenname,trainno,address){
        console.log("Constructer is called " + givenname + trainno)
        this.name = givenname
        this.trainno = trainno
        this.address = address
        
    }
        
    preview(){
        alert(this.name + "form is submitted for train number: " + this.trainno + " and your address: " + this.address)
    }
    submit(){
        alert(this.name + " form is submitted for train number: " + this.trainno)


    }

    cancel(){
        alert(this.name + " form is cancel for train number: ", + this.trainno)
        this.trainno = 0

    }

   
}


let rohitForm = new RailwayForm("rohit", 12141, " banglore, ka(7878845) ")
rohitForm.preview()
rohitForm.submit()
rohitForm.cancel()*/

// self example code 
 class university{
    constructor(course,dept){
        this.course = course
        this.dept = dept
    }

    present(){
        alert(`my course is: ,  ${this.course}  and department  ${this.dept} `)

    }

    absent(){
        alert(`my course is: ${this.course} and department ${this.dept} `)
    }
 

}


let sohan = new university("mca","cs")
sohan.present()
sohan.absent()
