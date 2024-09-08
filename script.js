
//Welcome to JavaScript

console.log("Hello World");


//--section--0: Starter Code
// The initial numbers that must be verified.
const n1 = 10;
const n2 = 15;
const n3 = 20;
const n4 = 5;

// Check one: add up to 50
// This is a fairly simple operation using
// arithmetic operators and a comparison.
const isSum50 = (n1 + n2 + n3 + n4) == 50;

// Check two: at least two odd numbers
// Here, we use modulus to check if something is odd.
// Since % 2 is 0 if even and 1 if odd, we can use
// arithmetic to count the total number of odd numbers.
const isTwoOdd = (n1 % 2) + (n2 % 2) + (n3 % 2) + (n4 % 2) >= 2;

// Check three: no number larger than 25
// This time, we use the OR operator to check
// if ANY of the numbers is larger than 25.
const isOver25 = n1 > 25 || n2 > 25 || n3 > 25 || n4 > 25;

// Check four: all unique numbers
// This is long, and there are more efficient
// ways of handling it with other data structures
// that we will review later.
const isUnique = n1 != n2 && n1 != n3 && n1 != n4 && n2 != n3 && n2 != n4 && n3 != n4;

// Here, we put the results into a single variable 
// for convenience. Note how we negate isOver25 using
// the ! operator. We could also have tested for 
// "isUnder25" as an alternative.
const isValid = isSum50 && isTwoOdd && !isOver25 && isUnique;

// Finally, log the results.
console.log(isValid);

// Here's another example of how this COULD be done,
// but it SHOULD NOT be done this way. As programmers,
// we break things into small, manageable pieces so that
// they can be better understood, scaled, and maintained.
const dontDoThis = ((n1 + n2 + n3 + n4) == 50) && 
  ((n1 % 2) + (n2 % 2) + (n3 % 2) + (n4 % 2) >= 2) && 
  !(n1 > 25 || n2 > 25 || n3 > 25 || n4 > 25) && 
  (n1 != n2 && n1 != n3 && n1 != n4 && n2 != n3 && n2 != n4 && n3 != n4);


// Check if all numbers are divisible by 5. Cache the result in a variable.
// Check if the first number is larger than the last. Cache the result in a variable.
// Accomplish the following arithmetic chain:
// Subtract the first number from the second number.
// Multiply the result by the third number.
// Find the remainder of dividing the result by the fourth number.
// Change the way that isOver25 calculates so that we do not need to use the 
// NOT operator (!) in other logic comparisons. Rename the variable as appropriate.

//--section--1: Math Problems

// Check if all numbers are divisible by 5. Cache the result in a variable.
let first_check = (n1 % 5) + (n2 % 5) + (n3 % 5) + (n4 % 5) >= 0;
console.log(first_check +", all the numbers divisible by 5");

let second_check = n1 > n4;
console.log(second_check +", is the first number larger than the last number");

let third_check = ((n3*(n2-n1) )% n4)
console.log(third_check + " is the result of the arithmetic chain");
//answer has to be 0

//const isOver25 = n1 > 25 || n2 > 25 || n3 > 25 || n4 > 25;
let fourth_check =  n1 < 25 || n2 < 25 || n3 < 25 || n4 < 25;
console.log(fourth_check + "  all the number are under 25");


const result_of_checks = "first is " + first_check + " second is " + second_check + " third is " + third_check + " and fourth is " + fourth_check;
console.log(result_of_checks); //all results logged

//--section--2: Practical Math 

const distance =1500 //miles
const fuelefficiency_55 = 30 //mpg
const fuelefficiency_60 = 28 //mpg
const fuelefficiency_75 = 23 //mpg
const budget = 175 //dollars
const average = 3 //dollars per gallon

// How many gallons of fuel will you need for the entire trip?
// Will your budget be enough to cover the fuel expense?
// How long will the trip take, in hours?

let gallons_of_gas = budget/average //The amount of gas that can be afforded.
let max_distance_fe_55 = gallons_of_gas * fuelefficiency_55
let max_distance_fe_60 = gallons_of_gas * fuelefficiency_60
let max_distance_fe_75 = gallons_of_gas * fuelefficiency_75
console.log("Amount of gas that can be afforded is "+ gallons_of_gas);
console.log(" The max distance with 55 fuelefficiency is " + max_distance_fe_55 + " miles");
console.log(" The max distance with 60 fuelefficiency is " + max_distance_fe_60 + " miles");
console.log(" The max distance with 75 fuelefficiency is " + max_distance_fe_75 + " miles");    

console.log("The trip will take " + distance/55 + " hours with 55 fuelefficiency");
console.log("The trip will take " + distance/60 + " hours with 60 fuelefficiency");
console.log("The trip will take " + distance/75 + " hours with 75 fuelefficiency");

console.log("The trip will take " + distance/fuelefficiency_55 + " gallons of gas with 55 fuelefficiency");
console.log("The trip will take " + distance/fuelefficiency_60 + " gallon of gas with 60 fuelefficiency");
console.log("The trip will take " + distance/fuelefficiency_75 + " gallon of gas with 75 fuelefficiency");

console.log("Note that the budget isn't high enough to cover the fuel expenses for traveling 75mph for the entire trip");
console.log("Traveling at 55mph will require the smallest amount of fuel possible, and therefore will be the cheapest option at "+distance/fuelefficiency_55*3+" dollars");

console.log("The shortest trip will take a combination of 60mph and 75mph"); 
let gallons_for_75 = ((gallons_of_gas*fuelefficiency_60) - distance)/(fuelefficiency_60 - fuelefficiency_75);
let gallons_for_60 = (gallons_of_gas- gallons_for_75);
let hours_for_60 = gallons_for_60*fuelefficiency_60/60;
let hours_for_75 = gallons_for_75*fuelefficiency_75/60;
let total_hours = hours_for_60 + hours_for_75;
console.log("60mph will take " + hours_for_60 + " hours and 75mph will take " + hours_for_75 + " hours");
console.log("The total trip will take " + total_hours + " hours");




//--section--3: Future Exploration
console.log("Learn new things in the future");