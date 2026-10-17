'use strict';

console.log('CAMPUS IT SUPPORT REQUEST MANAGER');

// ================================================================
// PART A: STACK
// ================================================================

// Stack: like a pile of plates. The last one added is the first one removed.
class Stack {
  // Start with an empty array to hold the items.
  constructor() {
    this.items = [];
  }

  // Put an item on top.
  push(element) {
    this.items.push(element);
  }

  // Take the top item off and return it.
  pop() {
    if (this.isEmpty()) return null;
    return this.items.pop();
  }

  // Look at the top item without removing it.
  peek() {
    if (this.isEmpty()) return null;
    return this.items[this.items.length - 1];
  }

  // Check if the stack has nothing in it.
  isEmpty() {
    return this.items.length === 0;
  }

  // Count how many items are in the stack.
  size() {
    return this.items.length;
  }

  // Turn all items into one line of text.
  toString() {
    return this.items.join(', ');
  }
}

console.log('\nPART A: UNDO HISTORY');

// Make a new stack for the actions.
const actionHistory = new Stack();

// Add the three actions in order.
actionHistory.push('Opened Ticket #101');
actionHistory.push('Assigned Ticket #101');
actionHistory.push('Closed Ticket #101');

// Show the top, undo it, then show what is left and the size.
console.log('Top Action: ' + actionHistory.peek());
console.log('Undo Action: ' + actionHistory.pop());
console.log('Remaining Actions: ' + actionHistory.toString());
console.log('Stack Size: ' + actionHistory.size());

// ================================================================
// PART B: QUEUE
// ================================================================

// Queue: like a line at a store. The first one in is the first one served.
class Queue {
  // Start with an empty array to hold the items.
  constructor() {
    this.items = [];
  }

  // Add an item to the back of the line.
  enqueue(element) {
    this.items.push(element);
  }

  // Remove and return the item at the front.
  dequeue() {
    if (this.isEmpty()) return null;
    return this.items.shift();
  }

  // Look at the front item without removing it.
  front() {
    if (this.isEmpty()) return null;
    return this.items[0];
  }

  // Check if the queue has nothing in it.
  isEmpty() {
    return this.items.length === 0;
  }

  // Count how many items are in the queue.
  size() {
    return this.items.length;
  }

  // Turn all items into one line of text.
  toString() {
    return this.items.join(', ');
  }
}

console.log('\nPART B: WAITING REQUESTS');

// Make a new queue for the waiting requests.
const waitingRequests = new Queue();

// Add the four requests in the order they arrived.
waitingRequests.enqueue('Ticket #201 - Password Reset');
waitingRequests.enqueue('Ticket #202 - No Internet');
waitingRequests.enqueue('Ticket #203 - Printer Problem');
waitingRequests.enqueue('Ticket #204 - Software Installation');

// Show the front, process two requests, then show what is left and the size.
console.log('Next Request: ' + waitingRequests.front());
console.log('Processed: ' + waitingRequests.dequeue());
console.log('Processed: ' + waitingRequests.dequeue());
console.log('Remaining Requests: ' + waitingRequests.toString());
console.log('Queue Size: ' + waitingRequests.size());

// ================================================================
// NODE (used by the Priority Queue and the Linked List)
// ================================================================

// Node: one piece of a chain. It holds data and points to the next node.
class Node {
  // Save the data. There is no next node yet.
  constructor(element) {
    this.element = element;
    this.next = null;
  }
}

// ================================================================
// PART C: PRIORITY QUEUE
// ================================================================

// PriorityQueue: urgent requests go first (smaller number = more urgent).
// Same priority? The one that arrived first stays first.
// It uses connected nodes, so it does not use an array.
class PriorityQueue {
  // Start empty: no first node, length zero.
  constructor() {
    this.head = null;
    this.length = 0;
  }

  // Add a request in the right spot based on its priority.
  enqueue(request, priority) {
    // Store the request and its priority together in one node.
    const node = new Node({ request: request, priority: priority });

    if (this.head === null || this.head.element.priority > priority) {
      // The queue is empty or this request is the most urgent: put it first.
      node.next = this.head;
      this.head = node;
    } else {
      // Move forward until the next request is less urgent.
      // Equal priorities are skipped, so arrival order is kept.
      let current = this.head;
      while (current.next !== null && current.next.element.priority <= priority) {
        current = current.next;
      }
      // Link the new node to the rest, then link the previous node to it.
      node.next = current.next;
      current.next = node;
    }
    this.length++;
  }

  // Remove and return the first (most urgent) request.
  dequeue() {
    if (this.head === null) return null;
    const removed = this.head;
    this.head = this.head.next;
    this.length--;
    return removed.element;
  }

  // Count how many requests are in the queue.
  size() {
    return this.length;
  }

