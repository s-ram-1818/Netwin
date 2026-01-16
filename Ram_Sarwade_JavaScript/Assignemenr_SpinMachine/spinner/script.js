let attemptCount = 0;

function getRandomNumber() {
  return Math.floor(Math.random() * 3);
}

function startGame() {
  attemptCount++;

  const n1 = getRandomNumber();
  const n2 = getRandomNumber();
  const n3 = getRandomNumber();

  document.getElementById("rs-slot1").textContent = n1;
  document.getElementById("rs-slot2").textContent = n2;
  document.getElementById("rs-slot3").textContent = n3;

  if (n1 === n2 && n2 === n3) {
    document.getElementById("result").innerHTML =
      " JACKPOT <br> you win in " + attemptCount + " attempts";
    attemptCount = 0;
  } else {
    document.getElementById("result").textContent = "";
  }
  document.getElementById("attempts").textContent = attemptCount;
}
