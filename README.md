# JavaScript Beginner's Toolkit: DOM, Events & Forms

---

## 1. Title & Objective

**Title:**
**Prompt-Powered Kickstart: A Beginner's Toolkit for JavaScript DOM & Interactivity**

**Objective:**
This toolkit documents a learning journey through JavaScript for frontend development. It showcases a learning progression, starting with core function concepts and evolving into interactive web pages that respond to user input.

The goal is to provide a clear and replicable guide for a beginner to:
- Write and invoke JavaScript functions with parameters and return values.
- Work with dates using the built-in `Date` object.
- Select and manipulate HTML elements using DOM selectors.
- Respond to user actions using event listeners.
- Handle form submissions and read input values.
- Leverage generative AI to accelerate learning, scaffold code, and troubleshoot problems.

**Why JavaScript?**

- **JavaScript** is the only language that runs natively in the browser, making it essential for building interactive, dynamic web pages. It is beginner-accessible yet powerful enough to build full-stack applications.

**End Goal:**
The project results in two minimal viable products (MVPs):
1. A **JavaScript functions demo** (`js_toolkit_functions/`) that demonstrates functions, parameters, return values, and date handling.
2. A **DOM & Events demo** (`js_toolkit_dom/`) that renders an interactive HTML page where events, form submissions, and DOM manipulation work together.

---

## 2. Quick Summary of the Technology

**What is JavaScript?**

- **JavaScript** is a lightweight, interpreted programming language designed for web browsers. It enables developers to make pages interactive — responding to clicks, reading form input, updating content, and communicating with servers — without a page reload.

**What is the DOM?**

- The **Document Object Model (DOM)** is a programming interface that represents an HTML page as a tree of objects. JavaScript can use this interface to read, add, remove, or modify any element on the page in real time.

**Where are they used?**

- **JavaScript** is used in browsers, servers (Node.js), mobile apps (React Native), and desktop apps (Electron).
- **DOM manipulation** powers every interactive website — from dropdown menus and modal dialogs to live search results and form validation.

**Real-world example:**

- When you type in a Google search box and suggestions appear instantly, that is JavaScript reading your keystrokes, calling a server, and updating the DOM with results — all without a page reload.

---

## 3. System Requirements

**Operating System:**
- Windows, macOS, or Linux

**Tools & Editors:**
- A modern web browser (Chrome, Firefox, Edge, or Safari)
- **VS Code** is the recommended editor
- The browser's built-in **DevTools Console** (`F12` or `Ctrl+Shift+I`) — your primary debugging tool
- No additional installation is required to run browser JavaScript

---

## 4. Core Concepts & Syntax Guide

This section covers the building blocks of JavaScript as used in the MVP projects.

---

### Functions

A function is a reusable block of code that performs a specific task. Function names should always start with a **verb** written in **camelCase**.

```javascript
// Define the function
function welcomeUser() {
  console.log("Welcome!");
}

// Invoke (call) the function — it does nothing until called
welcomeUser();
```

> ⚠️ **A function does not execute unless it is called.**

---

### Parameters & Arguments

- **Parameters** are placeholder variable names defined in the function signature.
- **Arguments** are the actual values passed when the function is called.
- JavaScript does **not** enforce the number of arguments. Missing ones become `undefined`; extra ones are ignored.
- Use **default parameters** to provide fallback values.

```javascript
// Parameters with defaults
function greet(name = "Guest", greeting = "Hi") {
  console.log(`${greeting}, ${name}!`);
}

greet();               // Hi, Guest!
greet("Sofia", "Hey"); // Hey, Sofia!
```

```javascript
// Prompt + conditional logic
function sayFact() {
  let name = prompt("What's your name?");
  if (name === "Sofia") {
    alert("Your name comes from the Greek → Sophia");
  }
}

sayFact();
```

```javascript
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
```

> 💡 Variables created **inside** a function and **outside** a function live in different scopes and cannot collide.

