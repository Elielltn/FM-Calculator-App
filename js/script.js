const btnSeven = document.getElementById("btn-seven");
const btnEight = document.getElementById("btn-eight");
const btnNine = document.getElementById("btn-nine");
const btnDel = document.getElementById("btn-del");
const btnFour = document.getElementById("btn-four");
const btnFive = document.getElementById("btn-five");
const btnSix = document.getElementById("btn-six");
const btnPlus = document.getElementById("btn-plus");
const btnOne = document.getElementById("btn-one");
const btnTwo = document.getElementById("btn-two");
const btnThree = document.getElementById("btn-three");
const btnMinus = document.getElementById("btn-minus");
const btnDot = document.getElementById("btn-dot");
const btnZero = document.getElementById("btn-zero");
const btnDiv = document.getElementById("btn-div");
const btnMult = document.getElementById("btn-mult");
const btnReset = document.getElementById("btn-reset");
const btnEqual = document.getElementById("btn-equal");

const screen = document.getElementById("screen");
var firstNum = [];
var secondNum = [];
var operation = [];

btnSeven.addEventListener("click", function () {
  if (
    btnMinus.classList.contains("operation-pressed") ||
    btnMult.classList.contains("operation-pressed") ||
    btnDiv.classList.contains("operation-pressed") ||
    btnPlus.classList.contains("operation-pressed")
  ) {
    btnMinus.classList.remove("operation-pressed");
    btnMult.classList.remove("operation-pressed");
    btnDiv.classList.remove("operation-pressed");
    btnPlus.classList.remove("operation-pressed");
    firstNum.push(screen.innerHTML);
    screen.innerHTML = 7;
  } else {
    screen.innerHTML = screen.innerHTML + 7;
  }
});

btnEight.addEventListener("click", function () {
  if (
    btnMinus.classList.contains("operation-pressed") ||
    btnMult.classList.contains("operation-pressed") ||
    btnDiv.classList.contains("operation-pressed") ||
    btnPlus.classList.contains("operation-pressed")
  ) {
    btnMinus.classList.remove("operation-pressed");
    btnMult.classList.remove("operation-pressed");
    btnDiv.classList.remove("operation-pressed");
    btnPlus.classList.remove("operation-pressed");
    firstNum.push(screen.innerHTML);
    screen.innerHTML = 8;
  } else {
    screen.innerHTML = screen.innerHTML + 8;
  }
});

btnNine.addEventListener("click", function () {
  if (
    btnMinus.classList.contains("operation-pressed") ||
    btnMult.classList.contains("operation-pressed") ||
    btnDiv.classList.contains("operation-pressed") ||
    btnPlus.classList.contains("operation-pressed")
  ) {
    btnMinus.classList.remove("operation-pressed");
    btnMult.classList.remove("operation-pressed");
    btnDiv.classList.remove("operation-pressed");
    btnPlus.classList.remove("operation-pressed");
    firstNum.push(screen.innerHTML);
    screen.innerHTML = 9;

    console.log(firstNum);
  } else {
    screen.innerHTML = screen.innerHTML + 9;
  }
});

btnDel.addEventListener("click", function () {
  screen.innerHTML = "";
});

btnFour.addEventListener("click", function () {
  if (
    btnMinus.classList.contains("operation-pressed") ||
    btnMult.classList.contains("operation-pressed") ||
    btnDiv.classList.contains("operation-pressed") ||
    btnPlus.classList.contains("operation-pressed")
  ) {
    btnMinus.classList.remove("operation-pressed");
    btnMult.classList.remove("operation-pressed");
    btnDiv.classList.remove("operation-pressed");
    btnPlus.classList.remove("operation-pressed");
    firstNum.push(screen.innerHTML);
    screen.innerHTML = 4;
  } else {
    screen.innerHTML = screen.innerHTML + 4;
  }
});

btnFive.addEventListener("click", function () {
  if (
    btnMinus.classList.contains("operation-pressed") ||
    btnMult.classList.contains("operation-pressed") ||
    btnDiv.classList.contains("operation-pressed") ||
    btnPlus.classList.contains("operation-pressed")
  ) {
    btnMinus.classList.remove("operation-pressed");
    btnMult.classList.remove("operation-pressed");
    btnDiv.classList.remove("operation-pressed");
    btnPlus.classList.remove("operation-pressed");
    firstNum.push(screen.innerHTML);
    screen.innerHTML = 5;
  } else {
    screen.innerHTML = screen.innerHTML + 5;
  }
});

btnSix.addEventListener("click", function () {
  if (
    btnMinus.classList.contains("operation-pressed") ||
    btnMult.classList.contains("operation-pressed") ||
    btnDiv.classList.contains("operation-pressed") ||
    btnPlus.classList.contains("operation-pressed")
  ) {
    btnMinus.classList.remove("operation-pressed");
    btnMult.classList.remove("operation-pressed");
    btnDiv.classList.remove("operation-pressed");
    btnPlus.classList.remove("operation-pressed");
    firstNum.push(screen.innerHTML);
    screen.innerHTML = 6;
  } else {
    screen.innerHTML = screen.innerHTML + 6;
  }
});

btnPlus.addEventListener("click", function () {
  if (
    btnMinus.classList.contains("operation-pressed") ||
    btnMult.classList.contains("operation-pressed") ||
    btnDiv.classList.contains("operation-pressed")
  ) {
    btnMinus.classList.remove("operation-pressed");
    btnMult.classList.remove("operation-pressed");
    btnDiv.classList.remove("operation-pressed");
    btnPlus.classList.add("operation-pressed");
    operation.push("+");
  } else {
    btnPlus.classList.add("operation-pressed");
    operation.push("+");
  }
});

