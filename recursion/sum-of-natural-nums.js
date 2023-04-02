

function sumOfNaturalNums(num) {
    if(num <= 1) return num;

    return num + sumOfNaturalNums(num - 1);
}

console.log(sumOfNaturalNums(10))
