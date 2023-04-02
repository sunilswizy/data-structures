
class Node {
    constructor(value) {
        this.node = {
            value,
            prev: null,
            next: null
        }
    }
}

class DoubleLinkedList {
    constructor(value) {
        this.head = {
            value,
            prev: null,
            next: null
        }

        this.tail = this.head;
        this.length = 1;
    }

    append(value) {
        const newNode = new Node(value);

        newNode.node.prev = this.tail;
        this.tail.next = newNode.node;
        this.tail = newNode.node;
        this.length += 1;
    }

    prepend(value) {
        const newNode = new Node(value);

        newNode.node.next = this.head;
        newNode.node.prev = null;
        this.head.prev = newNode.node;
        this.head = newNode.node;
        this.length += 1;
    }

    printList() {
        let list = this.head;
        const arr = [];
        while(list != null) {
            // console.log({list})
            arr.push(list.value);
            list = list.next
        }
        console.log(arr);
    }

    insert(index, value) {
        const newNode = new Node(value);

        if(index >= this.length) {
            return this.append(value);
        }

        let elemet = this.findTheElement(index - 1);
        newNode.node.next = elemet.next;
        elemet.next.prev = newNode;
        newNode.node.prev = elemet;
        elemet.next = newNode.node;

        this.length ++;
    }

    findTheElement(index) {
        
        let currentIndex = 0;

        let checkElement = (element) => {
            
            if(currentIndex === index) {
                return element;
            }
            currentIndex ++;
            return checkElement(element.next)
        }
        return checkElement(this.head);
    }

    remove(index) {
        const elemet = this.findTheElement(index - 1);
        console.log(elemet);

        elemet.next = elemet.next.next;
        elemet.next.prev = elemet;
    }
} 

const doubleLinkList = new DoubleLinkedList(10);

doubleLinkList.append(15);
doubleLinkList.append(25);

doubleLinkList.prepend(5);

doubleLinkList.insert(3, 20)
doubleLinkList.remove(2)

doubleLinkList.printList()
// console.log(doubleLinkList.head)



