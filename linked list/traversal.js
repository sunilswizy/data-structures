class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}


const a = new Node(2);
const b = new Node(4);
const c = new Node(6);
const d = new Node(8);
const e = new Node(10);
const f = new Node(12);


a.next = b;
b.next = c;
c.next = d;
d.next = e;
e.next = f;


const print = (head) => {
    if(!head) return [];
    return [head.val, ...print(head.next)];
}

const iterative = (head) => {
    let curr = head;
    let res = []
    while(curr) {
        res.push(curr.val);
        curr = curr.next;
    }

    return res;
}


const sum = (head) => {
    let res = 0
    while(head) {
        res += head.val;
        head = head.next;
    }
    return res;
}

const find = (head, target) => {
    if(!head) return false;
    if(head.val === target) return true;
    
    return find(head.next, target);
}

console.log(find(a, 6))

// console.log(sum(a));
// console.log(print(a));
// console.log(iterative(a));













