let words = ["eat", "tea", "tan", "ate", "nat", "bat"];


let map=new Map()

for(let i=0;i<words.length;i++){
    let sortedWord=words[i].split('').sort().join('')
    if(!map.has(sortedWord)){
        map.set(sortedWord,[])
    }

    map.get(sortedWord).push(words[i])
}

console.log(Array.from(map.values()))