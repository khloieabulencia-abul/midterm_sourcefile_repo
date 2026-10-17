# Week 5 Hands-On Exercise: Student Score Array Analyzer Version 3

**Course:** Data Structures and Algorithms  
**Topic:** Arrays  

---

## Scenario

Create a simple **Student Score Array Analyzer** Version 3. The program will store student names and scores, update the records, calculate class statistics, identify passing students, and process scores from multiple activities.

This activity must use concepts from the **Arrays** lesson only.

Do not use:

- objects to represent students;
- classes;
- stacks;
- queues; or
- linked lists.

---

## Software Requirements

Use any of the following:

- Visual Studio Code with Node.js; (Recommended)
- a browser developer console; or
- an online JavaScript editor.

Save your program as:

```text
Lastname_Firstname_ArrayExercise.js
```
#### *Note: If turning-in change to .txt*
---

## Starting Data

Copy the following arrays into your JavaScript file:

```js
const studentNames = [
  'Ana',
  'Ben',
  'Carla',
  'Daniel',
  'Ella'
];

const studentScores = [85, 72, 91, 64, 78];

const activityScores = [
  [80, 85, 90],
  [70, 72, 74],
  [88, 92, 95],
  [60, 65, 67],
  [75, 78, 81]
];
```

The indexes of the arrays are related:

- `studentNames[0]` and `studentScores[0]` belong to Ana.
- Row `activityScores[0]` also belongs to Ana.
- The same relationship applies to the other indexes.

---

# Required Tasks

### Part A: Display the Original Records — 5 Points

Use a `for` loop to display every student’s index, name, and score.

Required format:

```text
0 - Ana: 85
1 - Ben: 72
2 - Carla: 91
3 - Daniel: 64
4 - Ella: 78
```

### Requirements

- Use the `length` property as the loop limit.
- Access the name and score through the same index.
- Do not write one separate `console.log()` for every student.

---

### Part B: Add New Students — 5 Points

Perform the following operations:

1. Add `Faith` with a score of `88` at the end of the arrays using `push()`.
2. Add `Aaron` with a score of `76` at the beginning using `unshift()`.
3. Display the updated names and scores.
4. Display the new number of students.

Expected number of students:

```text
7
```

Remember to update both `studentNames` and `studentScores` so their indexes remain synchronized.

---

### Part C: Remove and Replace Records — 10 Points

Perform the following operations:

1. Remove the first student using `shift()`.
2. Remove the last student using `pop()`.
3. Find Daniel’s index using `indexOf()`.
4. Remove Daniel and Daniel’s score using `splice()`.
5. Insert `Grace` with a score of `82` at index `2` using `splice()`.
6. Display the resulting arrays.

### Important Rule

Whenever a student is added or removed, apply the equivalent operation to both arrays.

Do not use the `delete` operator because it leaves an empty position in an array.

---

### Part D: Calculate Class Statistics — 15 Points

Using the current `studentScores` array, calculate and display:

1. total score;
2. average score;
3. highest score; and
4. lowest score.

### Requirements

- Calculate the total using either a loop or `reduce()`.
- Calculate the average using:

```text
average = total / number of scores
```

- You may use a loop to find the highest and lowest values.
- Display the average with two decimal places using `toFixed(2)`.

Required output labels:

```text
Total Score:
Average Score:
Highest Score:
Lowest Score:
```

---

## Part E: Analyze Passing Scores — 10 Points

The passing score is `75`.

Use array iterator methods to complete the following:

1. Use `filter()` to create an array containing only passing scores.
2. Use `map()` to create an array containing `Passed` or `Failed` for every score.
3. Use `some()` to determine whether at least one student failed.
4. Use `every()` to determine whether all students passed.



Display all four results with clear labels.

---

## Part F: Sort and Search — 5 Points

Complete the following operations:

1. Create a copy of `studentScores` using `Array.from()`.
2. Sort the copied scores from highest to lowest.
3. Display the sorted copy.
4. Ask the program to search for the score `91` using `includes()`.
5. Display the index of the score `91` using `indexOf()`.

### Important Rule

Sort the copied array, not the original `studentScores` array. Sorting only the score array would break its index relationship with `studentNames`.

Use a numeric comparison function:

```js
(a, b) => b - a
```

---

## Part G: Process a Two-Dimensional Array — 10 Points

Use the original `activityScores` matrix. Each row contains the three activity scores of one student.

```js
const activityScores = [
  [80, 85, 90],
  [70, 72, 74],
  [88, 92, 95],
  [60, 65, 67],
  [75, 78, 81]
];
```

Complete the following:

1. Use nested loops to display every score.
2. Calculate the average of each row.
3. Store the five averages in a new array named `activityAverages`.
4. Display the resulting array.

Required format for the individual averages:

