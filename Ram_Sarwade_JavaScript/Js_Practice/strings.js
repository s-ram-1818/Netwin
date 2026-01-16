let text = "John Doe";

// strings are used to store text , they are declared with double quotes
// Javascript strings are primitive and immutable: All string methods produce a new string without altering the original string.


// Javascript string templates 
// js string templates allow single and double quotes in a string 

let str1 = `he's called johnny` ;

// it also allows multiline strings

 let text1 =
`The quick
brown fox
jumps over
the lazy dog`;

//Template Strings allow variables in strings.

// Template strings provide an easy way to interpolate variables in strings.

// syntax : ${}

let firstName = "John";
let lastName = "Doe";

let greetmsg  = `Welcome ${firstName}, ${lastName}!`;

// Javascript String methods

let str = "  Hello, World!  "; 


// 1. Length of string

console.log(str.length); // will output 17

// 2. To Access characters

console.log(str[0]);     // output : " "
console.log(str.charAt(2)); // output : 2

// 3. Convert case
console.log(str.toUpperCase()); // "  HELLO, WORLD!  "
console.log(str.toLowerCase()); // "  hello, world!  "

// 4. Trim spaces
console.log(str.trim()); // output : "Hello, World!"

// 5. Substrings
console.log(str.substr(2, 5)); // "Hello"
console.log(str.slice(2, 7));  // "Hello"
console.log(str.slice(-6));    // "World!"

// 6. Replace
console.log(str.replace("World", "JavaScript")); // "  Hello, JavaScript!  "

// 7. Includes, startsWith, endsWith
console.log(str.includes("World"));    // true
console.log(str.startsWith("Hello"));  // false (because of leading spaces)
console.log(str.trim().startsWith("Hello")); // true
console.log(str.endsWith("!  "));      // true

// 8. Split string into array
let fruits = "Apple, Banana, Kiwi";
console.log(fruits.split(", ")); // ["Apple", "Banana", "Kiwi"]

// 9. Concatenate strings
let greet = "Hello";
let named = "Alice";
console.log(greet + " " + named); // "Hello Alice"
console.log(`${greet} ${named}`); // "Hello Alice" using template literal

// 10. Repeat string
console.log("Ha! ".repeat(3)); // "Ha! Ha! Ha! "

// 11. Find index
console.log(str.indexOf("World")); // 9
console.log(str.lastIndexOf("l")); // 10

// 12. Character codes
console.log(str.charCodeAt(2)); // 72  (ASCII code for 'H')



// 14.  Convert string to array of characters
console.log(Array.from(str)); // [" ", " ", "H", "e", "l", "l", "o", ...]

