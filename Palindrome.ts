let a: number = 121

const original: number = a

let reversed: number = 0

while(a>0){
    let digit: number  = Math.floor(a%10)
    
    reversed = Math.floor(reversed * 10 + digit)

    a = Math.floor(a/10)
}

if(original === reversed){
    console.log("Is Palindrome")
} else{
    console.log("not palindrome")
}