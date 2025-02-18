let rotate: number[] = [1, 2, 3, 4, 5]

let len = rotate.length
let k = 2
   k = k%len // hanle cases where k>n



function reverse(start: number, end: number){

   while(start < end){

    [rotate[start], rotate[end]] = [rotate[end], rotate[start]]

    start++
    end--
   }

}

reverse(0, len-1) // reverse an array

console.log(rotate)

reverse(0, k-1) //

console.log(rotate)

reverse(k, len-1) // rotate an array

console.log(rotate)


// Array Palindrome

let newArr = [1, 2, 3, 2, 1]

let rev = newArr.reverse()

console.log(rev)

if(newArr === rev){
    console.log("True")
} else{
    console.log("False")
}