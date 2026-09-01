 1. Write a function that takes an array and returns the sum of all elements.
// function sumArray(arr) {
//   let sum = 0;

//   for (let i = 0; i < arr.length; i++) {
//     sum += arr[i];
//   }

//   return sum; // return sum value
// }
// let arr = [1, 2, 3, 4];
// let result = sumArray(arr);
// document.writeln(result);

//2. Write a function that takes an array and returns the maximum element.

// function findMax(arr) {
//   let max = arr[0]; // let the 1st element max ! start ke time

//   for (let i = 1; i < arr.length; i++) {
//     if (arr[i] > max) {
//       max = arr[i]; // final jo max value hai wo mil jaye to
//     }
//   }

//   return max; //return max !
// }
// let arr = [1, 4, 5, 8, 7];
// let result = findMax(arr);// catch the returned value !
// document.writeln(result);

//3. Write a function that takes an array and returns the minimum element.

// function findMin(arr) {
//   let min = arr[0];
//   for (let i = 1; i < arr.length; i++) {
//     if (arr[i] < min) {
//       min = arr[i];
//     }
//   }
//   return min;
// }
// let arr = [3, 4, 1, 7, 9];
// let result = findMin(arr);
// document.writeln(result);

// 4.Write a function that takes an array and returns the average of all numbers.
// function findAvg(arr) {
//   let sum = 0,
//     average;
//   for (i = 0; i < arr.length; i++) {
//     sum += arr[i];
//   }
//   average = sum / arr.length;
//   return average;
// }
// let arr = [1, 2, 3, 4];
// let result = findAvg(arr);
// document.writeln(result);
//5.Write a function that takes an array and returns a new array in reversed order.
// function reverseArray(arr) {
//   let reversed = []; // empty array

//   for (let i = arr.length - 1; i >= 0; i--) {
//     reversed.push(arr[i]); //.push = > Add elements from the end to the start
//   }

//   return reversed; // Return the new reversed array
// }
// let arr = [1, 2, 3, 4, 5];
// let result = reverseArray(arr);
// document.writeln(result);

// 6.Write a function that takes an array and returns only even numbers in a new array.

// function findEvenNumber() {
//   evennum = []; // empty array
//   for (i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 == 0) {
//       evennum.push(arr[i]);
//     }
//   }
//   return evennum;
// }
// let arr = [1, 2, 3, 4, 6];
// let result = findEvenNumber(arr);
// document.writeln(result);

// 7.Write a function that takes an array and returns only odd numbers in a new array.

// function findOddNumber() {
//   oddnum = []; // empty array
//   for (i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 == 1) {
//       oddnum.push(arr[i]);
//     }
//   }
//   return oddnum;
// }
// let arr = [1, 2, 3, 4, 5];
// let result = findOddNumber(arr);
// document.writeln(result);

// 8.Write a function that takes an array and counts how many positive numbers are present.

// function findCountOfPositive(arr) {
//   let count = 0;
//   for (i = 0; i < arr.length; i++) {
//     if (arr[i] > 0) {
//       count++;
//     }
//   }
//   return count;
// }
// let arr = [1, 2, 3, 4, 5];
// let result = findCountOfPositive(arr);
// document.writeln(result);

// 9.Write a function that takes an array and checks if a given element exists or not.

// function elementExists(arr, element) {
//   return arr.includes(element);
//   // arr.includes => checks if an element exists (true) or not exists (false)
// }
// let arr = [1, 2, 6, 7, 8];
// let result = elementExists(arr, 5);
// document.writeln(result);

// 10.Write a function that takes an array and returns the index of a given element.

