for (let i = 1; i <= 5; i++) {
  console.log(i);
}

// this is used when you know how much iterations are to be done 
// requires , initialization, condition and an appropriate operation(increment , decrement , etc)

let j = 1;

while (j <= 5) {
  console.log(j);
  j++;
}

// this is useful when we don,t know how much iterations needed exactly 
// requires , initialization , condition and modification of iterator

let i = 6;

do {
  console.log(i);
  i++;
} while (i <= 5);

//it is not guaranteed if while loop will run atleast once 
// but it is guaranteed that do-while loop will run atleast once

// 1.break statement

for (let i = 1; i <= 5; i++) {
  if (i === 3) {
    break;
  }
  console.log(i);
}

// stops the loop immediately , used when you want stop the loop early


// 2.continue statement  
 
for (let i = 1; i <= 5; i++) {
  if (i === 3) {
    continue;
  }
  console.log(i);
}


// used to skip the current iteration or skip specific values


