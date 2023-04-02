

function canConstruct(target, words) {
    let arr = Array(target.length + 1).fill(false);

    arr[0] = true;

    for(let i = 0; i< target.length; i++) {
        if(arr[i]) {
            console.log(i, target[i])
            for(let word of words) {
                if(word.startsWith(target[i])) {
                    console.log(word, target[i])
                    arr[word.length + i] = true; 
                }
            }

        }
    }

    console.log(arr);

    return arr[target.length];
}

//complexity

// time - o(n * m * m)
// space - o(m)


console.log(canConstruct('abcdef', ['ab', 'abc', 'cd', 'def', 'abcd']))
