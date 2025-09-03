//reverse string

function reverseStr(str){
    let reversed = str.split("").reverse().join("");
    return reversed;
}

// console.log(reverseStr("hello"))

function revStr(str){
    let reversed = ''
    for(let i = str.length - 1; i >= 0; i--){
        reversed += str[i]
    }
    return reversed;
}

// console.log(revStr("Arvind Here bro"))


//Factorial 

let n = 5;
let result = 1

for(let i = 1; i <= n; i++){
    result *= i
}

// console.log(result)

function Factorial(n){
    let result = 1
    for(let i=1; i <= n; i++){
        result *= i;
    }
    return result
}

console.log(Factorial(5))