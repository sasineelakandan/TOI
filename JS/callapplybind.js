let a={
    name:'sasi',
    age:25,
    greet:function(address){
        console.log(`${this.name} my address  ${address}`)
    }
}


let b={
    name:'jithin',
    age:30
}



let c=a.greet.bind(b,'coimbatore','attani')

c()

