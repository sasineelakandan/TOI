let newyearDate= new Date('01/01/2026')
let todayDate=new Date()
let balancems=newyearDate-todayDate
let balanceday=Math.floor(balancems/(1000*60*60*24))
console.log(balanceday)
