

function countConstruct(target, words) {
    let arr = Array(target.length + 1).fill(0);
    
    arr[0] = 1;

    for(let i = 0; i < target.length; i++) {

        if(arr[i] !== 0) {
            for(let word of words) {
                if(target.slice(i, i + word.length) === word) {
                    // console.log(word, target[i])
                    arr[word.length + i] += arr[i]; 
                }
            }
        }
    // console.log(arr);

    }

    // console.log(arr);
    return arr[target.length];
}

//complexity

// time - o(n * m * m)
// space - o(m)


console.log(countConstruct('purple', ['purp', 'p', 'ur', 'le', 'purpl']));
console.log(countConstruct('ef', ['e', 'ee', 'eee', 'eeee', 'eeeee', 'eeeeee', 'eeeeeee']));
