const items = new Array(100).fill('next');
const item2 = new Array(10000).fill('last')

function add(item1, item2) {
    item1.forEach(el => el); // o(n)

    item2.forEach(el => el); // o(m)
}

add(items, item2) // ---> o(n) + o(m) ==> o(n+m)