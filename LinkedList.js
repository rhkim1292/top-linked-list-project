import Node from './Node.js';

class LinkedList {
  constructor(head = null) {
    this._head = head;
  }

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

  size() {
    let counter = 0;
    let curr = this._head;

    while (curr) {
      counter++;
      curr = curr.next;
    }

    return counter;
  }

  head() {
    return this._head;
  }

  tail() {
    let curr = this._head;

    while (curr.next) {
      curr = curr.next;
    }

    return curr;
  }

  at(index) {
    let curr = this._head;

    for (let i = 0; i < index; i++) {
      curr = curr.next;
      if (!curr) throw new Error('That index is out of bounds of the list!');
    }

    return curr;
  }

  pop() {
    let curr = this._head;
    let prev = null;

    while (curr.next) {
      prev = curr;
      curr = curr.next;
    }

    prev.next = null;
  }

  contains(value) {
    let curr = this._head;

    while (curr) {
      if (curr.val === value) return true;
      curr = curr.next;
    }

    return false;
  }

  find(value) {
    let curr = this._head;

    while (curr) {
      if (curr.val === value) return curr;
      curr = curr.next;
    }

    return curr;
  }

  toString() {
    let result = '';
    let curr = this._head;

    while (curr) {
      result += `( ${curr.val} ) -> `;
      curr = curr.next;
    }

    result += 'null';

    return result;
  }

  insertAt(value, index) {
    let curr = this._head;
    let prev = null;

    if (index === this.size()) {
      this.append(value);
      return;
    }

    for (let i = 0; i < index; i++) {
      prev = curr;
      curr = curr.next;
      if (!curr) throw new Error('That index is out of bounds of the list!');
    }

    prev.next = new Node(value, curr);
  }

  removeAt(index) {
    let curr = this._head;
    let prev = null;

    for (let i = 0; i < index; i++) {
      prev = curr;
      curr = curr.next;
      if (!curr) throw new Error('That index is out of bounds of the list!');
    }
	
	if (index === 0) {
		this._head = this._head.next;
		return;
	}

	prev.next = curr.next;
  }
}

const list = new LinkedList();
const emptyList = new LinkedList();
console.log(list);
list.append(5);
list.append(3);
list.append(8);
list.prepend(3);
console.log(list._head);
console.log(list.size());
console.log(emptyList.size());
console.log(list.tail());
console.log(list.contains(8));
console.log(list.toString());
list.pop();
console.log(list.size());
console.log(list._head);
console.log(list.tail());
console.log(list.contains(8));
console.log(list.find(5));
console.log(list.find(9));
console.log(list.toString());
console.log(list.size());
list.insertAt(4, 3);
console.log(list.toString());
list.removeAt(0);
console.log(list.toString());
list.removeAt(0);
console.log(list.toString());
list.removeAt(1);
console.log(list.toString());
list.removeAt(1);
console.log(list.toString());