---

### Return Statements

- `return` stops a function's execution and sends a value back to the caller.
- Any code written **after** a `return` statement in the same function will never run.
- `return` can only be used **inside** a function.

```javascript
function add(a, b) {
  return a + b;
  console.log("This line will never be executed"); // unreachable
}

const result = add(5, 3);
console.log(result); // 8
```

---

### Dates

JavaScript uses the built-in `Date` object to represent a single moment in time — measured as milliseconds since **January 1, 1970, UTC** (the epoch).

#### Creating Date Objects

```javascript
new Date()                          // Current date and time
new Date(milliseconds)              // Date from epoch milliseconds
new Date("2024-07-04")              // Date from ISO 8601 string (most reliable format)
new Date(2024, 6, 4, 10, 30, 0)    // Year, monthIndex (0=Jan), day, hours, min, sec
```

#### Key Get Methods

| Method | Returns |
|---|---|
| `getFullYear()` | Year (4 digits) |
| `getMonth()` | Month index (0–11; 0 = January) |
| `getDate()` | Day of month (1–31) |
| `getDay()` | Day of week (0 = Sunday, 6 = Saturday) |
| `getHours()` | Hour (0–23) |
| `getTime()` | Milliseconds since Jan 1, 1970 UTC |
| `toISOString()` | ISO 8601 string in UTC format |

#### Key Set Methods

Set methods **mutate** the original Date object in place.

```javascript
date.setFullYear(2025)
date.setMonth(11)        // Sets to December
date.setDate(32)         // Overflows — moves to next month's 1st day
date.setHours(9)
date.setTime(0)          // Resets to epoch (Jan 1, 1970)
```

---

### DOM Selectors

Use `querySelector` and `querySelectorAll` to find elements on the page.

```javascript
// querySelector — returns the FIRST matching element
let li = document.querySelector("li");
let day = document.querySelector(".day");         // class selector
let item = document.querySelector("ul#list p");  // nested selector
let special = document.querySelector("#special"); // id selector (preferred)
```

```javascript
// querySelectorAll — returns ALL matching elements as a NodeList
let lis = document.querySelectorAll("li");
let paragraphs = document.querySelectorAll("li#special p");
```

> ✅ **Best practice:** Use IDs (`#id`) with `querySelector` and make sure the ID in your JavaScript matches the ID in your HTML exactly. Selectors must be in **double quotes**.

#### Manipulating Classes and Content

```javascript
let li = document.querySelector("li#special");

// Add or remove CSS classes
li.classList.add("highlighted");
li.classList.remove("highlighted");

// Replace the inner HTML
li.innerHTML = "Kenya";
```

#### Challenge Examples

```javascript
// Log the element with id="special"
let specialCountry = document.querySelector("#special");
console.log(specialCountry);

// Log all elements with class="country"
let countries = document.querySelectorAll(".country");
console.log(countries);

// Add class "special" to the #special element
specialCountry.classList.add("special");

// Replace its content
specialCountry.innerHTML = "Kenya";
```

---

### Events

JavaScript events are actions the browser can detect and respond to — such as a user clicking a button, pressing a key, or the page finishing loading.

#### Adding Event Listeners

The modern, recommended approach is `addEventListener()`.

```javascript
// Syntax
element.addEventListener(eventType, callbackFunction);
```

```javascript
// Example: alert "hi" when the #city element is clicked
function sayHi() {
  alert("hi");
}

let element = document.querySelector("#city");
element.addEventListener("click", sayHi);
```

#### Common Event Types

| Event | Trigger |
|---|---|
| `click` | Mouse button pressed and released |
| `mouseenter` | Mouse cursor enters element |
| `mouseleave` | Mouse cursor leaves element |
| `mousedown` | Mouse button pressed |
| `mouseup` | Mouse button released |
| `mousemove` | Mouse moves over element |
| `keydown` | Keyboard key pressed |
| `keyup` | Keyboard key released |

