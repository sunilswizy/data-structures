
function Urlify(str) {
    let newStr = "";
    let flag = true;
    for(let i = str.length - 1; i >= 0; i--) {
        if(str[i] === " ") {
            newStr = "%20" + newStr;
        }
        else {
            if(flag) {
                flag = false;
                newStr = "";
            }
            newStr = str[i] + newStr;
        }
    }

    return newStr;
}


function Urlify2(str) {
    let spaceCount = 0;
    let trueLength = str.length;

    for(let s of str) {
        if(s === " ") {
            spaceCount++;
        }
    }

    let index = trueLength + spaceCount * 2;

    console.log("index", index, spaceCount)
    for(let i = trueLength - 1; i > 0; i--) {

        if(str[i] === " ") {
            console.log(str)
            str[index - 1] = '0';
            str[index - 2] = '2';
            str[index - 3] = '%';
            index -= 3;
        }
        else {
            str[index - 1] = str[i];
            index--;
        }
    }

    return str;
}


console.log(Urlify2('Mr John smith   '));