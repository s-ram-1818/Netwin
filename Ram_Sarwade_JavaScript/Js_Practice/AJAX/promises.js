
// BASIC PROMISE EXAMPLE

// A Promise represents a value that will be available
// now, later, or never.

console.log(" BASIC PROMISE ");

let prom1 = new Promise((resolve, reject) => {
    let a = Math.random();

    if (a > 0.5) {
        // Reject immediately
        reject("number not supported");
    } else {
        // Resolve after 1 second
        setTimeout(() => {
            console.log("i am done");
            resolve("ram");
        }, 1000);
    }
});

prom1
    .then(res => console.log("Resolved:", res))
    .catch(err => console.log("Rejected:", err));

// UTILITY PROMISE FUNCTIONS

function checkEven(num) {
    return new Promise((resolve, reject) => {
        if (num & 1) {
            reject("odd number");
        } else {
            resolve("even number");
        }
    });
}

function checkMultipleOfFive(num) {
    return new Promise((resolve, reject) => {
        if (num % 5 === 0) {
            resolve("Multiple of five");
        } else {
            reject("Not a multiple of five");
        }
    });
}


// Promise.all()
// - Resolves when ALL promises resolve
// - Rejects immediately if ANY promise rejects


console.log("\nPromise.all");

let num = 30;

Promise.all([
    checkEven(num),
    checkMultipleOfFive(num)
])
.then(result => {
    // Result is an array of resolved values
    console.log("Promise.all resolved:", result);
})
.catch(error => {
    // First rejection reason
    console.log("Promise.all rejected:", error);
});


// Promise.allSettled()
// - Waits for ALL promises
// - NEVER rejects
// - Returns status of each promise


console.log("\n Promise.allSettled ");

Promise.allSettled([
    checkEven(num),
    checkMultipleOfFive(num)
])
.then(result => {
    console.log("Promise.allSettled result:", result);
});


// Promise.race()
// - First promise to SETTLE (resolve/reject) wins


console.log("\n Promise.race ");

const race1 = new Promise(res =>
    setTimeout(() => res("Fast promise"), 500)
);

const race2 = new Promise(res =>
    setTimeout(() => res("Slow promise"), 2000)
);

Promise.race([race1, race2])
.then(result => console.log("Promise.race resolved:", result))
.catch(error => console.log("Promise.race rejected:", error));


// Promise.any()
// - Resolves with FIRST SUCCESSFUL promise
// - Rejects ONLY if ALL promises reject


console.log("\nPromise.any ");

Promise.any([
    Promise.reject("Error A"),
    Promise.reject("Error B"),
    Promise.resolve("Success C")
])
.then(result => console.log("Promise.any resolved:", result))
.catch(error => {
    // AggregateError contains all rejection reasons
    console.log("Promise.any rejected:", error.errors);
});


// Promise.reject()
// - Creates an already rejected promise


console.log("\nPromise.reject");

Promise.reject("Immediate failure")
.catch(error => console.log("Promise.reject:", error));


// IMPORTANT EVENT LOOP NOTE

// - Promise .then/.catch callbacks run in MICROTASK queue
// - They always execute AFTER synchronous code


console.log("\n Event Loop Proof ");

console.log("Start");

Promise.resolve("Promise result")
.then(res => console.log(res));

console.log("End");


// Output order:
// Start
// End
// Promise result




// Promise.all        -> Rejects if any promise fails
// Promise.allSettled -> Always resolves with status
// Promise.race       -> First settled promise wins
// Promise.any        -> First successful promise wins
// Promise.reject     -> Immediately rejected promise


// */