#### Key Concepts

- **Event Object:** Every listener receives an event object with details like `event.type` and `event.target`.
- **event.preventDefault():** Stops the browser's default behavior (e.g., prevents a form from navigating away on submit).
- **event.stopPropagation():** Stops the event from bubbling up the DOM tree.
- **Event Delegation:** Attach one listener to a parent instead of many listeners to its children — useful for dynamic content.

#### Event Propagation Phases

1. **Capturing Phase** — event travels from `window` down to the target
2. **Targeting Phase** — event reaches the element that triggered it
3. **Bubbling Phase** — event travels back up to `window` (default)

#### Challenge Example

```javascript
// Challenge 1 & 2: Show temperature in the button label on click
function showTemperature(event) {
  let button = document.querySelector("#show-button");
  button.innerHTML = "18 degrees";
}

let button = document.querySelector("#show-button");
button.addEventListener("click", showTemperature);
```

---

### Forms

Forms are handled by listening for the `submit` event on the `<form>` element. Always call `event.preventDefault()` to stop the page from reloading.

```html
<form>
  <input type="text" id="email" />
</form>
```

```javascript
function signUp(event) {
  event.preventDefault();           // Stop the page from reloading
  let input = document.querySelector("#email");
  console.log(input.value);         // Read what the user typed
}

let form = document.querySelector("form");
form.addEventListener("submit", signUp);
```

> ⚠️ **Only forms use `submit` as the event type.** All other interactive elements (buttons, divs, etc.) use `click`.

> 🔒 Be aware that `console.log(input.value)` in a browser makes values visible in DevTools — never log sensitive data like passwords in production.

#### Form Challenge Examples

```javascript
// Challenge 1: Alert on button click
function applause() {
  alert("Hooray!");
}
document.querySelector("#special-button").addEventListener("click", applause);

// Challenge 2: Alert the submitted password
function signUp(event) {
  event.preventDefault();
  let password = document.querySelector("#password-input");
  alert(`Your secret password is ${password.value}`);
}
document.querySelector("#password-form").addEventListener("submit", signUp);

// Challenge 3: Alert both email and username on form submit
function addForm(event) {
  event.preventDefault();
  let email = document.querySelector("#email-input");
  let username = document.querySelector("#username-input");
  alert(`Your email is ${email.value}`);
  alert(`Your username is ${username.value}`);
}
document.querySelector("#signup-form").addEventListener("submit", addForm);
```

---

## 5. Minimal Working Examples (MVPs)

### Project Structure

```
js-project/
│
├── js_toolkit_functions/
│   └── index.html        ← Functions, parameters, return, dates
│
└── js_toolkit_dom/
    └── index.html        ← Selectors, events, forms
```

---

### Part 1: Functions & Dates MVP (`js_toolkit_functions/index.html`)

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>JS Functions MVP</title>
</head>
<body>
  <h1>JS Functions & Dates MVP</h1>
  <p>Open the DevTools Console (F12) to see output.</p>

  <script>
    // --- Functions & Parameters ---
    function greet(name = "Guest", greeting = "Hi") {
      console.log(`${greeting}, ${name}!`);
    }
    greet();
    greet("Sofia", "Hello");

    // --- Return Statements ---
    function add(a, b) {
      return a + b;
    }
    const result = add(5, 3);
    console.log("5 + 3 =", result);

    // --- Dates ---
    const now = new Date();
    console.log("Current year:", now.getFullYear());
    console.log("Current month (0-indexed):", now.getMonth());
    console.log("Day of week (0=Sun):", now.getDay());
    console.log("ISO string:", now.toISOString());
  </script>
