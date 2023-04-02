function LongestWord(sen) { 

    let splitWords = sen.match(/[a-z0-9]+/gi);
    let longest = ''

    splitWords.forEach(el => {
        if(el.length > longest.length) {
            longest = el;
        }
    })    
    return longest; 
  
}

console.log(LongestWord("I Love Me"));

//"fun&!! time" == time