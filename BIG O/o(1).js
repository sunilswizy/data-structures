

const items = new Array(100).fill('next');

function add() {
    console.log(items[1]);  //o(1)
    console.log(items[10]) // o(1)
}

add(items); //--> o(1)