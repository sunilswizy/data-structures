
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}


class Stack {
    constructor() {
        this.top = [];
    }

    peek() {
        return this.top[this.top.length - 1];
    }

    push(value) {
        this.top.push(value);
    }

    pop() {
        this.top.pop()
    }

}

const stack = new Stack();
stack.push(10);
stack.push(30);
stack.push(40);
stack.pop();
stack.push(50);

console.log(stack.peek());
console.log(stack.top)