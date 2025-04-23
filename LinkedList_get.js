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

  get(index) {
    if (index < 0 || index >= this.length) {
      return undefined;
    }

    let temp = this.head;
    for (let i = 0; i < index; i++) {
      temp = temp.next;
    }
    return temp;
  }
}
const myLinkedList = new LinkedList(10);
myLinkedList.push(5);
myLinkedList.push(1);
myLinkedList.push(7);
console.log("index-2", myLinkedList.get(2)); // Node { value: 1, next: Node { value: 7, next: null } }
console.log("index-0", myLinkedList.get(0)); // Node { value: 10, next: Node { value: 5, next: [Node] } }
