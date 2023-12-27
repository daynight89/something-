function appendToDisplay(value) {
    document.getElementById('display').value += value
}

function calculate() {
  let first = document.getElementById('display').value;
  let result = eval(first)
    document.getElementById('display').value = result
}

function clearDisplay() {
    document.getElementById('display').value = " ";
}
