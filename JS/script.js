const num = [1,2,3,4]
num[100] = 5
console.log(num)
console.log(num.length)

//Reverse a string
function reverseStr(str) {
    let reversed = ''
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i]
    }
    return reversed
}

console.log(reverseStr('hello'))

console.log(typeof typeof 100) //string
//the logic we will get the output as string is that typeof 100 will return number which will be converted to string and then typeof typeof 100 will return string

const arr = [..."Arvind"]
console.log(arr)
//the logic here is that we are using the spread operator to convert string to array

console.log(parseInt('10+2'))
console.log(parseInt('4AK'))
console.log(parseInt('A4K'))

function hey() {
    return
}
console.log(hey())

console.log([1, 2].map(num => {
    if(num > 0) return;
    return num * 2
}))

//undefined is a falsy value

{
    function abc() {
        console.log("Arvind")
    }
}

abc() 


function check() {
    return 100
}
var check;
console.log(check)

//var and function both will be hoisted but function has higher priority that's why console.log(check) will return function

//TDZ: Temporal Dead Zone - when a variable is declared but not initialized