let ua: number[] =  [40, 20, 50, 30, 10]

 let n: number = ua.length
for (let i = 0; i< n-1; i++){
     
    for(let j = 0; j<n-i-1; j++){
        if(ua[j] > ua[j+1]){
            let swap: number = ua[j]
            ua[j] = ua[j+1]
            ua[j+1] = swap
        }
    }

}

console.log(ua)