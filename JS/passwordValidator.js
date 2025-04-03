

function passwordValidator(password){
   
    let hascapital=/[A-Z]/.test(password)
    let hassmall=/[a-z]/.test(password)
    let hasuniqword=/[$@%!&*(){}]/.test(password)
    let hasnum=/[0-9]/.test(password)

   if(!hascapital){
     return 'atlest one capital word'
   }
   if(!hassmall){
      return 'atlest one small word'
   }
   if(!hasuniqword){
     return 'uniq char is must'
   }

   if(!hasnum){
    return 'one num is must'
   }

   return 'password is valid'
}


console.log(passwordValidator('Sasi@'))