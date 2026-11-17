
// Question 1
var number = Number(prompt("Enter a number:"));
if (number % 3 === 0) {
    alert("Number is divisible by 3");
} else {
    alert("Number is not divisible by 3");
}

// Question 2
var evenOdd = Number(prompt("Enter a number:"));
if (evenOdd % 2 === 0) {
    alert("Even number");
} else {
    alert("Odd number");
}

// Question 3
var age = Number(prompt("Enter your age:"));
if (age > 18) {
    alert("Old enough");
} else {
    alert("Too young");
}

// Question 4
var enteredName = prompt("Enter your name:");
var myName = "Hisham";
if (enteredName.toLowerCase() === myName.toLowerCase()) {
    alert("Hello " + myName + "!");
}

// Question 5
var numberForSwitch = Number(prompt("Enter a number:"));
if (numberForSwitch % 3 === 0) {
    alert("Number is divisible by 3");
} else {
    alert("Number is not divisible by 3");
}

// Question 6
var character = prompt("Enter a single character:");
var characterCode = character.charCodeAt(0);

if (character.length !== 1) {
    alert("Please enter only one character");
} else if (characterCode >= 48 && characterCode <= 57) {
    alert("It is a number");
} else if (characterCode >= 65 && characterCode <= 90) {
    alert("It is an uppercase letter");
} else if (characterCode >= 97 && characterCode <= 122) {
    alert("It is a lowercase letter");
} else {
    alert("It is another character");
}

// Question 7
var num1 = Number(prompt("Enter first number:"));
var num2 = Number(prompt("Enter second number:"));
var operator = prompt("Enter operator (+, -, *, /, %):");
var result;

if (operator === "+") {
    result = num1 + num2;
} else if (operator === "-") {
    result = num1 - num2;
} else if (operator === "*") {
    result = num1 * num2;
} else if (operator === "/") {
    if (num2 !== 0) {
        result = num1 / num2;
    } else {
        result = "Cannot divide by zero";
    }
} else if (operator === "%") {
    if (num2 !== 0) {
        result = num1 % num2;
    } else {
        result = "Cannot divide by zero";
    }
} else {
    result = "Invalid operator";
}
alert("Result: " + result);

// Question 8
var time = Number(prompt("Enter time in 24-hour format (e.g. 1900):"));
var hour = Math.floor(time / 100);
var minutes = time % 100;

if (time < 0 || time > 2359 || minutes > 59) {
    alert("Invalid time");
} else if (hour >= 0 && hour < 12) {
    alert("Good morning");
} else if (hour >= 12 && hour < 17) {
    alert("Good afternoon");
} else {
    alert("Good evening");
}

// Question 9
var year = Number(prompt("Enter a year (YYYY):"));
if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    alert(year + " is a leap year");
} else {
    alert(year + " is not a leap year");
}

// Question 10
var correctPassword = "12345";
var userPassword = prompt("Enter your password:");

if (userPassword === "") {
    alert("Please enter your password");
} else if (userPassword === correctPassword) {
    alert("Correct! The password you entered matches the original password");
} else {
    alert("Incorrect password");
}

// Question 11
var firstName = "Ali";
if (firstName === "Fahad") {
    document.write("Hello Fahad!");
} else {
    document.write("You are not Fahad");
}

// Question 12
var greeting;
var currentHour = 13;

if (currentHour < 18) {
    greeting = "Good day";
} else {
    greeting = "Good evening";
}
document.write("<br>" + greeting);

// Question 13
var integer1 = Number(prompt("Enter first integer:"));
var integer2 = Number(prompt("Enter second integer:"));

if (integer1 > integer2) {
    alert(integer1 + " is larger");
} else if (integer2 > integer1) {
    alert(integer2 + " is larger");
} else {
    alert("Both integers are equal");
}

// Question 14
var value = Number(prompt("Enter a number:"));

if (value > 0) {
    alert("The number is positive");
} else if (value < 0) {
    alert("The number is negative");
} else {
    alert("The number is zero");
}

// Question 15
var mealHour = Number(prompt("Enter current hour (0 to 23):"));

if (mealHour >= 6 && mealHour <= 9) {
    alert("Breakfast is served.");
} else if (mealHour >= 11 && mealHour <= 13) {
    alert("Time for lunch.");
} else if (mealHour >= 17 && mealHour <= 20) {
    alert("It's dinner time.");
} else {
    alert("Sorry, you'll have to wait, or go get a snack.");
}

// Question 16
var storedValue = 42;
var valueType = typeof storedValue;

if (valueType === "number") {
    alert("The type of variable is " + valueType);
} else if (valueType === "string") {
    alert("The type of variable is " + valueType);
} else if (valueType === "boolean") {
    alert("The type of variable is " + valueType);
} else if (valueType === "undefined") {
    alert("The type of variable is " + valueType);
}

// Question 17
var letter = prompt("Enter a single character:");
var isVowel = false;

if (letter.length === 1) {
    if (letter === "a" || letter === "e" || letter === "i" ||
        letter === "o" || letter === "u" ||
        letter === "A" || letter === "E" || letter === "I" ||
        letter === "O" || letter === "U") {
        isVowel = true;
    }
}
alert(isVowel);

// Question 18
var comparison;
if (10 !== 8) {
    comparison = true;
} else {
    comparison = false;
}
alert(comparison);

// Question 19
var month = Number(prompt("Enter month number (1-12):"));

if (month === 1) {
    alert("January");
} else if (month === 2) {
    alert("February");
} else if (month === 3) {
    alert("March");
} else if (month === 4) {
    alert("April");
} else if (month === 5) {
    alert("May");
} else if (month === 6) {
    alert("June");
} else if (month === 7) {
    alert("July");
} else if (month === 8) {
    alert("August");
} else if (month === 9) {
    alert("September");
} else if (month === 10) {
    alert("October");
} else if (month === 11) {
    alert("November");
} else if (month === 12) {
    alert("December");
} else {
    alert("Invalid month");
}

// Question 20
var votingAge = Number(prompt("Enter your age:"));
var voteable;

if (votingAge < 18) {
    voteable = "Too young";
} else {
    voteable = "Old enough";
}
alert(voteable);
