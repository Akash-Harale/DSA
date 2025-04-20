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
    this.tail = this.head;
    this.length = 1;
  }

  unShift(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }
}

const myLinkedList = new LinkedList(10);
myLinkedList.unShift(5);
myLinkedList.unShift(1);
console.log(myLinkedList);

// Output: LinkedList {
//   head: Node { value: 1, next: Node { value: 5, next: [Node] } },
//   tail: Node { value: 10, next: null },
//   length: 3
// }
