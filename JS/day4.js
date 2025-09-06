//Flatten array
const arr = [1, 2, [3, 4, [5, 6]]];

function flattenArray(array) {
    let result = [];
    for(let i=0; i < array.length; i++){
        if(Array.isArray(array[i])){
            result = result.concat(flattenArray(array[i]))
        }else{
            result.push(array[i])
        }
    }
    return result;
}

console.log(flattenArray([1, 2, [3, [4]]])) // [1, 2, 3, 4, 5, 6]

console.log((arr.flat(2)));


// custom map 

function customMap(arr, callback){
    let result = [];
    for(let i=0; i< arr.length; i++){
        let transformmed = callback(arr[i], i, arr);
        result.push(transformmed)
    }
    return result
}

console.log(customMap([1,2,3], (num) => num*2))