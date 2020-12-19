class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
        this.previous = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    
    push(val) {
        let newNode = new Node(val);
        if (this.length === 0) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            newNode.previous = this.tail;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }

    pop() {
        if (this.length === 0) return undefined;
        let nodeToRemove = this.tail;
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else  {
            this.tail = nodeToRemove.previous;
            this.tail.next = null;
            nodeToRemove.previous = null;
        }
        this.length--;
        return nodeToRemove;
    }

    shift() {
        if (length === 0) return undefined;
        let nodeToRemove = this.head;
        if (length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.head = nodeToRemove.next;
            this.head.previous = null;
            nodeToRemove.next = null;
        }
        this.length--;
        return nodeToRemove;
    }

    unshift(val) {
        const newNode = new Node(val);
        if (this.length === 0) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head.previous = newNode;
            this.head = newNode;
        }
        this.length++;
        return this;
    }

    // Get with while loop
    get(index) {
        if (index < 0 || index >= this.length) return null;
        let count, currentNode;
        if (index < this.length / 2) {
            count = 0;
            currentNode = this.head;
            while(count !== index) {
                currentNode = currentNode.next;
                count++;
            }
        } else {
            count = this.length - 1;
            currentNode = this.tail;
            while(index !== index) {
                currentNode = currentNode.next;
                count--;
            }
        }
        return currentNode;
    }

    // Get with for loop
    // get(index) {
    //     if (index < 0 || index >= this.length) return null;
    //     let currentNode = this.head;

    //     if (index <= (this.length / 2)) {
    //         let currentNode = this.head;
    //         for(let i = 0; i <= this.length - 1; i++) {
    //             if (index === i) {
    //                 return currentNode;
    //             }
    //             currentNode = currentNode.next;
    //         }
    //     } else {
    //         let currentNode = this.tail;
    //         for (let i = this.length - 1; i >= 0; i--) {
    //             if (index === i) {
    //                 return currentNode;
    //             }
    //             currentNode = currentNode.previous;
    //         }
    //     }
    // }

}

let list = new DoublyLinkedList();
list.push(1)
list.push(2)
list.push(3)
list.push(4)
list.push(5)
// console.log(list)
console.log(list.get(4))
console.log(list.get(-1))
// console.log("################################")
console.log(list.get(2))