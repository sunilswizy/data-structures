// 10 --> 15 --> 20

// let linkedList = {
//     head: {
//         value: 10,
//         next: {
//             value: 15,
//             next: {
//                 value: 20,
//                 next: null
//             }
//         }
//     }
// };

class Node {
    constructor(value) {
        this.node = {
            value,
            next: null
        }
    }
}

class LinkedList {
    constructor(value) {
        this.head = {
            value,
            next: null
        }

        this.tail = this.head;
        this.length = 1;
    }

    append(value)  {
        const newNode = new Node(value);

        this.tail.next = newNode.node;
        this.tail = newNode.node;
        this.length += 1;
    }

    prepend(value) {
        const newNode = new Node(value);
        newNode.node.next = this.head;
        this.head = newNode.node;

        this.length +=1;
    }

    printList() {
        let currentNode = this.head;
        const arr = [];

        while(currentNode != null) {
            arr.push(currentNode.value);
            currentNode = currentNode.next;
        }
        console.log(arr)
    }

    insert(index, value) {
        let currentIndex = 0;

        
        if(index >= this.length) {
            return this.append(value);
        }

        let newNode = new Node(value);
        const findedElement = this.findTheElement(index - 1);
        newNode.node.next = findedElement.next;
        findedElement.next = newNode.node;
        this.length ++;

    } 

    remove(index) {
        if(index >= this.length) {
            return;
        }

        let findedElement = this.findTheElement(index - 1);
        findedElement.next = findedElement.next.next;
        this.length --;
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

}

const linkesList = new LinkedList(10);
linkesList.prepend(5);
// linkesList.append(15);
linkesList.append(20);
linkesList.append(30);
linkesList.insert(2, 15);
linkesList.remove(3);
// console.log(linkesList.head);
linkesList.printList()