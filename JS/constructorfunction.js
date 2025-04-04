

function Person(name,age){
    this.name=name
    this.age=age
    this.greet=function(){
        console.log(`${this.name} constructor function`)
    }
}




const person=new Person('bob',25)

person.greet()