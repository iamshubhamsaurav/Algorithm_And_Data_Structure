class Node {
    constructor(val) {
        this.val = value;
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
        return 
    }

}