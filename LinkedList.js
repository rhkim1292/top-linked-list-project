import Node from './Node.js';

class LinkedList {
    constructor(head = null) { this._head = head; }
    get size() {
        if (this.head === 0) return 0;
        let counter = 0;
        let curr = this.head;
        while (curr) {
            counter++;
            curr = curr.next;
        }
        return counter;
    }
    get head() { return this._head }

    append(value) {
        if (!this._head) {
            this._head = new Node(value);
            return;
        }
        let curr = this._head;
        while (curr.next) {
            curr = curr.next;
        }
        curr.next = new Node(value);
    }

    prepend(value) {
        if (!this._head) {
            this._head = new Node(value);
            return;
        }
        const newHead = new Node(value, this._head);
        this._head = newHead;
    }
}

const list = new LinkedList();
const emptyList = new LinkedList();
console.log(list);
list.append(5);
list.append(3);
list.append(8);
list.prepend(3);
console.log(list.head);
console.log(list.size);
console.log(emptyList.size);