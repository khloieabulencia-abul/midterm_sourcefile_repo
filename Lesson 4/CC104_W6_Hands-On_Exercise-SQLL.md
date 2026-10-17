# CC104-Week6-Hands-On Exercise: Campus IT Support Request Manager

**Topics:** Stacks, Queues, and Linked Lists  
**Prepared by:** Jackson S. Soriano, MIT  
**Total score:** **50 points**  

---
## Scenario

The campus IT office needs a simple **Support Request Manager**.

The program will use:

- a **Stack** to keep recently performed actions that can be undone;
- a **Queue** to process support requests in arrival order;
- a **Priority Queue** to place urgent requests before ordinary requests; and
- a **Linked List** to store completed request records.

Each structure must be implemented separately and demonstrated using the required data.

---

## General Rules

1. Use JavaScript classes for `Stack`, `Queue`, `PriorityQueue`, `Node`, and `LinkedList`.
2. An array may be used only as the internal storage of the Stack and Queue classes.
3. The Linked List must use connected nodes. Do not replace it with an array.
4. Do not use built-in packages or external libraries.
5. Add comments before every major block or method.
6. The program must run without syntax or runtime errors.

Save the program as:

```text
Lastname_Firstname_CC104_W6_Exercise.js or .txt
```

---

# Required Tasks

## Part A: Undo History Using a Stack — 10 Points

Create a `Stack` class containing the following methods:

```text
push(element)
pop()
peek()
isEmpty()
size()
toString()
```

Use the stack to store these actions in the given order:

```text
Opened Ticket #101
Assigned Ticket #101
Closed Ticket #101
```

Perform and display the following:

1. Push all three actions.
2. Display the current top action using `peek()`.
3. Undo the most recent action using `pop()`.
4. Display the remaining actions.
5. Display the current stack size.

Expected behavior:

```text
Top Action: Closed Ticket #101
Undo Action: Closed Ticket #101
Remaining Actions: Opened Ticket #101, Assigned Ticket #101
Stack Size: 2
```

### Scoring

| Requirement | Points |
| --- | ---: |
| Correct Stack methods | 6 |
| Correct LIFO demonstration and output | 4 |
| **Part A Total** | **10** |

---

## Part B: Waiting Requests Using a Queue — 10 Points

Create a `Queue` class containing the following methods:

```text
enqueue(element)
dequeue()
front()
isEmpty()
size()
toString()
```

Add the following requests in their arrival order:

```text
Ticket #201 - Password Reset
Ticket #202 - No Internet
Ticket #203 - Printer Problem
Ticket #204 - Software Installation
```

Perform and display the following:

1. Enqueue all four requests.
2. Display the request at the front.
3. Process two requests using `dequeue()` twice.
4. Display the remaining queue.
5. Display the current queue size.

Expected behavior:

```text
Next Request: Ticket #201 - Password Reset
Processed: Ticket #201 - Password Reset
Processed: Ticket #202 - No Internet
Remaining Requests: Ticket #203 - Printer Problem, Ticket #204 - Software Installation
Queue Size: 2
```

### Scoring

| Requirement | Points |
| --- | ---: |
| Correct Queue methods | 6 |
| Correct FIFO demonstration and output | 4 |
| **Part B Total** | **10** |

---

## Part C: Urgent Requests Using a Priority Queue — 10 Points

Create a `PriorityQueue` class. Each queued item must contain:

```js
{
  request: 'Request description',
  priority: 1
}
```

Use the following priority rule:

| Priority Number | Meaning |
| ---: | --- |
| `1` | Critical |
| `2` | High |
| `3` | Normal |

A smaller number means a higher priority. Requests with the same priority must remain in their original arrival order.

Enqueue these requests in the given order:

```text
Ticket #301 - Install Browser, Priority 3
Ticket #302 - Server Offline, Priority 1
Ticket #303 - Faculty PC Failure, Priority 2
Ticket #304 - Internet Laboratory Down, Priority 1
```

Your program must:

