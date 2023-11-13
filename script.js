// 1. Solve the problem with Javascript  to find the maximum between two numbers. (Hint: take 2 variables and find the maximum number between them)

let number1 = 10;
let number2 = 5;

let max_number;

if (number1 > number2) {
    max_number = number1;
} else {
    max_number = number2;
}

console.log("The maximum number is:", max_number);


// 2. Solve the problem with Javascript  to check whether a number is negative, positive or zero. (take single variable and check using if esle condition)

let whether_number = 7;

if (whether_number > 0) {
  console.log("The number is positive.");
} else if (whether_number < 0) {
  console.log("The number is negative.");
} else {
  console.log("The number is zero.");
}

// 3. Solve the problem with Javascript  to check whether a number is divisible by 10 or not. (take single variable and check using if esle condition)

let divisible_number =30; 

if (divisible_number % 10 === 0) {
  console.log("The number is divisible by 10.");
} else {
  console.log("The number is not divisible by 10.");
}

// 4. Solve the problem with Javascript  to check whether a number is even or odd.

let number = 12; 

if (number % 2 === 0) {
  console.log("The number is even.");
} else {
  console.log("The number is odd.");
}


// 6. Solve the problem with Javascript  to check whether the temperature is hot, cold or normal. (30 <=  is hot, 25 >= is cold , anyother value is normal)

let temperature = 28;

if (temperature >= 30) {
  console.log("It's hot.");
} else if (temperature <= 25) {
  console.log("It's cold.");
} else {
  console.log("It's normal.");
}


// 7. Solve the problem with Javascript  to find a maximum between three numbers. (Hint: take 3 variables and find the maximum number between them use logical and operator for that)

let num1 = 15;
let num2 = 30;
let num3 = 20;

let maximum_number;

if (num1 >= num2 && num1 >= num3) {
    maximum_number = num1;
} else if (num2 >= num1 && num2 >= num3) {
    maximum_number = num2;
} else {
    maximum_number = num3;
}

console.log("The maximum number is:",maximum_number);

// 8. Write a JavaScript expression using the ternary operator that checks if a number x is even or odd. Store the result in a variable and print “Even Number” or “Odd Number”.

let number_X = 7;

let result = number_X % 2 === 0 ? "Even Number" : "Odd Number";

console.log(result);


// 9. Use the logical AND operator to determine if two variables, numOne and numTwo, are both greater than 30. Print a message to the console reflecting the result.

let numOne = 30;
let numTwo = 30;

if (numOne > 30 && numTwo > 30) {
  console.log("Both variables are greater than 30.");
} else if ((numOne <= 30 && numTwo > 30) || (numOne > 30 && numTwo <= 30)) {
  console.log("There's one variable that is not greater than 30.");
} else if (numOne === 30 && numTwo === 30) {
  console.log("Both variables are equal to 30.");
} else {
  console.log("Both variables are less than 30.");
}

// 10. Write a JavaScript program that uses if-else statements combined with logical operators. The program should check if a person’s age is between 13 and 19. If so, print “Teenager”. Otherwise, print “Not a teenager”. (Hint: Combining If-Else and Logical Operators)


let age = 28;

if (age >= 13 && age <= 19) {
  console.log("Teenager");
} else {
  console.log("Not a teenager");
}
