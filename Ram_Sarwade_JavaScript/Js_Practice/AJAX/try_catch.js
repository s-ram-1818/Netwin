function checkAge(age) {
  if (age < 18) {
    throw new Error("Age must be 18 or above");
  }
  return "Access granted";
}

try {
  console.log(checkAge(20));
  return
} catch (err) {
  console.log("Caught:", err.message);
  return;
}

// console.log("Validation completed");
finally {
  console.log("Validation completed");
}


// we write finally beacuse when we use return in try or catch block then normal log not printed but if we
// use finally then finally block run after try or catch