1. insert each request at the correct position;
2. display the complete priority queue;
3. process the first request; and
4. display the remaining priority queue.

Expected initial order:

```text
Ticket #302 - Server Offline, Priority 1
Ticket #304 - Internet Laboratory Down, Priority 1
Ticket #303 - Faculty PC Failure, Priority 2
Ticket #301 - Install Browser, Priority 3
```

Ticket #302 must stay before Ticket #304 because it arrived first and both have priority `1`.

### Scoring

| Requirement | Points |
| --- | ---: |
| Stores both request and priority | 2 |
| Correct priority insertion | 5 |
| Preserves arrival order for equal priorities | 2 |
| Correct display and processing | 1 |
| **Part C Total** | **10** |

---

## Part D: Completed Requests Using a Linked List — 15 Points

Create a `Node` class containing:

```text
element
next
```

Create a `LinkedList` class containing:

```text
append(element)
insert(position, element)
removeAt(position)
indexOf(element)
remove(element)
isEmpty()
size()
toString()
```

Perform the following operations in order:

1. Append `Ticket #401 - Account Activated`.
2. Append `Ticket #402 - Printer Connected`.
3. Append `Ticket #403 - Antivirus Updated`.
4. Insert `Ticket #400 - Computer Diagnosed` at position `0`.
5. Insert `Ticket #405 - Browser Updated` at the end using `insert()`.
6. Display the complete list.
7. Find the index of `Ticket #402 - Printer Connected`.
8. Remove the item at position `1` using `removeAt()`.
9. Remove `Ticket #403 - Antivirus Updated` using `remove()`.
10. Display the final list and its size.

Expected list before removal:

```text
Ticket #400 - Computer Diagnosed
Ticket #401 - Account Activated
Ticket #402 - Printer Connected
Ticket #403 - Antivirus Updated
Ticket #405 - Browser Updated
```

Expected final list:

```text
Ticket #400 - Computer Diagnosed
Ticket #402 - Printer Connected
Ticket #405 - Browser Updated
```

Expected final size:

```text
3
```

### Scoring

| Requirement | Points |
| --- | ---: |
| Correct Node and LinkedList setup | 3 |
| Correct `append()` and `insert()` | 4 |
| Correct `removeAt()` and `remove()` | 4 |
| Correct `indexOf()`, traversal, and `toString()` | 3 |
| Correct final result | 1 |
| **Part D Total** | **15** |

---

## Part E: Code Quality and Submission — 5 Points

| Requirement | Points |
| --- | ---: |
| Clear comments before major methods or blocks | 2 |
| Meaningful names and consistent indentation | 1 |
| Organized and labeled console output | 1 |
| Complete source file and output screenshot | 1 |
| **Part E Total** | **5** |

---

# Starter Code

Copy and complete the following code. Replace every `TODO` with the required implementation.

