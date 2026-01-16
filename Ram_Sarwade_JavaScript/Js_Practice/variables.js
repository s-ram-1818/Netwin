// in js , variables can be declared using let , var or const  

// var is not used widely , mostly it is used in old js code but now only let and const are used.

// use let and const whenever it is available , it helps in writing less buggy or bugs-free code.


//var → can redeclare, function-scoped, hoisted → old-style, risky

// let → cannot redeclare, block-scoped → modern, safe

// Best practice → always use let (or const) instead of var.

// const - use const when we know some variable will not change in future

let x = 10 ;

console.log(x);

let x = 5 ; // throws error 

// block scope - Variables with block scope are only accessible 
// within the block where they are defined, and not outside of it. this is true for let and const 
// and not true for var 



