let age = 20;

if (age >= 18) {
  console.log("You are an adult");
}

// if condition is true , code inside if block executes

let age1= 16;

if (age >= 18) {
  console.log("Adult");
} else {
  console.log("Minor");
}

// if condition is true , code inside if block is executed else code inside else block executes

let marks = 85;

if (marks >= 90) {
  console.log("Grade A");
} else if (marks >= 75) {
  console.log("Grade B");
} else if (marks >= 60) {
  console.log("Grade C");
} else {
  console.log("Fail");
}

// similar to if-else , every condition is checked until true condition is not found

let day = 3;

switch (day) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  default:
    console.log("Invalid day");
}

// similar to switch , checks "day" with every available case , also 
// has a default case . break is required else every condition exeutes


let age2 = 22;

let result = (age >= 18) ? "Adult" : "Minor";
console.log(result);

//if condition is true 1st  code before colon executes else second i.e after colon
