

function LongestPalindrome(s, str='') {

    if(s.length === str.length) {
        return 0;
    }

    console.log(s, str)

    // console.log(s.slice(0, str.length + 1));

    for(let i = 0; i <= s.length; i++) {
        // console.log(s.slice(i));

        let currentStr = s.slice(i);
        
        LongestPalindrome(currentStr, currentStr.slice(0, str.length + 2))
    }


}


LongestPalindrome('cbbd')