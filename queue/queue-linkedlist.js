

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}



class Queue {
    constructor() {
        this.front = null;
        this.rear = null;
        this.length = 0;
    }

    peek() {
        return this.front;
    }

    enQueue(value) {
        const node = new Node(value);

        if(this.length === 0) {
            this.front = node;
            this.rear = node;
        }
        else {
            // const holdingPointer = this.front;
            // this.front = node;
            // this.front.next = holdingPointer;
            this.rear.next = node;
            this.rear = node;
        }
        this.length ++;
    }

    deQueue() {
        if(!this.front) {
            return;
        }

        let temp = this.front;
        this.front = this.front.next;
        
        if(temp === this.rear) {
            this.rear = null;
        } 

        this.length --;
    }
}

const queue = new Queue();
queue.enQueue(20);
queue.enQueue(30);
queue.enQueue(40);

queue.deQueue();
console.log("rear ", queue.rear)
console.log(queue.front)