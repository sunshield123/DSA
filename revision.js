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
    this.length = 0;
  }

  /**
   *
   * when empty list
   * one item
   * more then one item
   */

  push(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  /**
   *
   * when empty list
   * more then one item
   * one item
   */
  pop() {
    if (!this.head) {
      return undefined;
    }
    let pre = this.head;
    let temp = this.head;

    while (temp.next) {
      pre = temp;
      temp = temp.next;
    }
    this.tail = pre;
    this.tail.next = null;
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return temp;
  }

  /**
   *
   * when empty list
   * more then one item
   * one item
   */

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

  /**
   *
   * when empty list
   * more then one item
   * one item
   * consider length
   * pop or unshift always use temp and pre
   */

  shift() {
    if (!head) {
      return undefined;
    }
    let temp = this.head;
    this.head = this.head.next;
    temp.next = null;
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return temp;
  }
}
let myLinkedList = new LinkedList(1);

console.log(myLinkedList.push(4));
console.log(myLinkedList.push(5));
console.log(myLinkedList.pop());
console.log(myLinkedList.pop());
console.log(myLinkedList.pop());
