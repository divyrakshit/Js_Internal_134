// 1) Sum of two numbers

// let a = 5, b = 7;
// console.log(a + b);


// 2) Print "Hello <name>"

// let name = "Divy";
// console.log(`Hello ${name}`);


// 3) Even / Odd check

// let num = 10;
// console.log(num % 2 === 0 ? "Even" : "Odd");

// 4) Celsius → Fahrenheit

// let c = 37;
// let f = (c * 9/5) + 32;
// console.log(f);

// 5) Max among 3 numbers

// let a = 10, b = 25, c = 7;
// console.log(Math.max(a, b, c));


// 6) Find string length

// let str = "JavaScript";
// console.log(str.length);

// 7) Toggle boolean

// let x = true;
// x = !x;
// console.log(x);

// 8) Concatenate strings

// let s1 = "Hello", s2 = "World";
// console.log(s1 + " " + s2);



// 9) Positive / Negative / Zero

// let n = -5;
// if (n > 0) console.log("Positive");
// else if (n < 0) console.log("Negative");
// else console.log("Zero");


// 10) var / let / const example

// var a = 10;
// let b = 20;
// const c = 30;
// console.log(a, b, c);


// 11) Multiplication table

// let n = 5;
// for (let i = 1; i <= 10; i++) {
//     console.log(`${n} x ${i} = ${n*i}`);
// }

// 12) Sum of first 10 natural numbers

// let sum = 0;
// for (let i = 1; i <= 10; i++) sum += i;
// console.log(sum);


// 13) Switch → day name

// let day = 3;
// switch(day) {
//     case 1: console.log("Monday"); break;
//     case 2: console.log("Tuesday"); break;
//     case 3: console.log("Wednesday"); break;
//     case 4: console.log("Thursday"); break;
//     case 5: console.log("Friday"); break;
//     case 6: console.log("Saturday"); break;
//     case 7: console.log("Sunday"); break;
//     default: console.log("Invalid");
// }


// 14) Function → Factorial

// function factorial(n){
//     let f = 1;
//     for (let i = 1; i <= n; i++) f *= i;
//     return f;
// }
// console.log(factorial(5));


// 15) Function → Voting eligibility

// function canVote(age){
//     return age >= 18 ? "Eligible" : "Not Eligible";
// }
// console.log(canVote(20));

// 16)Check prime number

// function isPrime(n){
//     if (n <= 1) return false;
//     for (let i = 2; i <= Math.sqrt(n); i++){
//         if (n % i === 0) return false;
//     }
//     return true;
// }
// console.log(isPrime(17));

// 17) Sum of digits

// let num = 123;
// let sum = 0;

// while (num > 0){
//     sum += num % 10;
//     num = Math.floor(num / 10);
// }
// console.log(sum);


// 18) Reverse string (without reverse())

// function reverseStr(str){
//     let result = "";
//     for (let i = str.length - 1; i >= 0; i--){
//         result += str[i];
//     }
//     return result;
// }
// console.log(reverseStr("hello"));


// 19)Grade finder

// function grade(marks){
//     if (marks >= 90) return "A";
//     else if (marks >= 75) return "B";
//     else if (marks >= 50) return "C";
//     else return "Fail";
// }
// console.log(grade(82));


// 20)Calculator (two numbers & operator)


// function calc(a, b, op){
//     switch(op){
//         case "+": return a + b;
//         case "-": return a - b;
//         case "*": return a * b;
//         case "/": return b !== 0 ? a / b : "Error";
//         default: return "Invalid operator";
//     }
// }
// console.log(calc(5, 3, "*"));


// 21) Count vowels

// function countVowels(str){
//     let vowels = "aeiouAEIOU";
//     let count = 0;
//     for (let ch of str){
//         if (vowels.includes(ch)) count++;
//     }
//     return count;
// }
// console.log(countVowels("Divy Rakshit"));


// 22) Fibonacci series

// function fibonacci(n){
//     let a = 0, b = 1;
//     console.log(a);
//     if (n > 1) console.log(b);

//     for (let i = 3; i <= n; i++){
//         let c = a + b;
//         console.log(c);
//         a = b;
//         b = c;
//     }
// }
// fibonacci(10);

// 23) Min & Max from array


// function minMax(arr){
//     return {
//         min: Math.min(...arr),
//         max: Math.max(...arr)
//     };
// }
// console.log(minMax([3, 7, 2, 9, 5]));



// 24)Simple Menu (switch-case)

// let choice = 1;
// let a = 10, b = 5;

// switch(choice){
//     case 1: console.log("Add =", a + b); break;
//     case 2: console.log("Sub =", a - b); break;
//     case 3: console.log("Mul =", a * b); break;
//     case 4: console.log("Div =", a / b); break;
//     default: console.log("Invalid choice");
// }


// 25)Armstrong number check

// function isArmstrong(n){
//     let sum = 0;
//     let digits = n.toString().length;
//     let temp = n;

//     while (temp > 0){
//         let d = temp % 10;
//         sum += d ** digits;
//         temp = Math.floor(temp / 10);
//     }
//     return sum === n;
// }
// console.log(isArmstrong(153));


