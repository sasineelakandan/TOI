let date= new Date()

let start=date.setHours(9,15,0)
let end=date.setHours(17,45,0)

let defms=end-start

let difHours=defms/(1000*60*60)

console.log(difHours)