

function factory(name,age){
    return{
        name,
        age,
        greet:function(){
            console.log(this.name+this.age)
        }
    }
}


const person= factory('sasi',25)

person.greet()