</body>
</html>
```

**Expected Console Output:**
```
Hi, Guest!
Hello, Sofia!
5 + 3 = 8
Current year: 2025
Current month (0-indexed): 6
Day of week (0=Sun): 4
ISO string: 2025-07-10T...
```

---

### Part 2: DOM, Events & Forms MVP (`js_toolkit_dom/index.html`)

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>JS DOM MVP</title>
  <style>
    body { font-family: Arial, sans-serif; margin: 2rem; }
    .highlighted { background-color: yellow; }
    button { padding: 0.5rem 1rem; font-size: 1rem; cursor: pointer; }
  </style>
</head>
<body>
  <ul id="list">
    <li id="special" class="country">Portugal</li>
    <li class="country">Brazil</li>
    <li class="country">Japan</li>
  </ul>

  <button id="show-button">Show Temperature</button>
  <p id="msg"></p>

  <form id="signup-form">
    <input type="text" id="username-input" placeholder="Username" />
    <input type="email" id="email-input" placeholder="Email" />
    <button type="submit">Sign Up</button>
  </form>

  <script>
    // --- DOM Selectors ---
    let specialCountry = document.querySelector("#special");
    specialCountry.classList.add("highlighted");
    specialCountry.innerHTML = "Kenya";

    let countries = document.querySelectorAll(".country");
    console.log("All country elements:", countries);

    // --- Events ---
    function showTemperature() {
      let button = document.querySelector("#show-button");
      button.innerHTML = "18 degrees";
      document.querySelector("#msg").innerHTML = "It is 18°C outside!";
    }

    document.querySelector("#show-button").addEventListener("click", showTemperature);

    // --- Form ---
    function addForm(event) {
      event.preventDefault();
      let email = document.querySelector("#email-input");
      let username = document.querySelector("#username-input");
      alert(`Welcome ${username.value}! Confirmation sent to ${email.value}`);
    }

    document.querySelector("#signup-form").addEventListener("submit", addForm);
  </script>
</body>
</html>
```

**Expected Behavior:**
- The first `<li>` text changes from "Portugal" to "Kenya" and turns yellow on load.
- Clicking **"Show Temperature"** replaces the button label with "18 degrees" and shows a message.
- Submitting the form alerts a welcome message using both input values without reloading the page.

---

## 6. AI Agents Utilised

- **Claude**
- **Phind**
- **ChatGPT**
- **Gemini CLI**

---

## 7. AI Prompt Journal (A Structured Learning Journey)

This journal documents the step-by-step learning process using a series of structured AI prompts. It shows how to build knowledge from foundational concepts to working interactive pages.

### Phase 1: Conceptual Understanding

**Prompt 1: Functions & Scope**
> "I am learning JavaScript for the first time. Explain how functions work — including how to define them, name them well, use parameters with defaults, and return values. Use clear analogies and give me 3 progressive code examples. Also explain what 'scope' means and why a variable inside a function can't be accessed outside it."

- **AI Helpfulness:** This prompt builds the foundational mental model for functions before writing any code. Asking for progressive examples avoids overwhelm, and requesting an analogy makes the abstract concept of scope concrete for a beginner.

**Prompt 2: Dates**
> "Explain JavaScript's built-in `Date` object to a complete beginner. Cover: how to create a Date, the most common get methods, and how set methods work (including what 'mutate' means). Show a practical example that logs a formatted date string to the console."

- **AI Helpfulness:** Dates are a common source of confusion due to zero-indexed months and UTC vs local time. This prompt asks for the practical subset beginners actually need rather than the entire Date API, which keeps the response focused.

### Phase 2: DOM & Selectors

**Prompt 3: Selecting Elements**
> "I'm learning how to connect JavaScript to HTML. Explain `querySelector` and `querySelectorAll` step by step. What is the difference between them? How do I use CSS selector syntax — IDs, classes, nested elements — inside JavaScript? Give me 4 small challenges with solutions: log a single element by ID, log all elements by class, add a class, and replace innerHTML."

- **AI Helpfulness:** By asking for small, isolated challenges with solutions, this prompt produces directly runnable code that reinforces each selector method individually before combining them.

