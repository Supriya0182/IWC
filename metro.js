function calculateMetro() {
  const x = parseFloat(document.getElementById("x").value);
  const quantity = parseInt(document.getElementById("quantity").value);

  if (isNaN(x)) {
    document.getElementById("result").innerText = "Result: Please enter a valid number!";
    return;
  }

  // Single sheet calculation
  const singleResult = x * 1.38
  const singleFormatted = singleResult.toFixed(2);

  let outputText = `Result for 1 sheet: ${singleFormatted}`;

  // If quantity entered, calculate total
  if (!isNaN(quantity) && quantity > 0) {
    const totalResult = singleResult * quantity;
    const totalFormatted = totalResult.toFixed(2);
    outputText += ` | For ${quantity} sheets: ${totalFormatted}`;
  }

  document.getElementById("result").innerText = outputText;

  // ✅ Save to localStorage for history
  const history = JSON.parse(localStorage.getItem("calcHistory")) || [];
  history.push(`Metro Sheet → X:${x}, Qty:${quantity || 1} → ${outputText}`);
  localStorage.setItem("calcHistory", JSON.stringify(history));
}
