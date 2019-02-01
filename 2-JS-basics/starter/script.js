/******************************
* Variables and data types
*/

/*var firstName = 'John';
console.log(firstName);

var lastName = 'Smith';
console.log(lastName);

var age = 28;

var fullAge = true;
console.log(fullAge);

var job;
console.log(job);

job = 'Teacher';
console.log(job);
// Variable naming rules
var _3years = 3;

/***************************************
 * Variable mutation and type coercion
 */
/*
var firstName = 'John';
var age = 28;

console.log(firstName + ' ' + age);

var job, isMarried;
job = 'Teacher';
isMarried = false;

console.log(firstName + ' is a ' + age + ' year old ' + job + '. Is he married? ' + isMarried);

// Variable mutation
age = 'twenty eight';
job = 'driver';

alert(firstName + ' is a ' + age + ' year old ' + job + '. Is he married? ' + isMarried);

var lastName = prompt('What is his last name?');
console.log(firstName + ' ' + lastName);
*/

/*******************
* Basic Operators
*/
/*
var year, yearJohn, yearMark;
now = 2019;
ageJohn = 28;
ageMark = 33;

// Math operators
yearJohn = now - ageJohn;
yearMark = now - ageMark;

console.log(yearJohn);

console.log(now + 2);
console.log(now * 2);
console.log(now / 10);

// Logical operators
var johnOlder = ageJohn < ageMark;
console.log(johnOlder);

// typeof operator
console.log(typeof johnOlder);
console.log(typeof ageJohn);
console.log(typeof 'Mark is older than John');
var x;
console.log(typeof x);
*/

/**********************
 * Operator precedence
 */
/*
 var now = 2019;
 var yearJohn = 1989;
 var fullAge = 18;

 // Multiple operators
 var isFullAge = now - yearJohn >= fullAge;  //true
 console.log(isFullAge);

 // Grouping
 var ageJohn = now - yearJohn;
 var ageMark = 35;
 var average = (ageJohn + ageMark) / 2;
 console.log(average);

 // Multiple assignments
 var x, y;
 x = y = (3 + 5) * 4 - 6;
 console.log(x, y);

 // More operators
 x *= 2;
 console.log(x);
 x += 10;
 console.log(x);
 x++;
 console.log(x);
*/

 /**********************
  * Coding Challenge 1
  */

  /**
   * Mark and John are trying to compare their BMI, which is calculated using the forumula:
   * BMI = mass /height^2 or mass / (height * height).
   * (mass in kgs and height in meters)
   * 
   * 1) Store Mark's and John's mass and height in variables.
   * 2) Calculate both thier BMIs
   * 3) Create a boolean variable containing information about whether Mark has a higher BMI than John.
   * 4) Print a string to the console containing the variable from step 3. 
   */
/*
var johnHeight, johnWeight, markHeight, markWeight;

johnHeight = 2;
johnWeight = 68;
markHeight = 1.5;
markWeight = 80;

johnBMI = johnWeight / ( johnHeight * johnHeight );
markBMI = markWeight / ( markHeight * markHeight );

higherBMI = markBMI >= johnBMI;

console.log("Is Mark's BMI higher than John's?", higherBMI);
*/

/************************
 * If / else statements
 */
/*
var firstName = 'John';
var civilStatus = 'single';

if (civilStatus === 'married') {
   console.log(firstName + ' is married');
}
   else {
      console.log(firstName + ' is not married.');
   }

var isMarried = true;
if (isMarried) {
   console.log(firstName + ' is married');
}
else {
   console.log(firstName + ' is not married.');
}

var johnHeight, johnWeight, markHeight, markWeight;

johnHeight = 2;
johnWeight = 68;
markHeight = 1.5;
markWeight = 80;

johnBMI = johnWeight / (johnHeight * johnHeight);
markBMI = markWeight / (markHeight * markHeight);

if (markBMI > johnBMI) {
   console.log("Mark's BMI is higher than John's.");
}
   else {
      console.log("John's BMI is higher than Mark's");
   }
*/

/****************
 * Boolean Logic
 */

var firstName = 'John';
var age = 20;

if (age < 13){
   console.log(firstName + ' is a boy.');
} else if (age >= 13 && age < 20) {
   console.log(firstName + ' is a teenager.');  
}
   else if (age >= 20 && age < 30) {
    console.log(firstName + ' is a young man.');  
   }
      else {
   console.log(firstName + ' is a man.');
   }
