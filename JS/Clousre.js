// const Increment=Count()


function Count(){
  let count=0
  return function inside(){
     return ++count
  }
}

const Increment=Count()

console.log(Increment())
console.log(Increment())
console.log(Increment())