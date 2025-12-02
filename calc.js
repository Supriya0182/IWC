function calculate() {
  let length = parseFloat(document.getElementById("length").value);
  let width = parseFloat(document.getElementById("width").value);
  let thickness = parseFloat(document.getElementById("thickness").value);
  let quantity = parseInt(document.getElementById("quantity").value); // no default

  if (isNaN(length) || isNaN(width) || isNaN(thickness)) {
    document.getElementById("result").innerText = "Result: Please enter valid numbers!";
    return;
  }

  // Weight of one plate
  let singleWeight = length * width * thickness * 0.00000785;
  let singleFormatted = singleWeight.toFixed(3);

  let outputText = `1 plate: ${singleFormatted}`;

  // If user entered a quantity, calculate total
  if (!isNaN(quantity) && quantity > 0) {
    let totalWeight = singleWeight * quantity;
    let totalFormatted = totalWeight.toFixed(3);
    outputText += ` | For ${quantity} plates: ${totalFormatted}`;
  }

  document.getElementById("result").innerText = " weight:" + outputText;

  // ✅ Save to localStorage
  let history = JSON.parse(localStorage.getItem("calcHistory")) || [];
  history.push(`Plate → L:${length}, W:${width}, T:${thickness}, Qty:${quantity || 1} → ${outputText}`);
  localStorage.setItem("calcHistory", JSON.stringify(history));
}
