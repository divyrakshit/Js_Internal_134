//  1) Student Marks – Average using reduce()
// let marks = [80, 90, 70, 85, 95];
// let average = marks.reduce((sum, val) => sum + val, 0) / marks.length;
// console.log("Average Marks:", average);

//  2) Filter Even Numbers
// let numbers = [1,2,3,4,5,6,7,8,9];
// let evens = numbers.filter(n => n % 2 === 0);
// console.log(evens);

//  3) Shopping Cart Total Bill
// let cart = {
//   item: "Laptop",
//   price: 45000,
//   quantity: 2
// };

// let totalBill = cart.price * cart.quantity;
// console.log("Total Bill:", totalBill);

//  4) Movie List
// let movies = ["KGF", "Avengers", "Inception"];
// // Add one movie
// movies.push("Interstellar");
// // Remove last movie
// movies.pop();
// // Print final list using loop
// for (let m of movies) {
//   console.log(m);
// }

//  5) User Profile JSON
// let user = {name: "Aman", age: 21, course: "JS"};
// // Convert object to JSON
// let jsonData = JSON.stringify(user);
// // Store in variable
// console.log(jsonData);
// // Convert back to object
// let originalObject = JSON.parse(jsonData);
// console.log(originalObject);

// 6) Find Max Number in Array (Without Math.max) Bonus Task
// let arr = [10, 40, 25, 80, 15];
// let max = arr[0];
// for (let n of arr) {
//   if (n > max) {
//     max = n;
//   }
// }
// console.log("Max Number:", max);

//  7) Transform Names Using map() Bonus Task
// let names = ["ram", "shyam", "mohan"];
// let upperNames = names.map(n => n.toUpperCase());
// console.log(upperNames);

                        //  JSON PRACTICE QUESTION    

// Convert an object into JSON string using JSON.stringify() 
// let person = {
//   name: "Divy",
//   age: 20,
//   course: "JavaScript"
// };
// let jsonString = JSON.stringify(person);
// console.log(jsonString);


//   Convert a JSON string back to an object using JSON.parse()

// let jsonData = '{"name":"Divy","age":20,"course":"JavaScript"}';
// let obj = JSON.parse(jsonData);
// console.log(obj);


