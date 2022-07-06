// Additional assignments for Day 4
console.log("=====================Part 2=====================")
/* EXTRA 1
 Write a piece of code for reverting an array.
 es:
 [1, 3, 5] ==> [5, 3, 1]
*/

console.log("\n==========Question 1==========")
let q1Array = [1, 3, 5];
console.log(q1Array.toString());
q1Array = q1Array.reverse();
console.log(q1Array.toString())

/* EXTRA 2
 Write a piece of code for getting the maximum numerical value from an array.
*/

console.log("\n==========Question 2==========")
let maxNumber = Math.max(...q1Array);
console.log(maxNumber.toString());

/* EXTRA 3
 Write a piece of code for getting the minimum numerical value from an array.
*/

console.log("\n==========Question 3==========")
let minNumber = Math.min(...q1Array);
console.log(minNumber.toString());

/* EXTRA 4
 Write a piece of code for getting only even numerical values from an array.
*/

console.log("\n==========Question 4==========")
let q4Array = [1, 4, 6, 3, 2, 10, 7]
let even = q4Array.filter(number => {
    return number % 2 === 0;
});
console.log(even.toString());

/* EXTRA 5
 Write a piece of code for deleting only even entries from an array.
*/

console.log("\n==========Question 5==========");
let q5Array = [1, 4, 6, 3, 2, 10, 7];
for (let i = 0; i < q5Array.length; i++) {
    if (q5Array[i] % 2 === 0) {
        q5Array.splice(i, 1);
        i -= 1
    }
}
console.log(q5Array.toString());

/* EXTRA 6
 Write a piece of code for removing all the vowels from a string.
*/

console.log("\n==========Question 6==========");
let vowels = new RegExp("aeiou", "gi"); // ["a", "e", "i", "o", "u"];
let q6String = "ABC abc DEF def AAA aaa BBB bbb CCC ccc";
let letters = q6String.split("");
for (let i = 0; i < letters.length; i++) {
    if (letters[i] === vowels) {
        letters.splice(i, 1);
        i -= 1
    }
}
q6String = letters.join("");
console.log(q6String);

/* EXTRA 7
 Write a piece of code for increasing all the numerical values in a array by 1.
*/

/* WRITE YOUR ANSWER HERE */

/* EXTRA 8 
 Replace all the strings contained in an array with their length.
 es.: ["strive", "is", "great"] => [6, 2, 5]
*/

/* WRITE YOUR ANSWER HERE */
