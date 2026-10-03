// ========================================
// 1. LEAP YEAR CHECKER
// ========================================

const yearInput = document.querySelector("#yearInput");
const yearButton = document.querySelector("#yearButton");
const yearResult = document.querySelector("#yearResult");


yearButton.addEventListener("click", function () {

    const year = Number(yearInput.value);

    if (year === 0 || yearInput.value === "") {
        yearResult.textContent = "Please enter a valid year.";
        return;
    }

    if (year % 400 === 0) {
        yearResult.textContent = year + " is a leap year.";
    } 
    else if (year % 100 === 0) {
        yearResult.textContent = year + " is not a leap year.";
    } 
    else if (year % 4 === 0) {
        yearResult.textContent = year + " is a leap year.";
    } 
    else {
        yearResult.textContent = year + " is not a leap year.";
    }

});



// ========================================
// 2. PALINDROME CHECKER
// ========================================

const palindromeInput = document.querySelector("#palindromeInput");
const palindromeButton = document.querySelector("#palindromeButton");
const palindromeResult = document.querySelector("#palindromeResult");


palindromeButton.addEventListener("click", function () {

    const word = palindromeInput.value.trim();

    if (word === "") {
        palindromeResult.textContent = "Please enter a word.";
        return;
    }

    const reversedWord = word.split("").reverse().join("");

    if (word.toLowerCase() === reversedWord.toLowerCase()) {
        palindromeResult.textContent = `"${word}" is a palindrome.`;
    } 
    else {
        palindromeResult.textContent = `"${word}" is not a palindrome.`;
    }

});



// ========================================
// 3. GRADE CALCULATOR
// ========================================

const scoreInput = document.querySelector("#scoreInput");
const gradeButton = document.querySelector("#gradeButton");
const gradeResult = document.querySelector("#gradeResult");


gradeButton.addEventListener("click", function () {

    const score = Number(scoreInput.value);

    if (scoreInput.value === "") {
        gradeResult.textContent = "Please enter a score.";
        return;
    }

    if (score < 0 || score > 100) {
        gradeResult.textContent = "Score must be between 0 and 100.";
    } 
    else if (score >= 70) {
        gradeResult.textContent = "Grade: A";
    } 
    else if (score >= 60) {
        gradeResult.textContent = "Grade: B";
    } 
    else if (score >= 50) {
        gradeResult.textContent = "Grade: C";
    } 
    else if (score >= 45) {
        gradeResult.textContent = "Grade: D";
    } 
    else if (score >= 40) {
        gradeResult.textContent = "Grade: E";
    } 
    else {
        gradeResult.textContent = "Grade: F";
    }

});



const fizzInput = document.querySelector("#fizzInput");
const fizzButton = document.querySelector("#fizzButton");
const fizzResult = document.querySelector("#fizzResult");


fizzButton.addEventListener("click", function () {

    const number = Number(fizzInput.value);

    if (fizzInput.value === "") {
        fizzResult.textContent = "Please enter a number.";
        return;
    }

    if (number % 3 === 0 && number % 5 === 0) {
        fizzResult.textContent = "FizzBuzz";
    } 
    else if (number % 3 === 0) {
        fizzResult.textContent = "Fizz";
    } 
    else if (number % 5 === 0) {
        fizzResult.textContent = "Buzz";
    } 
    else {
        fizzResult.textContent = number;
    }

});


const patternInput = document.querySelector("#patternInput");
const patternButton = document.querySelector("#patternButton");
const patternResult = document.querySelector("#patternResult");


patternButton.addEventListener("click", function () {

    const rows = Number(patternInput.value);

    if (patternInput.value === "") {
        patternResult.textContent = "Please enter the number of rows.";
        return;
    }

    if (rows <= 0) {
        patternResult.textContent = "Enter a number greater than 0.";
        return;
    }

    let pattern = "";

    for (let i = 1; i <= rows; i++) {

        for (let j = 1; j <= i; j++) {
            pattern += "*";
        }

        pattern += "\n";
    }

    patternResult.textContent = pattern;

});