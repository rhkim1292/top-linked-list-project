import Node from './Node.js';

class LinkedList {
    constructor(head = null) { this.head = head; }
    append(value) {
        if (!this.head) {
            this.head = new Node(value);
            return;
        }
        let curr = this.head;
        while (curr.next) {
            curr = curr.next;
        }
        curr.next = new Node(value);
    }
}

const list = new LinkedList();
console.log(list);
list.append(5);
list.append(3);
list.append(8);
console.log(list.head);