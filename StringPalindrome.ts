
const str1: String = "ana"

const org: String = str1

const rev: String =  str1.split("").reverse().join("")

console.log(rev)

if(org === rev){
    console.log("Palindrome")
} else{
    console.log("not")
}

// using for loop 

let rever = ""

for(let i=str1.length-1; i>=0; i--){
      rever+= str1[i]
}

if(rever === org){
    console.log("Again Palindrome")
} else {
    console.log("Not")
}