btnOne.addEventListener("click", function () {
  if (
    btnMinus.classList.contains("operation-pressed") ||
    btnMult.classList.contains("operation-pressed") ||
    btnDiv.classList.contains("operation-pressed") ||
    btnPlus.classList.contains("operation-pressed")
  ) {
    btnMinus.classList.remove("operation-pressed");
    btnMult.classList.remove("operation-pressed");
    btnDiv.classList.remove("operation-pressed");
    btnPlus.classList.remove("operation-pressed");
    firstNum.push(screen.innerHTML);
    screen.innerHTML = 1;
  } else {
    screen.innerHTML = screen.innerHTML + 1;
  }
});

btnTwo.addEventListener("click", function () {
  if (
    btnMinus.classList.contains("operation-pressed") ||
    btnMult.classList.contains("operation-pressed") ||
    btnDiv.classList.contains("operation-pressed") ||
    btnPlus.classList.contains("operation-pressed")
  ) {
    btnMinus.classList.remove("operation-pressed");
    btnMult.classList.remove("operation-pressed");
    btnDiv.classList.remove("operation-pressed");
    btnPlus.classList.remove("operation-pressed");
    firstNum.push(screen.innerHTML);
    screen.innerHTML = 2;
  } else {
    screen.innerHTML = screen.innerHTML + 2;
  }
});

btnThree.addEventListener("click", function () {
  if (
    btnMinus.classList.contains("operation-pressed") ||
    btnMult.classList.contains("operation-pressed") ||
    btnDiv.classList.contains("operation-pressed") ||
    btnPlus.classList.contains("operation-pressed")
  ) {
    btnMinus.classList.remove("operation-pressed");
    btnMult.classList.remove("operation-pressed");
    btnDiv.classList.remove("operation-pressed");
    btnPlus.classList.remove("operation-pressed");
    firstNum.push(screen.innerHTML);
    screen.innerHTML = 3;
  } else {
    screen.innerHTML = screen.innerHTML + 3;
  }
});

btnMinus.addEventListener("click", function () {
  if (
    btnPlus.classList.contains("operation-pressed") ||
    btnMult.classList.contains("operation-pressed") ||
    btnDiv.classList.contains("operation-pressed")
  ) {
    btnPlus.classList.remove("operation-pressed");
    btnMult.classList.remove("operation-pressed");
    btnDiv.classList.remove("operation-pressed");
    btnMinus.classList.add("operation-pressed");
    operation.push("-");
  } else {
    btnMinus.classList.add("operation-pressed");
    operation.push("-");
  }
});

btnDot.addEventListener("click", function () {
  screen.innerHTML = screen.innerHTML + ".";
});

btnZero.addEventListener("click", function () {
  if (
    btnMinus.classList.contains("operation-pressed") ||
    btnMult.classList.contains("operation-pressed") ||
    btnDiv.classList.contains("operation-pressed") ||
    btnPlus.classList.contains("operation-pressed")
  ) {
    btnMinus.classList.remove("operation-pressed");
    btnMult.classList.remove("operation-pressed");
    btnDiv.classList.remove("operation-pressed");
    btnPlus.classList.remove("operation-pressed");
    firstNum.push(screen.innerHTML);
    screen.innerHTML = 0;
  } else {
    screen.innerHTML = screen.innerHTML + 0;
  }
});

btnDiv.addEventListener("click", function () {
  if (
    btnPlus.classList.contains("operation-pressed") ||
    btnMult.classList.contains("operation-pressed") ||
    btnMinus.classList.contains("operation-pressed")
  ) {
    btnPlus.classList.remove("operation-pressed");
    btnMult.classList.remove("operation-pressed");
    btnMinus.classList.remove("operation-pressed");
    btnDiv.classList.add("operation-pressed");
    operation.push("/");
  } else {
    btnDiv.classList.add("operation-pressed");
    operation.push("/");
  }
});

btnMult.addEventListener("click", function () {
  if (
    btnPlus.classList.contains("operation-pressed") ||
    btnDiv.classList.contains("operation-pressed") ||
    btnMinus.classList.contains("operation-pressed")
  ) {
    btnPlus.classList.remove("operation-pressed");
    btnDiv.classList.remove("operation-pressed");
    btnMinus.classList.remove("operation-pressed");
    btnMult.classList.add("operation-pressed");
    operation.push("*");
  } else {
    btnMult.classList.add("operation-pressed");
    operation.push("*");
  }
});

btnReset.addEventListener("click", function () {
  screen.innerHTML = "";
  firstNum = [];
  secondNum = [];
  operation = [];
});

btnEqual.addEventListener("click", function () {
  secondNum.push(screen.innerHTML);
  if (operation[0] === "+") {
    screen.innerHTML =
      parseFloat(firstNum.join()) + parseFloat(secondNum.join());
    firstNum = [];
    secondNum = [];
    operation = [];
    firstNum.push(screen.innerHTML);
  } else if (operation[0] === "-") {
    screen.innerHTML =
      parseFloat(firstNum.join()) - parseFloat(secondNum.join());
    firstNum = [];
    secondNum = [];
    operation = [];
    firstNum.push(screen.innerHTML);
  } else if (operation[0] === "*") {
    screen.innerHTML =
      parseFloat(firstNum.join()) * parseFloat(secondNum.join());
    firstNum = [];
    secondNum = [];
    operation = [];
    firstNum.push(screen.innerHTML);
  } else if (operation[0] === "/") {
    screen.innerHTML =
      parseFloat(firstNum.join()) / parseFloat(secondNum.join());
    firstNum = [];
    secondNum = [];
    operation = [];
    firstNum.push(screen.innerHTML);
  }
});