```js
'use strict';

console.log('CAMPUS IT SUPPORT REQUEST MANAGER');

// ================================================================
// PART A: STACK
// ================================================================

class Stack {
  constructor() {
    // TODO: Create the internal storage.
  }

  push(element) {
    // TODO: Add an element to the top.
  }

  pop() {
    // TODO: Remove and return the top element.
  }

  peek() {
    // TODO: Return the top without removing it.
  }

  isEmpty() {
    // TODO: Return true when empty.
  }

  size() {
    // TODO: Return the number of elements.
  }

  toString() {
    // TODO: Return all elements as text.
  }
}

console.log('\nPART A: UNDO HISTORY');

const actionHistory = new Stack();

// TODO: Push the three required actions.
// TODO: Display peek, pop, remaining actions, and size.

// ================================================================
// PART B: QUEUE
// ================================================================

class Queue {
  constructor() {
    // TODO: Create the internal storage.
  }

  enqueue(element) {
    // TODO: Add an element at the back.
  }

  dequeue() {
    // TODO: Remove and return the front element.
  }

  front() {
    // TODO: Return the front without removing it.
  }

  isEmpty() {
    // TODO: Return true when empty.
  }

  size() {
    // TODO: Return the number of elements.
  }

  toString() {
    // TODO: Return all elements as text.
  }
}

console.log('\nPART B: WAITING REQUESTS');

const waitingRequests = new Queue();

// TODO: Enqueue the four required requests.
// TODO: Display the front request.
// TODO: Dequeue two requests.
// TODO: Display the remaining queue and its size.

// ================================================================
// PART C: PRIORITY QUEUE
// ================================================================

class PriorityQueue {
  constructor() {
    // TODO: Create the internal storage.
  }

  enqueue(request, priority) {
    // TODO: Create an item containing the request and priority.
    // TODO: Find the correct insertion position.
    // TODO: Preserve arrival order when priorities are equal.
  }

  dequeue() {
    // TODO: Remove and return the first item.
  }

  size() {
    // TODO: Return the number of items.
  }

  print() {
    // TODO: Display every request and priority.
  }
}

console.log('\nPART C: URGENT REQUESTS');

const urgentRequests = new PriorityQueue();

// TODO: Enqueue the four required requests.
// TODO: Print the initial priority order.
// TODO: Process the first request.
// TODO: Print the remaining requests.

// ================================================================
// PART D: LINKED LIST
// ================================================================

class Node {
  constructor(element) {
    // TODO: Store the element.
    // TODO: Set next to null.
  }
}

class LinkedList {
  constructor() {
    // TODO: Set length to zero.
    // TODO: Set head to null.
  }

  append(element) {
    // TODO: Add a node at the end.
  }

  insert(position, element) {
    // TODO: Reject invalid positions.
    // TODO: Insert at the beginning, middle, or end.
  }

  removeAt(position) {
    // TODO: Reject invalid positions.
    // TODO: Remove the node at the requested position.
  }

  indexOf(element) {
    // TODO: Traverse and return the matching position.
    // TODO: Return -1 when the element is absent.
  }

  remove(element) {
    // TODO: Reuse indexOf and removeAt.
  }

  isEmpty() {
    // TODO: Return true when no nodes exist.
  }

  size() {
    // TODO: Return the number of nodes.
  }

  toString() {
    // TODO: Traverse and return all elements as text.
  }
}

console.log('\nPART D: COMPLETED REQUESTS');

const completedRequests = new LinkedList();

// TODO: Append the three required requests.
// TODO: Insert Ticket #400 at position 0.
// TODO: Insert Ticket #405 at the end.
// TODO: Display the complete list.
// TODO: Search for Ticket #402.
// TODO: Remove the item at position 1.
// TODO: Remove Ticket #403 by value.
// TODO: Display the final list and size.
```

---

# Suggested Console Layout

```text
CAMPUS IT SUPPORT REQUEST MANAGER

PART A: UNDO HISTORY
Top Action: ...
Undo Action: ...
Remaining Actions: ...
Stack Size: ...

PART B: WAITING REQUESTS
Next Request: ...
Processed: ...
Processed: ...
Remaining Requests: ...
Queue Size: ...

PART C: URGENT REQUESTS
Initial Priority Order:
...
Processed Priority Request: ...
Remaining Priority Requests:
...

PART D: COMPLETED REQUESTS
Complete List: ...
Index of Ticket #402: ...
Removed at Position 1: ...
Removed by Value: ...
Final List: ...
Final Size: 3
```

---

# TURN-IN Requirements

Submit the following:

1. JavaScript source file named `Lastname_Firstname_CC104_W6_Exercise.js` or  `.txt`.
2. Screenshot showing the complete console output (1-3 pictures)
3. Youtube Link of Video Demo (max of 3 minutes)
4. A short reflection the challenges and learnings in accomplishing the exercise.

---

# Final Scoring Summary

| Part | Description | Points |
| --- | --- | ---: |
| A | Undo History Using a Stack | 10 |
| B | Waiting Requests Using a Queue | 10 |
| C | Urgent Requests Using a Priority Queue | 10 |
| D | Completed Requests Using a Linked List | 15 |
| E | Code Quality and Submission | 5 |
| **Total** |  | **50** |

---


