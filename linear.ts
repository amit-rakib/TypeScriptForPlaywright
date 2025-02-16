console.log("hello world");

let array: number [] = [20, 30, 40, 50, 60]

let search: number = 400
let flag: boolean = false

for(let i=0; i<array.length; i++){
    if(array[i] === search){
        console.log("found")
        flag = true
        break;
    }
}

if(flag === false){
console.log("not found")
}