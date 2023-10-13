class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor(value) {
    this.newNode = new Node(value);
    this.head = this.newNode;
    this.tail = this.head;
    this.length = 0;
  }

  push(value) {
    /**d
     * linked list is empty
     * linked list -> 1 or 1 plus value
     */
    this.newNode = new Node(value);
    // For Empty LinkedList
    if (!this.head) {
      this.head = this.newNode;
      this.tail = this.head;
    }
    //For LinkedList
    else {
      this.tail.next = this.newNode;
      this.tail = this.newNode;
    }
    this.length++;
    return this;
  }

  /**
   *  Linked list -> " no value "
   *  linked list -> " one value "
   *  linked list -> " 2 or 2 plus values"
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
   * empty list
   * 1 and 2 more list are same
   */

  unShift(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      newNode.next = head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }

  shift() {
    if (!this.head) {
      return undefined;
    }
    let temp = this.head;
    this.head = this.head.next;
    temp.next = null;
    this.length--;
    if (this.length === 0) {
      this.tail = null;
    }
    return temp;
  }
}

let myLinkedList = new LinkedList(4);

console.log(myLinkedList.push(5));
console.log(myLinkedList.push(7));
console.log(myLinkedList.pop());
console.log(myLinkedList.pop());

console.log(myLinkedList.pop());