**Prompt 4: Real-World Troubleshooting — Selector Not Working**
> "I'm trying to select an element with `document.querySelector('special')` but I'm getting `null`. My HTML has `<li id="special">`. Why is my selector wrong and what is the correct syntax?"

- **AI Helpfulness:** This simulates a common beginner error — forgetting the `#` prefix for ID selectors. A good AI response explains not just the fix but *why* the syntax follows the same rules as CSS selectors, reinforcing the connection between CSS and JavaScript.

### Phase 3: Events & Forms

**Prompt 5: Understanding Events**
> "I'm a JavaScript beginner who just learned selectors. Now explain events. Cover: what an event is, how `addEventListener` works, the difference between the event type string and the callback function, and what the event object is. Give me an example for `click`, `mouseenter`, and `keydown`. Also briefly explain event bubbling — why does a click on a child also trigger listeners on its parent?"

- **AI Helpfulness:** This prompt builds on the previous step (selectors must come first to attach listeners) and asks for event bubbling in one prompt, which is often the source of unexpected bugs for beginners.

**Prompt 6: Forms**
> "Explain how JavaScript handles HTML form submissions. Why do I need `event.preventDefault()`? How do I read a value from a text input using `.value`? Give me a complete example — HTML form + JS listener — where submitting the form shows an alert with the user's email. Then give me a second example with two fields: username and email."

- **AI Helpfulness:** This prompt pairs the HTML and JavaScript together, which makes the relationship between `id` attributes in HTML and `querySelector` in JavaScript explicit. Asking for two examples (one field, then two) builds complexity gradually.

**Prompt 7: Debugging Common Form Issues**
> "My form submit listener is working, but the page refreshes every time I submit. I have `event.preventDefault()` in my code. What else could cause the page to reload? Walk me through a checklist of things to verify."

- **AI Helpfulness:** This models a real debugging scenario. Common causes include the listener being attached to the button (`click`) instead of the form (`submit`), or the function not actually receiving the event object. The AI's checklist format makes it easy to step through each possible cause.

---

## 8. Common Issues & Fixes

| Issue | Cause | Fix |
|---|---|---|
| `querySelector` returns `null` | Selector syntax is wrong (e.g., missing `#` for IDs or `.` for classes), or the script runs before the HTML is loaded | Add `#` before IDs and `.` before class names. Move `<script>` tag to the bottom of `<body>`, or wrap code in `DOMContentLoaded`. |
| Page reloads on form submit | `event.preventDefault()` is missing, or the listener is on the button (`click`) instead of the form (`submit`) | Always call `event.preventDefault()` as the first line of your submit handler, and attach the listener to the `form` element with the `"submit"` event type. |
| Function runs immediately on page load instead of on click | Parentheses were added to the function name when registering the listener: `addEventListener("click", sayHi())` — this calls the function immediately | Pass the function reference without parentheses: `addEventListener("click", sayHi)` |
| `input.value` returns an empty string | `querySelector` selector doesn't match the input's ID exactly, or the element doesn't exist at the time the script runs | Open DevTools (`F12`), log the element itself (`console.log(input)`) before `.value` to confirm the element was found. Check for typos. |
| Variable used before it's defined | `var` hoisting causes `undefined`; `let`/`const` throw a `ReferenceError` | Always declare variables with `let` or `const` before using them. Avoid `var`. |

---

## 9. References

- **MDN Web Docs — JavaScript:** The most comprehensive and reliable reference for all JavaScript features. https://developer.mozilla.org/en-US/docs/Web/JavaScript
- **MDN — Document.querySelector:** https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector
- **MDN — EventTarget.addEventListener:** https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener
- **MDN — Date:** Full reference for the built-in Date object. https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date
- **javascript.info:** A beginner-friendly, in-depth guide to modern JavaScript. https://javascript.info