```text
Ana's activity average: 85.00
Ben's activity average: 72.00
...
```

Use the original five names when processing this section so they match the five matrix rows.

---

## Part H: Create a Text Summary — 5 Points

Use `join()` to display all current student names on one line separated by ` | `.

Example format:

```text
Students: Ana | Ben | Carla
```

---

# Starter Code

Copy and complete the following code. Replace every `TODO` comment with the required statements.

```js
'use strict';

console.log('STUDENT SCORE ARRAY ANALYZER');

// Store the original names and final scores.
const studentNames = ['Ana', 'Ben', 'Carla', 'Daniel', 'Ella'];
const studentScores = [85, 72, 91, 64, 78];

// Store three activity scores for each original student.
const activityScores = [
  [80, 85, 90],
  [70, 72, 74],
  [88, 92, 95],
  [60, 65, 67],
  [75, 78, 81]
];

// Preserve the original names for the activity matrix.
const originalNames = Array.from(studentNames);

console.log('\nPART A: ORIGINAL RECORDS');

// TODO: Use a for loop to display every name and score.

console.log('\nPART B: ADD NEW STUDENTS');

// TODO: Add Faith and 88 at the end.
// TODO: Add Aaron and 76 at the beginning.
// TODO: Display both arrays and their length.

console.log('\nPART C: REMOVE AND REPLACE RECORDS');

// TODO: Remove the first name and score.
// TODO: Remove the last name and score.
// TODO: Find Daniel's index.
// TODO: Remove Daniel and Daniel's score.
// TODO: Insert Grace and 82 at index 2.
// TODO: Display the updated arrays.

console.log('\nPART D: CLASS STATISTICS');

// TODO: Calculate the total score.
// TODO: Calculate the average score.
// TODO: Find the highest score.
// TODO: Find the lowest score.
// TODO: Display all statistics.

console.log('\nPART E: PASSING-SCORE ANALYSIS');

// TODO: Use filter to obtain passing scores.
// TODO: Use map to produce Passed or Failed statuses.
// TODO: Use some to check whether at least one student failed.
// TODO: Use every to check whether all students passed.
// TODO: Display all results.

console.log('\nPART F: SORT AND SEARCH');

// TODO: Copy the scores using Array.from.
// TODO: Sort the copy from highest to lowest.
// TODO: Search for 91 using includes and indexOf.
// TODO: Display the results.

console.log('\nPART G: TWO-DIMENSIONAL ARRAY');

const activityAverages = [];

// TODO: Use nested loops to process every row and column.
// TODO: Calculate and store each student's activity average.
// TODO: Display activityAverages.

console.log('\nPART H: TEXT SUMMARY');

// TODO: Use join to display names separated by " | ".
```

---

# Sample Console Layout

Your exact values will depend on whether all updates were correctly performed, but the console should be organized like this:

```text
STUDENT SCORE ARRAY ANALYZER

PART A: ORIGINAL RECORDS
0 - Ana: 85
...

PART B: ADD NEW STUDENTS
Updated Names: [...]
Updated Scores: [...]
Number of Students: 7

PART C: REMOVE AND REPLACE RECORDS
Names: [...]
Scores: [...]

PART D: CLASS STATISTICS
Total Score: ...
Average Score: ...
Highest Score: ...
Lowest Score: ...

PART E: PASSING-SCORE ANALYSIS
Passing Scores: [...]
Statuses: [...]
At Least One Failed: ...
All Students Passed: ...

PART F: SORT AND SEARCH
Scores from Highest to Lowest: [...]
Contains 91: ...
Index of 91: ...

PART G: TWO-DIMENSIONAL ARRAY
Ana's activity average: ...
...
Activity Averages: [...]

PART H: TEXT SUMMARY
Students: ... | ... | ...
```

---

# TURN-IN Requirements

Submit the following:

1. JavaScript source file named `Lastname_Firstname_W5_ArrayExercise.js` or  `.txt`.
2. Screenshot showing the complete console output (1-3 pictures)
3. Youtube Link of Video Demo (max of 3 minutes)
4. A short reflection the challenges and learnings in accomplishing the exercise.

### Code Requirements

- Use meaningful variable names.
- Indent the code consistently.
- Add comments before every major task.
- Display a clear label before each result.
- Ensure that the program runs without syntax or runtime errors.

---

# Scoring Rubric

| Criterion | Points |
| --- | ---: |
| Part A: Display original records | 5 |
| Part B: Add new students | 5 |
| Part C: Remove and replace records | 10 |
| Part D: Calculate class statistics | 15 |
| Part E: Analyze passing scores | 10 |
| Part F: Sort and search | 5 |
| Part G: Process a two-dimensional array | 10 |
| Part H: Create a text summary | 5 |
| **Total** | **65** |

---

