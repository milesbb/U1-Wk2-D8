/*
ASSIGNMENT RULES
- All the answers must be written in JavaScript
- You can ask for help, reach the Teaching Assistants if needed
- You can Google / use StackOverflow BUT only when you think you need something we didn't cover during lessons yet
- You can test your code in a separate file or de-commenting the single exercises in this one.
- You can use the bash terminal, the VSCode terminal or the one embedded in your Operating System if you're using macOS or Linux.
- The solution must be available for the tutors by the end of the day (5PM CET)
*/

console.log("=====================Part 1=====================")

/* EXERCISE 1
 Create a variable and assign to it an array containing the first 5 positive numbers.
*/

console.log("\n==========Question 1==========")
let q1Array = [1, 2, 3, 4, 5];
console.log(q1Array.toString());

/* EXERCISE 2
 Create a variable and assign to it an object containing your name, surname, email address and age.
*/

console.log("\n==========Question 2==========")
let person = {
    firstname : "Miles",
    lastname : "Bailey-Braendgaard",
    email : "xxx@xxx.com",
    age : 22,
}
console.log(person);

/* EXERCISE 3
 Add to the previously created object a property with a boolean value to rappresent wheter you have or not a driving license.
*/

console.log("\n==========Question 3==========")
person.drivingLicense = true;
console.log(person);

/* EXERCISE 4
 Remove from the previously created object the age property.
*/

console.log("\n==========Question 4==========")
delete person.age;
console.log(person);

/* EXERCISE 5
 Create a second object with another name, surname, email address and verify that this object has a different email address than the previous one.
*/

console.log("\n==========Question 5==========")
let secondPerson = Object.assign({}, person, {email : "yyy@yyy.com"})
console.log(person.email);
console.log(secondPerson.email);

/* EXERCISE 6
 You are working on an e-commerce website. In the variable totalShoppingCart you are storing the total amount spent by the current user.
 Currently you have a promotion: if the customer's shopping cart total is more than 50, the user is eligible for free shipping (otherwise it costs 10).
 Write an algorithm that calculates the total cost to charge the user with.
*/

console.log("\n==========Question 6==========")
let totalShoppingCart = 12;
let totalCost = totalShoppingCart;
if (totalShoppingCart <= 50) {
    totalCost += 10;
}

console.log(`Your basket total is ${totalShoppingCart} The total cost is ${totalCost}`);

/* EXERCISE 7
 You are working on an e-commerce website. Today is Black Friday and everything has a 20% discount at the end of the purchase.
 Modify the previous answer inserting this information and, applying the same rules for the shipping cost, calculate the totalCost.
*/

console.log("\n==========Question 7==========")
totalShoppingCart = 12;
totalShoppingCart *= 0.8;
if (totalShoppingCart <= 50) {
    totalCost += 10;
}

console.log(`Your basket total is ${totalShoppingCart.toFixed(2)} with a 20% discount applied. 
\nThe total cost is ${totalCost}`);

/* EXERCISE 8
 Create a variable and assign to it an object representing a car, with properties like brand, model and licensePlate.
 Then clone it 5 times, and change the licensePlate for each cloned car without affecting the original one.
*/

console.log("\n==========Question 8==========")
let car1 = {
    brand : "Aston Fartin",
    model : "12-22GX",
    licensePlate : "WY2 3FG"
};

let car2 = Object.assign({}, car1, {licensePlate : "23C FSE"});
let car3 = Object.assign({}, car1, {licensePlate : "D20 DSG"});
let car4 = Object.assign({}, car1, {licensePlate : "WII 902"});
let car5 = Object.assign({}, car1, {licensePlate : "GSL FUU"});
let car6 = Object.assign({}, car1, {licensePlate : "SLA 54F"});

console.log(`Car liscence plates: ${car1.licensePlate}, ${car2.licensePlate}, ${car3.licensePlate}, ${car4.licensePlate}, ${car5.licensePlate}, ${car6.licensePlate}`)

/* EXERCISE 9
 Create a variable called carsForRent and assign to it an array containing all the cars from the previous exercise.
*/

console.log("\n==========Question 9==========");

let carsForRent = [car1, car2, car3, car4, car5, car6];
console.log(carsForRent);

/* EXERCISE 10
 Remove the first and the last car from the carsForRent array.
*/

console.log("\n==========Question 10==========");

carsForRent.splice(0, 1);
carsForRent.splice((carsForRent.length - 1), 1);
console.log(carsForRent);

/* EXERCISE 11
 Print to the console the type of the car variable you created before, as well as the types of its licensePlate and brand properties.
*/

console.log("\n==========Question 11==========");

console.log(typeof car1);
console.log(typeof car1.licensePlate);
console.log(typeof car1.brand);

/* EXERCISE 12
 Create a new variable called carsForSale assigning to it an empty array, and then insert 3 cars into it.
 Create a new variable called totalCars and assign to it the total number of cars present in the carsForSale and carsForRent arrays.
*/

console.log("\n==========Question 12==========");

let carsForSale = Array(3);

carsForSale[0] = car1;
carsForSale[1] = car2;
carsForSale[2] = car3;

let totalCars = carsForSale.length + carsForRent.length;
console.log(totalCars.toString())

/* EXERCISE 13
 Using a loop, print to the console all the data for each car in the carsForSale array.
*/

console.log("\n==========Question 13==========");

for (let i = 0; i < carsForSale.length; i++) {
    console.log(carsForSale[i])
}
