let arr: number[] = [ 1, 1, 2, 2, 2, 3, 3, 4, 4, 5]

// Even Odd

let eveCount = 0
let oddCount = 0

for(let i =0; i< arr.length; i++){
    if(arr[i]%2 === 0){
         eveCount++
    } else {
        oddCount++
    }
}

console.log(`Even = ${eveCount} and Odd = ${oddCount}`)

// Search an element 

let element = 5

for(let i=0; i<arr.length; i++){
    if(arr[i] === element){
        console.log(`Element found at ${i+1}`)
    }
}

// Frequency of element // Compressed

let compre = ""
let c = 1

for(let i = 0; i<arr.length; i++){
    if(arr[i] === arr[i+1]){
        c++
    } else {
        compre += c + ":"+arr[i]+ " "
        c=1
    }
}
console.log(compre)

// second largest number 

let secondMax = 0
let ma: number = arr[0]

for(let a of arr){
    if(a > ma){
        secondMax = ma;
        ma = a;
    }
}

console.log(secondMax)