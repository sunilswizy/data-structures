

let head = {val: 1, next: null}
let a = {val: 2, next: null}
let b = {val: 3, next: null}
let c = {val: 4, next: null}
let d = {val: 5, next: null}
let e = {val: 6, next: null}

head.next = a;
a.next = b;
b.next = c;
c.next = d;
d.next = e;

// console.log(head)

function traverse(list) {
    if(!list) {
        return [];
    }
    
    return [list.val, ...traverse(list.next)]
}

function reverseList(list) {
    if(list === null || list.next === null) return list;
    console.log(list.val, list)
    let p = reverseList(list.next);

    list.next.next = list;
    list.next = null;
    console.log("p", traverse(p), traverse(head))
    return p;
}

console.log(traverse(head));
head = reverseList(head);
console.log(head)
console.log(traverse(head));

