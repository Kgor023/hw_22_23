const input = document.querySelector("#text");
const deleate = document.querySelector("#deleate");
const seven = document.querySelector("#seven");
const eight = document.querySelector("#eight");
const nine = document.querySelector("#nine");
const multiply = document.querySelector("#multiply");
const four = document.querySelector("#four");
const five = document.querySelector("#five");
const six = document.querySelector("#six");
const divide = document.querySelector("#divide");
const one = document.querySelector("#one");
const two = document.querySelector("#two");
const three = document.querySelector("#three");
const sum = document.querySelector("#sum");
const point = document.querySelector("#point");
const zero = document.querySelector("#zero");
const history = document.querySelector("#history");
const historyBlock = document.querySelector(".history");
const diff = document.querySelector("#diff");
const cancel = document.querySelector("#cancel");
const result = document.querySelector("#result");
zero.addEventListener("click", () => {
  input.value += "0";
});
one.addEventListener("click", () => {
  input.value += "1";
});
two.addEventListener("click", () => {
  input.value += "2";
});
three.addEventListener("click", () => {
  input.value += "3";
});
four.addEventListener("click", () => {
  input.value += "4";
});
five.addEventListener("click", () => {
  input.value += "5";
});
six.addEventListener("click", () => {
  input.value += "6";
});
seven.addEventListener("click", () => {
  input.value += "7";
});
eight.addEventListener("click", () => {
  input.value += "8";
});
nine.addEventListener("click", () => {
  input.value += "9";
});
point.addEventListener("click", () => {
  input.value += ".";
});
sum.addEventListener("click", () => {
  input.value += "+";
});
divide.addEventListener("click", () => {
  input.value += "/";
});
diff.addEventListener("click", () => {
  input.value += "-";
});
multiply.addEventListener("click", () => {
  input.value += "*";
});
cancel.addEventListener("click", () => {
  input.value = "";
});
deleate.addEventListener("click", () => {
  input.value = input.value.slice(0, input.value.length - 1);
});
result.addEventListener("click", () => {
  historyBlock.innerHTML += `<h4>${input.value} = ${eval(input.value)}</h4>`;
  input.value = eval(input.value);
});
history.addEventListener("click", () => {
  if (historyBlock.style.display == "block") {
    historyBlock.style.display = "none";
  } else {
    historyBlock.style.display = "block";
  }
});
window.addEventListener("keydown", (event) => {
  switch (event.key) {
    case "1":
      input.value += "1";
      break;
    case "2":
      input.value += "2";
      break;
    case "3":
      input.value += "3";
      break;
    case "4":
      input.value += "4";
      break;
    case "5":
      input.value += "5";
      break;
    case "6":
      input.value += "6";
      break;
    case "7":
      input.value += "7";
      break;
    case "8":
      input.value += "8";
      break;
    case "9":
      input.value += "9";
      break;
    case "-":
      input.value += "-";
      break;
    case "+":
      input.value += "+";
      break;
    case "*":
      input.value += "*";
      break;
    case "/":
      input.value += "/";
      break;
    case "0":
      input.value += "0";
      break;
      case "Backspace":
        input.value = input.value.slice(0, input.value.length - 1);

        break;
    case "Enter":
      historyBlock.innerHTML += `<h4>${input.value} = ${eval(
        input.value
      )}</h4>`;

      input.value = eval(input.value);
      break;
  }
});
