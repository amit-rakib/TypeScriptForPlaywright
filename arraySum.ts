let ars: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9]

let sum = 0

for(let i = 0; i< ars.length; i++){
    sum = sum + ars[i]
}

console.log(sum)

// max and min

let max = ars[0]
let min = ars[0]

for(let i=1; i<ars.length; i++){
    if(ars[i]>max){
        max = ars[i]
    }
}

for(let i = 1; i<ars.length; i++){
    if(ars[i]<min){
        min = ars[i]
    }
}

console.log(`Max: ${max}`)
console.log(`Min: ${min}`)

// reverse array 

ars = ars.reverse()
console.log(ars)

