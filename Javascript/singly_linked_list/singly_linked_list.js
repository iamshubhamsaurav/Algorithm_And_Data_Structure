class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(val) {
        let newNode = new Node(val);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }

    traverse() {
        let current = this.head;
        while(current) {
            console.log(current)
            current = current.next
        }
    }

    pop() {
        if (!this.head) return undefined;
        let current = this.head;
        let newTail = this.head;
        while(current.next) {
            newTail = current;
            current = current.next;
        }
        this.tail = newTail;
        this.tail.next = null;
        this.length--;
        if(this.head === this.tail) {
            this.head = null;
            this.tail = null;
        }
        return current;
    }

    shift() {
        if (!this.head) return undefined;
        let oldHead = this.head;
        this.head = currentHead.next;
        this.length--;
        if (this.length === 0) this.tail = null;
        return oldHead;
    }

    unshift(val) {
        let newNode = new Node(val);
        if (!this.head) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this;
    }

    // get(index) {
    //     if (index < 0 || index >= this.length) return null;
    //     let currentNode = this.head;
    //     for (let i = 0; i <= index; i++) {
    //         currentNode = currentNode.next;
    //     }
    //     return currentNode;
    // }

    // Better solution: Previous one has issue with the tail node
    get(index) {
        if (index < 0 || index >= this.length) return null;
        let counter = 0;
        let currentNode = this.head;
        while(counter != index) {
            currentNode = currentNode.next;
            counter++;
        }
        return currentNode;
    }

    set(index, value) {
        var node = this.get(index)
        if (node) {
            node.val = value;
            return true;
        }
        return false;
    }

    insert(index, val){
        if (index < 0 || index > this.length) return false;
        if (index === this.length){
            this.push(val);
            return true;
        } 
        if (index === 0) {
            this.unshift(val);
            return true;
        } 
        let newNode = new Node(val);
        let previousNode = this.get(index - 1);
        let nextNode = previousNode.next;
        previousNode.next = newNode;
        newNode.next = nextNode;
        this.length++;
        return true;
    }
}

let list = new SinglyLinkedList();
list.push("1");
list.push("2");
list.push("3");
list.push("4");
// console.log(list);
console.log(list.get(3));