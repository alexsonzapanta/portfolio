let display = document.getElementById("display");

function appendValue(v) {
  if (display.textContent === "0") display.textContent = "";
  display.textContent += v;
}

function clearDisplay() {
  display.textContent = "0";
}

function deleteLast() {
  display.textContent = display.textContent.slice(0, -1) || "0";
}

function calculate() {
  try {
    display.textContent = eval(display.textContent);
  } catch {
    display.textContent = "Error";
  }
}
