/*
1- Convert the string "123" to a number and add 7.
 Output Example: 123

 ===============sOLVE================
let num="123";
let num2 = Number(num); 
console.log(num2);
OR
console.log(Number(num))
========================================================================================

2- Check if the given variable is falsy and return "Invalid" if it is. (0.5 Grade)
Input Example: 0
 Output Example: "Invalid"
  ===============sOLVE================
let testVarible =0;
function falseValue( x ){
if(x===0||x===""||x===false||x===-0||x===0n||x===undefined||x===null||x===NaN){
    return console.log("Invalid");
}else{
    return console.log("valid");
}}
 falseValue(testVarible);
==========================================================================================
3- Use for loop to print all numbers between 1 and 10, skipping even numbers using continue (0.5 Grade)
• Output Example:1, 3, 5, 7, 9
 ===============sOLVE================
 let arr=[];
for (let i = 1; i < 11; i++) {  
    if(i %2 ==0){
        continue;
    }
    else{
arr.push(i);
    }
    
}
console.log(arr);
==========================================================================================
4- Create an array of numbers and return only the even numbers using filter method. (0.5 Grade)
• Input Example: [1, 2, 3, 4, 5]
• Output Example: [2,4]
 ===============sOLVE================
let array =[1, 2, 3, 4, 5];
let copy =array.filter((num)=>num%2==0);
console.log(copy);
==========================================================================================
5-Use the spread operator to merge two arrays, then return the merged array. (0.5 Grade)
• Input Example: [1, 2, 3], [4, 5, 6]
• Output Example: [1, 2, 3, 4, 5, 6]
 ===============sOLVE================
 let array1 = [1, 2, 3] ;
let array2 =[4, 5, 6];
function merge(arr1,arr2){
arr3=[...arr1 ,...arr2];
console.log(arr3);
}
console.log(merge(array1,array2));
 ==========================================================================================
6- Use a switch statement to return the day of the week given a number (1 = Sunday …., 7 = Saturday). (0.5 Grade)
• Input Example: 2
• Output Example: “Monday”
 ===============sOLVE================
 switch(2)
{
    case 1:
        console.log("sunday");
        break;
    
    case 2:
        console.log("monday");
         break;
    case 3:
        console.log("thusday");
         break;
    case 4:
        console.log("wednesday");
         break;
    case 5:
        console.log("thursday");
         break;
    case 6:
        console.log("fridau");
         break;
    case 7:
        console.log("saterday");
         break;}
==========================================================================================
7-Create an array of strings and return their lengths using map method (0.5 Grade)
• Input: ["a", "ab", "abc"]
• Output Example: [1, 2, 3]
 ===============sOLVE================
let Strirng=["a888888888888","bb","ccc"];
let lengthOfStrirng=[];
Strirng.map(n=>lengthOfStrirng.push(n.length));
console.log(lengthOfStrirng);
==========================================================================================
8-Write a function that checks if a number is divisible by 3 and 5. (0.5 Grade)
 ===============sOLVE================
let num =15;
if(num%3==0 &&num%5==0){
    console.log("Divisible by both");
    
}else
console.log("not Divisible by both");
    

==========================================================================================
9-Write a function using arrow syntax to return the square of a number (0.5 Grade)
• Input Example: 5
• Output Example: 25
 ===============sOLVE================
const squareOfnumber=(a)=>a**2;
console.log(squareOfnumber(5));
==========================================================================================
10-Write a function that destructures an object to extract values and returns a formatted string. (0.5 Grade)

• Input Example: const person = {name: 'John', age: 25}
• Output Example: 'John is 25 years old'
 ===============sOLVE================
 const person = {name: 'John', age: 25}
let {name,age} = person;
console.log(`${name} is ${age} years old`);
==========================================================================================
11-.Write a function that accepts multiple parameters (two or more) and returns their sum. (0.5 Grade)
• Input Example: 1, 2, 3, 4, 5
• Output Example: 15
===============sOLVE================
function sum(...numbers){

let sum=0;
for (let index = 0; index < numbers.length; index++) {
     sum += numbers[index];
}
return console.log(sum);
;
}
 sum(1, 2, 3, 4, 5)

 ==========================================================================================
12-. Write a function that returns a promise which resolves after 3 seconds with a 'Success' message. (0.5 Grade)
• Output Example: “Success”

 ===============sOLVE================
function getMessage() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Success");
        }, 3000);
    });
}

getMessage().then(result => console.log(result));

 ==========================================================================================
13- Write a function to find the largest number in an array. (0.5 Grade)
• Input Example: [1, 3, 7, 2, 4]
• Output Example: 7
 ===============sOLVE================
function findLargest(arr) {
    console.log(Math.max(...arr));
}
    findLargest([1, 3, 7, 2, 4]);
==========================================================================================
14-. Write a function that takes an object and returns an array containing only its keys. (0.5 Grade)
• Input Example: name: "John", age: 30}
• Output Example: ["name", "age"]
 ===============sOLVE================
function getKeys(obj) {
    return Object.keys(obj);
}
console.log(getKeys({ name: "John", age: 30 }));

 ==========================================================================================
15-Write a function that splits a string into an array of words based on spaces. (0.5 Grade)
• Input: "The quick brown fox"
• Output: ["The", "quick", "brown", "fox"]
 ===============sOLVE================
 function splitWords(str) {
    return str.split(" ");
}
console.log(splitWords("The quick brown fox"));

*/

/*
==================================================================================================================================================================
B. Part 2: Essay Questions (2.5 Grade):
========================================
1. What is the difference between forEach and for...of? When would you use each? (0.5 Grade)
                                                    Solve
for of is loop tool i use it on any iterable think (array,set, map ) 
for Each is a ArrayMethod only  is agood tool for it 

==============================================================================================
2-What is hoisting and what is the Temporal Dead Zone (TDZ)? Explain with examples. (0.5 Grade)

hoisting is redeclaretion all variable and function in bagin code
TDZ is princible  born with es6 IS come == say no  variable (let && const ) is work before declaration

console.log(Number);======>TDZ to access to Number 
let Number=6;  
===============================================================================================
3- 3. What are the main differences between == and ===? (0.5 Grade)
(==) is a compire bet value Onle  
(===)is acompire bet value + type 
===============================================================================================
===============================================================================================
5- What’s the difference between type conversion and coercion? Provide examples of each. (0.5 Grade)
(conversion) is explicit I change type any thing EX: Numbert("5");
(coercion) is implicit js is change type to complete running EX: "5"+2=="52";


*/
/*
LEETCODE question 
var createCounter = function(init) {
    let current = init;

    function increment() {
        current += 1;
        return current;
    }

    function reset() {
        current = init;
        return current;
    }

    function decrement() {
        current -= 1;
        return current;
    }

    return { increment, reset, decrement };
};


*/


