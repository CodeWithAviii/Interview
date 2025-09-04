// let arr = [1, 2, 3, 4, 5, 5, 6, 3, 7, 2, 5]

// function uniquePreserve() {
//   const seen = new Set();   // unique track karne ke liye
//   const result = [];        // final output

//   for (const value of arr) {
//     if (!seen.has(value)) {   // agar pehle nahi aaya
//       seen.add(value);        // mark karo "seen"
//       result.push(value);     // output me daal do
//     }
//     // agar pehle se hai toh skip
//   }

//   return result;
// }

// console.log(uniquePreserve(arr))  // [1, 2, 3, 4, 5, 6, 7]

function uniquePreserve(arr){
    const seen = new Set();
    const result = [];

    for(const val of arr){
        if(!seen.has(val)){
            seen.add(val);
            result.push(val);
        }
    }
    return result
}

console.log(uniquePreserve([1, 2, 2, 5, 3, 8, 7, 6, 9]))


//Find largest number in array

function largest(arr) {
    let max = arr[0];
    for(let i=1; i < arr.length; i++){
        if(arr[i] > max){
            max = arr[i]
        }
    }
    return max;
}

console.log(largest([11, 15, 18, 65, 17, 44]))

let numbers = [10, 20, 50, 68, 49, 68, 95]

console.log(Math.max(...numbers))