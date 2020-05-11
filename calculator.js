function multiply() {
  let number1 = document.getElementById("num1").value;
  let number2 = document.getElementById("num2").value;
  let answer = number1 * number2;
  document.getElementById("output").innerHTML = answer;
}
