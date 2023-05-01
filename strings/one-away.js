

function oneAway(str1, str2) {

    if(str1.length === str2.length) {
        return checkReplacement(str1, str2);
    }
    else if((str1.length + 1) === str2.length) {
        return checkDeletion(str1, str2);
    }
    else if(str1.length - 1 === str2.length) {
        return checkInsertion(str1, str2);
    }

    return false;
}


function checkInsertion(str1, str2) {
    let found = false;
    for(let i = 0; i < str1.length; i++) {
        if(str1[i] != str2[i]) {
            if(found) {
                return false;
            }
            
            found = true;
        }
    }

    return str1 === str2;
}

function checkDeletion(str1, str2) {
    let found = false;
    for(let i = 0; i < str2.length; i++) {
        if(str1[i] != str2[i]) {
            if(found) {
                return false;
            }
            
            found = true;
        }
    }
    
    return true;
}

function checkReplacement(str1, str2) {
    let found = false;
    for(let i = 0; i < str1.length; i++) {
        if(str1[i] != str2[i]) {
            if(found) {
                return false;
            }
            
            found = true;
        }
    }

    return str1 === str2;
}


// function optimized(str1, str2) {
//     if(Math.abs(str1.length - str2.length) > 1) {
//         return false;
//     }

//     let s1 = str1.length > str2.length ? str1 : str2;
//     let s2 = str2.length > str2.length ? str2 : str1;

//     console.log(s1, s2)

//     let index1 = 0;
//     let index2 = 0;
//     let foundDiff = false;

//     while(index1 < s1.length && index2 < s2.length) {

//         if(s1[index1] !== s2[index2]) {
//             if(foundDiff) return false;

//             foundDiff = true;

//             if(s1.length == s2.length) {
//                 index1++;
//             }
//         }
//         else {
//             index2++;
//         }

//         index1++;
//     }

//     return true;

// }

console.log(oneAway('pale', 'palee'))