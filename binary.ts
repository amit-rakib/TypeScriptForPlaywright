let arrays: number[] = [10, 20, 30, 40, 50]

let num: number = 40
let low: number = 0
let high: number = arrays.length-1

let found: boolean = false

while(low<=high){
    let mid: number = Math.floor((low+high)/2)
     
    if(arrays[mid] === num){
        console.log("Found at location"+ (mid+1))
        found= true
        break
    } else if (arrays[mid]<num){
        low=mid+1
    } else{
        high=mid-1
    }

}

if(found === false){
    console.log("not found")
}

