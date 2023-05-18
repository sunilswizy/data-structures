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

const p = new Node(100);
const q = new Node(200);
const r = new Node(300);

p.next = q;
q.next = r;

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


const getNodeWithIndex = (head,index) => {
    let curr = head;
    let count = 0;

    while(curr) {
        if(count === index) {
            return curr.val;
        }

        count++;
        curr = curr.next;
    }

    return -1;
} 

const getNodeWithIndexIterative = (head,index) => {
    if(!head) return -1;

    if(index === 0) return head.val;

    return getNodeWithIndexIterative(head.next, index - 1);
} 


const reverseList = (head) => {
    let curr = head;
    let prev = null;

    while(curr) {
        let temp = curr.next;
        curr.next = prev;
        prev = curr;
        curr = temp;
    }

    return prev;
}

const reverseListRecursive = (head, prev) => {
    if(!head) return prev;

    let temp = head.next;
    head.next = prev;

    return reverseListRecursive(temp, head);
}


const zipperList = (headA, headB) => {
    let l1 = headA;
    let l2 = headB;

    let head = new Node(-1);
    let curr = head;

    while(l1 || l2) {
        if(l1) {
            curr.next = new Node(l1.val);
            l1 = l1.next;
            curr = curr.next;
        }

        if(l2) {
            curr.next = new Node(l2.val);
            l2 = l2.next;
            curr = curr.next;
        }
    }

    return head.next;
}

const zipperListRecursive = (l1, l2) => {

    if(!l1 && !l2) return null;
    if(!l1) return l2;
    if(!l2) return l1;

    let next1 = l1.next;
    let next2 = l2.next;

    l1.next = l2;
    l2.next = zipperListRecursive(next1, next2)

    return l1;
}

console.log(print(zipperListRecursive(a, p, new Node(-1))));

// console.log(print(reverseListRecursive(a)))
// console.log(getNodeWithIndexIterative(a, 2))
// console.log(find(a, 6))
// console.log(sum(a));
// console.log(print(a));
// console.log(iterative(a));













