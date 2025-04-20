class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor(value) {
    const newNode = new Node(value);
    this.head = newNode;
    this.tail = newNode;
    this.length = 1;
  }

  push(value) {
    const newNode = new Node(value);
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

  pop() {
    if (!this.head) return undefined;
    let temp = this.head;
    let pre = this.head;

    if (temp.next) {
      pre = temp;
      temp = temp.next;
    }

    this.tail = pre;
    this.tail.next = null;
    this.length--;

    if (this.length == 0) {
      this.head = null;
      this.tail = null;
    }

    return temp;
  }
}

const myLinkedList = new LinkedList(1); // List: 1
console.log(myLinkedList.push(2)); // List: 1 -> 2
console.log(myLinkedList.pop()); // Returns Node { value: 2, next: null }
console.log(myLinkedList); // List: 1, length: 1
console.log(myLinkedList.pop()); // Returns Node { value: 1, next: null }
console.log(myLinkedList); // List: empty, length: 0
console.log(myLinkedList.pop()); // Returns undefined
