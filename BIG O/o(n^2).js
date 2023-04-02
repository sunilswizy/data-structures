// Log all paris of array

const boxes = [1, 2, 3, 4, 5];

function print(item) {
    for(let i = 0; i < item.length; i++) {
        for(let j = 0; j< item.length; j++) {
            console.log(item[i], item[j]);
        }
    }
}

print(boxes) // o(n) * n(n) ==> o(n ^ 2)