// function findIndex(arr, element) {
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === element) {
//       return i;
//     }
//   }
//   return -1; // Return -1 if element is not found .....
// }
// let arr = [1, 2, 5, 4];
// let result = findIndex(arr, 5); // here we have to pass the array & element
// document.writeln(result); // final output

// 11 Write a function that takes an array and returns a new array without duplicate values.

// function removeDuplicates(arr) {
//   const result = []; // empty array to store the old array

//   for (let i = 0; i < arr.length; i++) {
//     if (!result.includes(arr[i])) {
//       // 1st---> check duplicates using (.includes) if not found then push ke through
//       //result ke andar store
//       result.push(arr[i]);
//     }
//   }

//   return result;
// }

// let arr = [1, 5, 4, 5, 9, 7, 5, 7];
// let result = removeDuplicates(arr);
// document.writeln(result);

//12 Write a function that merges two arrays and returns a single array.

// function mergeArrays(arr1, arr2) {
//   return arr1.concat(arr2); // here arr1 is merged with arr2 ....
// }
// let arr1 = [1, 2, 3];
// let arr2 = [4, 5];
// let result = mergeArrays(arr1, arr2);
// document.writeln(result);

//13.Write a function that takes an array and returns the product of all elements.
// function productOfArray(arr) {
//   let product = 1;
//   for (let i = 0; i < arr.length; i++) {
//     product *= arr[i];
//   }
//   return product;
// }
// let arr = [1, 2, 3, 4];
// let result = productOfArray(arr);
// document.writeln(result);
//14. Write a function that sorts an array in ascending order without using .sort().
// function sortArrayAscending(arr) {
//     let n = arr.length;
//     for (let i = 0; i < n - 1; i++) {//0,1,2
//         for (let j = 0; j < n - i - 1; j++) {//0,1,2,3  0,1,2,3  0,1,2
//             if (arr[j] > arr[j + 1]) {
//                 // Swap arr[j] and arr[j+1]
//                 let temp = arr[j];//temp=34,34  12,66  34,
//                 arr[j] = arr[j + 1];//arr[j]=12,5  5,23  23
//                 arr[j + 1] = temp;//arr[j+1]=34, 12,66  34
//             }
//         }
//     }
//     return arr;
// }
// let arr = [34, 12, 5, 66, 23];
// console.log(sortArrayAscending(arr));

//15.Write a function that counts how many times each element appears in an array.

// function elementCounter(arr) {
//     let map = {};// empty array

//     for (let i = 0; i < arr.length; i++) {
//         if (!map[arr[i]]) {
//             map[arr[i]] = 1;
//         }
//         else {
//             map[arr[i]] += 1;
//         }
//     }
//     return map;
// }

// let arr = [1, 2, 2, 3, 4];
// console.log(elementCounter(arr));

// 16.Write a function that takes an array and returns the second largest number.
// function secondLargest(arr) {
//     let largest = -Infinity;
//     let second = -Infinity;

//     for (let num of arr) {
//         if (num > largest) {
//             second = largest;
//             largest = num;
//         } else if (num > second && num < largest) {
//             second = num;
//         }
//     }
//     return second;
// }

// let arr = [1, 2, 3, 4, 5];
// console.log(secondLargest(arr));

// 17.Write a function that rotates an array by given positions (e.g., 1 → 2 → 3 → 1).

// function rotateRight(arr, p) {
//     let n = arr.length;
//     p = p % n;

//     let Part1 = arr.slice(n - p);
//     let Part2 = arr.slice(0, n - p);

//     return Part1.concat(Part2);
// }

// let arr = [1, 2, 3, 5, 6, 7];
// console.log(rotateRight(arr, 3));

//18.Write a function that takes an array of strings and returns the longest string.

// function longestString(arr) {
//     let longest = "";

//     for (let str of arr) {
//         if (str.length > longest.length) {
//             longest = str;
//         }
//     }
//     return longest;
// }

// let arr = ["hero", "haki", "naruto", "crono"];
// console.log(longestString(arr));

//19. Write a function that checks whether an array is symmetric (same forward and backward).

// function isSymmetric(arr) {
//     for (let i = 0; i < arr.length / 2; i++) {
//         if (arr[i] !== arr[arr.length - 1 - i]) {
//             return false;
//         }
//     }
//     return true;
// }

// let arr = [3, 4, 5, 4, 3];
// console.log(isSymmetric(arr));

//20.Write a function that converts a 2D array (matrix) into a 1D array.

// function oneArray(arr) {
//     let result = [];
//     for (let i = 0; i < arr.length; i++) {
//         for (let j = 0; j < arr[i].length; j++) {
//             result.push(arr[i][j]);
//         }
//     }
//     return result;
// }

// let arr = [[1, 2, 3], [4, 5, 6]];
// console.log(oneArray(arr));

//21. Create a function that takes an array of student objects and returns only the names.

// function getStudentNames(students) {
//     let result = [];
//     for (let i = 0; i < students.length; i++) {
//         result.push(students[i].name);
//     }
//     return result;
// }

// const students = [
//     { name: "swahana", age: 15 },
//     { name: "Ritu", age: 21 },
//     { name: "Raju", age: 51 }
// ];

// console.log(getStudentNames(students));

//22.Create a function that takes an array of product objects and returns total price.

// function getTotalPrice(products) {
//     let total = 0;
//     for (let i = 0; i < products.length; i++) {
//         total += products[i].price;
//     }
//     return total;
// }

// const products = [
//     { items: "Phone", price: 20000 },
//     { items: "Headphones", price: 5000 },
//     { items: "Charger", price: 7500 }
// ];

// console.log(getTotalPrice(products));

//23.Create a function that finds the student object with the highest marks from an array.

// function highestMark(students) {
//     let topper = students[0];

//     for (let i = 1; i < students.length; i++) {
//         if (students[i].marks > topper.marks) {
//             topper = students[i];
//         }
//     }
//     return topper;
// }
// const students = [
//     { name: "om prakash", marks: 100 },
//     { name: "narender", marks: 99 },
//     { name: "Bharat", marks: 98 }
// ];
// console.log(highestMark(students));

//24.Create a function that filters employee objects whose salary is above 30000.

// function highestSalary(employees) {
//     let result = [];
//     for (let i = 0; i < employees.length; i++) {
//         if (employees[i].salary > 30000) {
//             result.push(employees[i].name);
//         }
//     }
//     return result;
// }

// const employees = [
//     { name: "isha", salary: 55550 },
//     { name: "Rohit", salary: 55000 },
//     { name: "Raju", salary: 42000 },
//     { name: "Rohansan", salary: 25000 }
// ];

// console.log(highestSalary(employees));

//25. Create a function that counts how many users have status "active" from an object array.

// function countActiveUsers(users) {
//     let count = 0;
//     for (let i = 0; i < users.length; i++) {
//         if (users[i].status === "active") {
//             count++;
//         }
//     }
//     return count;
// }

// const users = [
//     { name: "Raj", status: "active" },
//     { name: "Roe", status: "inactive" },
//     { name: "Amey", status: "active" },
//     { name: "RJ", status: "pending" },
//     { name: "Lazy", status: "active" }
// ];

// console.log(countActiveUsers(users));

//26.Create a function that returns an array of book titles from an array of book objects.

// function getBookTitles(books) {
//     let titles = [];
//     for (let i = 0; i < books.length; i++) {
//         titles.push(books[i].title);
//     }
//     return titles;
// }

// const books = [
//     { title: "The Lord of Mystery", author: "PTJ" },
//     { title: "Manager Kim", author: "Sebi Roteer" },
//     { title: "HIghschool of god", author: "Jin Mori" }
// ];

// console.log(getBookTitles(books));

// 27. Create a function that groups people by age from an array of person objects.

// function groupByAge(people) {
//     const groups = {};

//     for (const person of people) {
//         const age = person.age;

//         if (groups[age]) {
//             groups[age].push(person);
//         } else {
//             groups[age] = [person];
//         }
//     }

//     return groups;
// }

// let people = [
//     { age: "25", name: "Rohit" },
//     { age: "23", name: "Bunty" },
//     { age: "25", name: "Riya" },
//     { age: "23", name: "Axit" }
// ]

// console.log(groupByAge(people));

//28. Create a function that sorts employee objects by salary in descending order.

// function sortBySalaryDesc(employees) {
//     let n = employees.length;

//     for (let i = 0; i < n; i++) {
//         for (let j = i + 1; j < n; j++) {
//             if (employees[i].salary < employees[j].salary) {
//                 // swap
//                 let temp = employees[i];
//                 employees[i] = employees[j];
//                 employees[j] = temp;
//             }
//         }
//     }
//     return employees;
// }
// let employees = [
//     { name: "Rahul", salary: 30000 },
//     { name: "Prince", salary: 50000 },
//     { name: "Darshan", salary: 40000 }
// ];

// console.log(sortBySalaryDesc(employees));

//29.Create a function that converts an array of key-value objects into a single object.

// function arrayToObject(arr) {
//     let result = {};

//     for (let i = 0; i < arr.length; i++) {
//         result[arr[i].key] = arr[i].value;
//     }

//     return result;
// }
// const arr = [
//     { key: "name", value: "Avnish" },
//     { key: "age", value: 22 },
//     { key: "city", value: "Surat" }
// ];
// console.log(arrayToObject(arr));

//30.Create a function that calculates total quantity of all items in a shopping cart array.

// function totalQuantity(cart) {
//     let total = 0;

//     for (let i = 0; i < cart.length; i++) {
//         total = total + cart[i].quantity;
//     }
//     return total;
// }
// const cart = [
//     { item: "shampoo", quantity: 5 },
//     { item: "cadbury", quantity: 5 },
//     { item: "sweet", quantity: 10 }
// ];
// console.log(totalQuantity(cart));
