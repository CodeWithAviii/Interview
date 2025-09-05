//Palindrome Checker
function isPalindrome(str){
    let revered = str.split("").reverse().join("");
    return str === revered;
}

console.log(isPalindrome("hey"))

//Char count

function charCount(str){
    let count = {}
    for (const char of str) {
        if(count[char]){
            count[char] += 1
        }else{
            count[char] = 1
        }
    }
    return count
}

console.log(charCount("Arvind"))