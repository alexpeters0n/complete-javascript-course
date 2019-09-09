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
/*
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
*/

/*********************************************
 * The Ternary Operator and Switch Statements
 */
/*
var firstName = 'John';
var age = 16;

age >= 18 ? console.log(firstName + ' drinks beer.')
: console.log(firstName + ' drinks soda.');

var drink = age >= 18 ? 'beer' : 'soda';
console.log(drink);


if (age >= 18) {
   var drink = 'beer';
} else {
   var drink = 'soda';
}
console.log(drink);


// Switch Statement

var job = 'instructor';
switch(job) {
   case 'teacher':
   case 'instructor':
      console.log(firstName + ' teaches kids how to code.');
      break;
   case 'driver':
      console.log(firstName + ' drives and Uber in Philly.');
      break;
   case 'designer':
      console.log(firstName + 'designs websites.');
      break;
   default:
      console.log(firstName + ' does something else.');
}

switch (true) {
   case age < 13:
      console.log(firstName + ' is a boy.')
      break;
   case age >= 13 && age < 20:
      console.log(firstName + ' is a teenager.');
      break;
   case age >= 20 && age < 30:
      console.log(firstName + ' is a young man.');
      break;
   default:
      console.log(firstName + ' is a man.');
}
*/

/**************************************************
 * Truthy and Falsey values and equality operators
 */

 //falsey values: underfined, null, 0, '', NaN
 //truthy values: NOT falsy values
/*
var height;

height = 0;

if (height || height === 0) {
   console.log('Variable is defined');
} else {
   console.log('Variable has NOT been defined.');
}

// Equality operators
if (height = '23') {
   console.log('The == operator does type coercion.');
}
*/

/**
 * Coding Challenge 2
 */

 /*
 John and Mike both play basektball on different teams. In the latest 3 games, John's team
 scored 89, 120, and 103 points. Mike's team scored 116, 94, and 123 points.

 1) Calculate the average score for each team
 2) Decide which teams wins in average (highest average score), and print the winner to the console.
 Also include the acergae score in the output.
 3) Then change the scores to show different winners. Don't forget to take into account there might
 be a draw.
 4) EXTRA: Mary also play basketball, and her team scored 97, 134, and 105 points. As before, log
 the avergae winner to the console. 
 */
/*
var averageTeamJohn = (89 + 120 + 103) / 3;
var averageTeamMike = (116 + 94 + 123) / 3;
var averageTeamMary = (97 + 134 + 105) / 3;
console.log(averageTeamJohn, averageTeamMike, averageTeamMary);

if (averageTeamJohn > averageTeamMike && averageTeamJohn > averageTeamMary) {
   console.log("John's team scored " + averageTeamJohn + " points on average.");
} else if (averageTeamMike > averageTeamJohn && averageTeamMike > averageTeamMary) {
   console.log("Mike's team scored " + averageTeamMike + " points on average.");
} else if ( averageTeamMary > averageTeamJohn && averageTeamMary > averageTeamMike) {
   console.log("Mary's team scored " + averageTeamMary + " points on average.");
} else {
   console.log("There is a draw.");
}

// if (averageTeamJohn > averageTeamMike) {
//    console.log("John's team scored " + averageTeamJohn + " points on average.");
// } else if (averageTeamMike > averageTeamJohn) {
//    console.log("Mike's team scored " + averageTeamMike + " points on averge.");
// } else {
//    console.log("There is a draw.");
// }
*/

/**************
 * Functions
 */
/*
function calculateAge(birthYear) {
   return 2019 - birthYear;
}

var ageAlex = calculateAge(1989);
var ageMike = calculateAge(1962);
var ageAlan = calculateAge(1994);
console.log(ageAlex, ageMike, ageAlan);


function yearsUntilRetirement(year, firstName) {
   var age = calculateAge(year);
   var retirement = 65 - age;

   if (retirement > 0){
   console.log(firstName + " retires in " + retirement + " years.");
   } else {
      console.log(firstName + " is already retired.");
   }
}

yearsUntilRetirement(1989, "Alex");
yearsUntilRetirement(1962, "Mike");
yearsUntilRetirement(1994, "Alan");
*/

/************************************
 * Function Statements and Expressions
 */

 //Function Declaration
//function whatDoYouDo(job, firstName){}
/*
// Function expression
var whatDoYouDo = function(job, firstName) {
   switch(job) {
      case 'teacher':
         return firstName + ' teaches kids how to code.';

      case 'driver':
         return firstName + ' drives a cab in Lancaster.';

      case 'designer':
         return firstName + ' designs websites.';

      default:
         return firstName + ' does something else.';
   }
}

console.log(whatDoYouDo('teacher', 'John'));
console.log(whatDoYouDo('designer', 'Jane'));
console.log(whatDoYouDo('retired', 'Mark'));
*/

/****************
 * Arrays
 */
/*
// Initialize new array
var names = ['John', 'Mark', 'Jane'];
var years = new Array(1990, 1969, 1948);

console.log(names[2]);
console.log(names.length);

// Mutate array data
names[1] = 'Ben';
names[names.length] = 'Mary';
console.log(names);

// Different data types
var john = ['John', 'Smith', 1990, 'designer', false];

// array methods
john.push('blue');
john.unshift('Mr.');
console.log(john);

john.pop();
john.shift();
console.log(john);

console.log(john.indexOf(23));

var isDesigner = john.indexOf('designer') === -1 ? 'John is NOT a designer' : 'John IS a designer';
console.log(isDesigner);
*/

/******************************************
 * Coding Challenge 3
 */
/* John and his family went on a holiday and went to 3 different restaurants. The bills were $124,
$48 and $200. To tip the waiter a fair amount, John created a simple tip calculator (as a function).
He likes to tip 20% of the bill when the bill is less than %50, 15% when the bill is between
$50 and $268, and 10% if the bill is more than $200.

In the end, John would like to have 2 arrays:
1) Containing all 3 tips (one for each bill)
2) Containing all three final paid amounts (bill + tip)

(NOTE: To calculate 20% of a value, simply multiply it with 20/100 = 0.2)
*/

/*
function tipCalculator(bill) {
   var percentage;
   if (bill < 50) {
      percentage = .2;
   } else if (bill >= 50 && bill < 200) {
      percentage = .15;
   } else {
      percentage = .1;
   }
   return percentage * bill;
}

var bills = [124, 48, 268]
var tips = [tipCalculator(bills[0]),
            tipCalculator(bills[1]),
            tipCalculator(bills[2]),
];

var totalBill = [bills[0] + tips[0],
                   bills[1] + tips[1],
                   bills[2] + tips[2],
];

console.log(tips, totalBill);
*/

/*******************************
 * Objects and Properties
 */

//Object literal
var john = {
   firstName: 'John',
   lastName: 'Smith',
   birthYear: 1990,
   family: ['Jane', 'Mark', 'Bob', 'Emily'],
   job: 'teacher',
   isMarried: false
};
console.log(john.firstName);
console.log(john['lastName']);
var x = 'birthYear';
console.log(john[x]);

john.job = 'designer';
john['isMarried'] = true;
console.log(john);

// new object syntax
var jane = new Object();
jane.name = 'Jane';
jane.birthYear = 1969;
jane['lastName'] = 'Smith';
console.log(jane);
