
function allConstruct(target, words) {
    let arr = Array(target.length + 1).fill().map((el) => []);

    arr[0] = [[]];
    // console.log(arr);


    for(let i = 0; i < target.length; i++) {
        if(arr[i].length) {

            for(let word of words) {
                console.log(target.slice(i, i + word.length))
                if(target.slice(i, i + word.length) === word) {
                    console.log("true ", i)
                    arr[word.length + i] = [ ...arr[word.length + i], ...arr[i].map((el) => [...el, word])] 
                }
            }
        }
    }
    console.log(arr);


    return arr[target.length]
}


console.log(allConstruct('purple', ['purp', 'p', 'ur', 'le', 'purpl']));
console.log(allConstruct('ef', ['e', 'ee', 'eee', 'eeee', 'eeeee', 'eeeeee', 'eeeeeee']));

// complexity

// time - o(n ^ m)
// space - o(n ^ m)