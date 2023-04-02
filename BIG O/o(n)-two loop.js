

const items = new Array(100).fill('next');

function add() {
    items.forEach(el => el); // o(n)

    items.forEach(el => el); // o(n)
}

add(items) // ---> o(n) + o(n) ==> o(2n) ==> o(n)