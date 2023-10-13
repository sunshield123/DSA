class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

/**
 * push  - value
 * pop  - temp and pre pointers
 * unshift - value
 * shift -
 * insert
 * remove
 * set
 * get
 */

class Linkedlist {
  constructor(value) {
    const newNode = new Node(value);
    this.head = newnode;
    this.tail = this.head;
    this.length = 0;
    return this;
  }

  push(value) {
    const newNode = new Node(value);
    if (!head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode = this.tail;
    }

    this.length++;
    return this;
  }

  pop() {
    if (!head) return undefined;
    else {
      let pre = this.head;
      let temp = this.head;
      while (temp.next) {
        pre = temp;
        temp = temp.next;
      }
      this.tail = pre;
      this.tail.next = null;
      length--;
      if (this.head === this.tail) {
        this.head = null;
        this.tail = null;
      }

      return temp;
    }
  }

  unshift(value) {
    const newNode = new Node(value);
    if (!head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    length++;
    return this;
  }

  shift() {
    if (!head) return undefined;
    else {
      let temp = this.head.next;
      this.head.next = null;
      temp = this.head;
    }
    this.length--;
    if ((this.head = this.tail)) {
      this.tail = null;
      this.head = null;
    }
    return temp;
  }

  insert(value) {
    const newNode = new Node(value);
  }
}