  // Show every request with its priority, from first to last.
  print() {
    let current = this.head;
    while (current !== null) {
      console.log(current.element.request + ', Priority ' + current.element.priority);
      current = current.next;
    }
  }
}

console.log('\nPART C: URGENT REQUESTS');

// Make a new priority queue.
const urgentRequests = new PriorityQueue();

// Add the four requests in the order they arrived.
urgentRequests.enqueue('Ticket #301 - Install Browser', 3);
urgentRequests.enqueue('Ticket #302 - Server Offline', 1);
urgentRequests.enqueue('Ticket #303 - Faculty PC Failure', 2);
urgentRequests.enqueue('Ticket #304 - Internet Laboratory Down', 1);

// Show the queue in priority order.
console.log('Initial Priority Order:');
urgentRequests.print();

// Process the first request, then show what is left.
const processedRequest = urgentRequests.dequeue();
console.log('Processed Priority Request: ' + processedRequest.request + ', Priority ' + processedRequest.priority);
console.log('Remaining Priority Requests:');
urgentRequests.print();

// ================================================================
// PART D: LINKED LIST
// ================================================================

// LinkedList: a chain of nodes. Each node points to the next one.
// It does not use an array.
class LinkedList {
  // Start empty: no first node, length zero.
  constructor() {
    this.length = 0;
    this.head = null;
  }

  // Add an item at the end of the list.
  append(element) {
    const node = new Node(element);

    if (this.head === null) {
      // The list is empty, so this node is the first one.
      this.head = node;
    } else {
      // Go to the last node and attach the new node after it.
      let current = this.head;
      while (current.next !== null) {
        current = current.next;
      }
      current.next = node;
    }
    this.length++;
  }

  // Add an item at a chosen position.
  // Returns false if the position is not valid.
  insert(position, element) {
    // Stop if the position is too small or too big.
    if (position < 0 || position > this.length) return false;

    const node = new Node(element);

    if (position === 0) {
      // Add at the start: the new node points to the old first node.
      node.next = this.head;
      this.head = node;
    } else {
      // Go to the node just before the position.
      let previous = this.head;
      for (let i = 0; i < position - 1; i++) {
        previous = previous.next;
      }
      // Link the new node to the rest, then link the previous node to it.
      node.next = previous.next;
      previous.next = node;
    }
    this.length++;
    return true;
  }

  // Remove and return the item at a chosen position.
  removeAt(position) {
    // Stop if the position is not valid.
    if (position < 0 || position >= this.length) return null;

    let removed;

    if (position === 0) {
      // Remove the first node: the head moves to the second node.
      removed = this.head;
      this.head = this.head.next;
    } else {
      // Go to the node just before the one to remove.
      let previous = this.head;
      for (let i = 0; i < position - 1; i++) {
        previous = previous.next;
      }
      // Skip over the removed node.
      removed = previous.next;
      previous.next = removed.next;
    }
    this.length--;
    return removed.element;
  }

  // Find the position of an item. Returns -1 if it is not found.
  indexOf(element) {
    let current = this.head;
    let index = 0;
    while (current !== null) {
      if (current.element === element) return index;
      current = current.next;
      index++;
    }
    return -1;
  }

  // Remove an item by its value (uses indexOf and removeAt).
  remove(element) {
    const index = this.indexOf(element);
    return this.removeAt(index);
  }

  // Check if the list has nothing in it.
  isEmpty() {
    return this.length === 0;
  }

  // Count how many items are in the list.
  size() {
    return this.length;
  }

  // Go through the list and join all items into one line of text.
  toString() {
    let text = '';
    let current = this.head;
    while (current !== null) {
      text += current.element;
      if (current.next !== null) text += ', ';
      current = current.next;
    }
    return text;
  }
}

console.log('\nPART D: COMPLETED REQUESTS');

// Make a new linked list for the completed requests.
const completedRequests = new LinkedList();

// Add the three requests at the end.
completedRequests.append('Ticket #401 - Account Activated');
completedRequests.append('Ticket #402 - Printer Connected');
completedRequests.append('Ticket #403 - Antivirus Updated');

// Insert #400 at the start and #405 at the end.
completedRequests.insert(0, 'Ticket #400 - Computer Diagnosed');
completedRequests.insert(completedRequests.size(), 'Ticket #405 - Browser Updated');

// Show the whole list.
console.log('Complete List: ' + completedRequests.toString());

// Find where Ticket #402 is.
console.log('Index of Ticket #402: ' + completedRequests.indexOf('Ticket #402 - Printer Connected'));

// Remove one by position and one by value.
console.log('Removed at Position 1: ' + completedRequests.removeAt(1));
console.log('Removed by Value: ' + completedRequests.remove('Ticket #403 - Antivirus Updated'));

// Show the final list and its size.
console.log('Final List: ' + completedRequests.toString());
console.log('Final Size: ' + completedRequests.size());