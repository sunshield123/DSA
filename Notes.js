class Node {
    constructor(data) {
      this.data = data;
      this.next = null;
    }
  }
  
  class LinkedList {
    constructor() {
      this.head = null;
      this.size = 0;
    }
  
    // Add a new node to the end of the linked list
    add(data) {
      const newNode = new Node(data);
      if (!this.head) {
        this.head = newNode;
      } else {
        let current = this.head;
        while (current.next) {
          current = current.next;
        }
        current.next = newNode;
      }
      this.size++;
    }
  
    // Insert a new node at a specific position
    insertAt(data, position) {
      if (position < 0 || position > this.size) {
        return false;
      }
  
      const newNode = new Node(data);
      if (position === 0) {
        newNode.next = this.head;
        this.head = newNode;
      } else {
        let current = this.head;
        let previous = null;
        let index = 0;
        while (index < position) {
          previous = current;
          current = current.next;
          index++;
        }
        newNode.next = current;
        previous.next = newNode;
      }
      this.size++;
      return true;
    }
  
    // Remove a node at a specific position
    removeAt(position) {
      if (position < 0 || position >= this.size) {
        return null;
      }
  
      if (position === 0) {
        const removedNode = this.head;
        this.head = this.head.next;
        this.size--;
        return removedNode.data;
      } else {
        let current = this.head;
        let previous = null;
        let index = 0;
        while (index < position) {
          previous = current;
          current = current.next;
          index++;
        }
        const removedNode = current;
        previous.next = current.next;
        this.size--;
        return removedNode.data;
      }
    }
  
    // Get the size of the linked list
    getSize() {
      return this.size;
    }
  
    // Convert the linked list to an array
    toArray() {
      const result = [];
      let current = this.head;
      while (current) {
        result.push(current.data);
        current = current.next;
      }
      return result;
    }
  }
  
  // Usage example:
  const myList = new LinkedList();
  myList.add(1);
  myList.add(2);
  myList.add(3);
  console.log(myList.toArray()); // [1, 2, 3]
  
  myList.insertAt(4, 1);
  console.log(myList.toArray()); // [1, 4, 2, 3]
  
  myList.removeAt(2);
  console.log(myList.toArray()); // [1, 4, 3]
  
  console.log(myList.getSize()); // 3
  