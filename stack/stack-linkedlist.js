
class Node {
    constructor(value) {
        this.node = {
            value,
            next: null
        }
    }
} 


class Stack {
    constructor() {
        this.top = null;
        this.bottom = null;
        this.length = 0;
    }

    push(value) {
        const newNode = new Node(value);

        if(this.length === 0) {
            this.top = newNode.node;
            this.bottom = newNode.node;
        }
        else {
            const holdingPoineter = this.top;
            this.top = newNode.node;
            this.top.next = holdingPoineter;
        }
        this.length ++;
    }

    peek() {
        return this.top ? this.top.value : null;
    }

    pop() {
        if(!this.top) {
            return null;
        }
        if(this.length === 1) {
            this.bottom = null;
        }
        // const holdingPoineter = this.top;
        this.top = this.top.next;
        this.length --;
    }

}


const stack = new Stack();

stack.push(10);
console.log(stack.peek())
stack.push(20);
stack.pop();
stack.push(30);
console.log(stack.top)
console.log(" stack.bottom ",  stack.bottom)
