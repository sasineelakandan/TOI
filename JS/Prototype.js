// function persons(name,age){
//     this.name=name
//     this.age=age
// }


// persons.prototype.sayhello=function(){
//     console.log(`hai ${this.name} my age is ${this.age}`)
// }


// const persons1=new persons('sasi',25)


// persons1.sayhello()


// let animal={
//     makeSound:function(){
//      console.log(`${this.name} make sound`)
//     }
// }


// let dog={
//     name:'vodafone dog',
//     breed:'hybrid'
// }


// Object.setPrototypeOf(dog,animal)


// dog.makeSound()



let numbers=[1,2,3,4,5]

Array.prototype.sum=function(){
    let sum=0
    for(let i=0;i<numbers.length;i++){
        sum+=numbers[i]
    }

    return sum
}

console.log(numbers.sum())
