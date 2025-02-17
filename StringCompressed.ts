
const str: String = "aaabbcccca"

let compressed = ""

let count = 1

for(let i=0; i<str.length; i++){
    if(str[i] === str[i+1]){
        count++
    } else{
       // compressed += count + str[i];

       // if dont want to show 1
       compressed += (count > 1? count : "") + str[i]
        count = 1
    }

}

console.log(compressed)
