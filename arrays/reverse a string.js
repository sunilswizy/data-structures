
const str = 'linus';

function reverse(str) {
    const newArr = str.split('');
    let reversedString = ''
    newArr.forEach(word => {
        reversedString = word + reversedString;
    })

    return reversedString;
}


console.log(reverse(str))

const reverse2 = str => str.split('').reverse().join('');
const reverse3 = str => [...str].reverse().join('');
