// Additional assignments for Day 4
console.log("=====================Part 2=====================");
/* EXTRA 1
 Write a piece of code for reverting an array.
 es:
 [1, 3, 5] ==> [5, 3, 1]
*/

console.log("\n==========Question 1==========");
let q1Array = [1, 3, 5];
console.log(q1Array.toString());
q1Array = q1Array.reverse();
console.log(q1Array.toString());

/* EXTRA 2
 Write a piece of code for getting the maximum numerical value from an array.
*/

console.log("\n==========Question 2==========");
console.log(q1Array.toString());
let maxNumber = Math.max(...q1Array);
console.log(maxNumber.toString());

/* EXTRA 3
 Write a piece of code for getting the minimum numerical value from an array.
*/

console.log("\n==========Question 3==========");
console.log(q1Array.toString());
let minNumber = Math.min(...q1Array);
console.log(minNumber.toString());

/* EXTRA 4
 Write a piece of code for getting only even numerical values from an array.
*/

console.log("\n==========Question 4==========");
let q4Array = [1, 4, 6, 3, 2, 10, 7]
console.log(q4Array.toString());
let even = q4Array.filter(number => {
    return number % 2 === 0;
});
console.log(even.toString());

/* EXTRA 5
 Write a piece of code for deleting only even entries from an array.
*/

console.log("\n==========Question 5==========");
let q5Array = [1, 4, 6, 3, 2, 10, 7];
console.log(q5Array.toString());
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

let vowels = ["a", "A", "e", "E", "i", "I", "o", "O", "u", "U"];
let q6String = "ABC abc DEF def AAA aaa BBB bbb CCC ccc";
console.log(q6String);
let letters = q6String.split("");
for (let i = 0; i < letters.length; i++) {
    for (let x = 0; x < vowels.length; x++) {
        if (letters[i] === vowels[x]) {
            letters.splice(i, 1);
            i -= 1
        }
    }
}
q6String = letters.join("");
console.log(q6String);

/* EXTRA 7
 Write a piece of code for increasing all the numerical values in a array by 1.
*/

console.log("\n==========Question 7==========");
let q7Array = [1, 2, 3, 4, 5 , 6, 7, 8];
console.log(q7Array.toString());
for (let i = 0; i < q7Array.length; i++) {
    q7Array[i] += 1
}
console.log(q7Array.toString());

/* EXTRA 8 
 Replace all the strings contained in an array with their length.
 es.: ["strive", "is", "great"] => [6, 2, 5]
*/

console.log("\n==========Question 8==========");
let q8Array = ["Bandidos", "Lorax", "Dog", "Breakfast"]
console.log(q8Array);
for (let i = 0; i < q8Array.length; i++) {
    q8Array[i] = q8Array[i].length;
}
console.log(q8Array.toString());