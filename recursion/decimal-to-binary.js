

function decialToBinary(num) { 
    if(num <= 1) return 1;

    let mode = num % 2;
    let div = Math.floor(num / 2);

    return decialToBinary(div) + `${mode}`;
}


console.log(decialToBinary(5))