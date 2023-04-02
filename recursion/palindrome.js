

function palindrome(str) {
    return getPalindrome(str);
}

function getPalindrome(str) {

    if(str.length === 0 || str.length === 1) {
        return true;
    }

    if(str[0] === str[str.length - 1]) {
        return getPalindrome(str.slice(1, str.length - 1));
    }

    return false;
}

console.log(palindrome('racecar'))