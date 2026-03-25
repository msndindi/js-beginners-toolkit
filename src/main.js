// Define the function
function welcomeUser() {
  console.log("Welcome!");
}

// Invoke (call) the function — it does nothing until called
welcomeUser();


// Parameters with defaults
function greet(name = "Guest", greeting = "Hi") {
  console.log(`${greeting}, ${name}!`);
}

greet();               // Hi, Guest!
greet("Sofia", "Hey"); // Hey, Sofia!


// Prompt + conditional logic
function sayFact() {
  let name = prompt("What's your name?");
  if (name === "Sofia") {
    alert("Your name comes from the Greek → Sophia");
  }
}

sayFact();

// Practical challenge: wind speed checker
function isWindy(speed) {
  if (speed >= 5) {
    alert("It is windy!");
  } else {
    alert("It is not windy!");
  }
}

let speedWind = prompt("What is the wind's speed?");
isWindy(speedWind);

//Return Statements
function add(a, b) {
  return a + b;
  console.log("This line will never be executed"); // unreachable
}

const result = add(5, 3);
console.log(result); // 8


//Dates
// Creating Date objects
new Date()                          // Current date and time
new Date(milliseconds)              // Date from epoch milliseconds
new Date("2024-07-04")              // Date from ISO 8601 string (most reliable format)
new Date(2024, 6, 4, 10, 30, 0)    // Year, monthIndex (0=Jan), day, hours, min, sec

//Key Set Methods
date.setFullYear(2025)
date.setMonth(11)        // Sets to December
date.setDate(32)         // Overflows — moves to next month's 1st day
date.setHours(9)
date.setTime(0)          // Resets to epoch (Jan 1, 1970)

  
//DOM Selectors

// querySelector — returns the FIRST matching element
let li = document.querySelector("li");
let day = document.querySelector(".day");         // class selector
let item = document.querySelector("ul#list p");  // nested selector
let special = document.querySelector("#special"); // id selector (preferred)

// querySelectorAll — returns ALL matching elements as a NodeList
let lis = document.querySelectorAll("li");
let paragraphs = document.querySelectorAll("li#special p");