

const items = new Array(100).fill('next');

function add() {
    items.forEach(el => el); //o(n)
}

add(items)