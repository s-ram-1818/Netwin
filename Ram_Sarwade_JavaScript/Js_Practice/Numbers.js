// 1. Number Types

let primitiveNum = 123.456;           // Primitive number
let objectNum = new Number(123.456);  // Number object

console.log("primitiveNum:", primitiveNum, typeof primitiveNum); // "number"
console.log("objectNum:", objectNum, typeof objectNum);          // "object"


// 2. Number Methods

console.log("\n=== Number Methods ===");

// 2a️) toFixed(digits)
// Returns a string representing the number with fixed decimal places
console.log("primitiveNum.toFixed(2):", primitiveNum.toFixed(2)); // "123.46"
console.log("primitiveNum.toFixed(0):", primitiveNum.toFixed(0)); // "123"

// 2b️) toPrecision(precision)
// Returns a string representing the number with total significant digits
console.log("primitiveNum.toPrecision(4):", primitiveNum.toPrecision(4)); // "123.5"
console.log("primitiveNum.toPrecision(6):", primitiveNum.toPrecision(6)); // "123.456"

// 2c️) valueOf()
// Returns the primitive numeric value of a Number object
console.log("objectNum.valueOf():", objectNum.valueOf());   // 123.456
console.log("primitiveNum.valueOf():", primitiveNum.valueOf()); // 123.456

// 2d️) toExponential(fractionDigits)
// Returns a string in exponential notation with specified decimal places
let num = 123.456789;
console.log("num.toExponential(3):", num.toExponential(3)); // "1.235e+2"

// 2e️) Other useful Math methods (not part of Number prototype)
console.log("Math.round(num):", Math.round(num));   // rounds to nearest integer → 123
console.log("Math.floor(num):", Math.floor(num));   // rounds down → 123
console.log("Math.ceil(num):", Math.ceil(num));     // rounds up → 124


// 3. Number Properties

console.log("\n=== Number Properties ===");
console.log("Number.MAX_VALUE:", Number.MAX_VALUE);   // Largest representable number
console.log("Number.MIN_VALUE:", Number.MIN_VALUE);   // Smallest positive number
console.log("Number.NaN:", Number.NaN);               // Not a Number
console.log("Number.POSITIVE_INFINITY:", Number.POSITIVE_INFINITY); // Infinity
console.log("Number.NEGATIVE_INFINITY:", Number.NEGATIVE_INFINITY); // -Infinity

// 4. References and Equality

let a = new Number(500);
let b = new Number(500);
let c = 500;  // primitive number

console.log("\n=== Equality Checks ===");
console.log("a == b:", a == b);                         // false, different objects
console.log("a === b:", a === b);                       // false, different objects
console.log("a.valueOf() === b.valueOf():", a.valueOf() === b.valueOf()); // true
console.log("a == c:", a == c);                         // true, object coerces to primitive
console.log("a === c:", a === c);                       // false, different types


// 5. Summary Table of Methods

console.log("\n=== Summary of Number Methods ===");
console.log("toFixed(digits) → Returns string with fixed decimal places");
console.log("toPrecision(precision) → Returns string with total significant digits");
console.log("valueOf() → Returns primitive numeric value from Number object");
console.log("toExponential(fractionDigits) → Returns string in exponential notation");
console.log("Math.round/floor/ceil → Round numbers in different ways");


// 6️⃣ Summary Table of Properties

console.log("\n=== Summary of Number Properties ===");
console.log("Number.MAX_VALUE → Largest numeric value representable");
console.log("Number.MIN_VALUE → Smallest positive numeric value");
console.log("Number.NaN → Not a Number");
console.log("Number.POSITIVE_INFINITY → Infinity");
console.log("Number.NEGATIVE_INFINITY → -Infinity");