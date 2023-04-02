

function reverse(str, idx = 0 ) {
    if(idx === str.length - 1) return str[idx];

    return reverse(str, idx + 1) + str[idx]
}


console.log(reverse('Hello'))
