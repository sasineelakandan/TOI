let memo={}

function recursion(n){
    if(n==1||n==0){
        return 1
    }
    if(n in memo){
        return memo[n]
    }
    console.log('hai')
    memo[n]= n*recursion(n-1)
    return memo[n]
    
    }
    
    
    
  console.log(recursion(10))

  console.log(recursion(5))

  console.log(memo)

    
