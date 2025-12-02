function calculateSize() {
  const a = parseFloat(document.getElementById("a").value);
  const b = parseFloat(document.getElementById("b").value);

  // Get one input value for both subtract and multiply
  const factorVal = parseFloat(document.getElementById("factorVal").value) || 2;

  // New: quantity input
  const quantity = parseInt(document.getElementById("quantity").value);

  if (isNaN(a) || isNaN(b)) {
    document.getElementById("result").innerText = "Result: Please enter valid numbers!";
    return;
  }

  // Step 1: Add
  const s1 = a + b;

  // Step 2: Multiply by 2
  const s2 = s1 * 2;

  // Step 3: Divide by 3.14
  const s3 = s2 / 3.14;

  // Step 4a: subtract chosen value
  const s4a = s3 - factorVal;

  // Step 4b: multiply by the same chosen value
  const s4b = s4a * factorVal;

  // Step 5: apply default factors (fixed)
  const s5 = s4b * 0.0248;
  const singleResult = s5 * 6; // result for one pipe

  let outputText = `Result for 1 pipe: ${singleResult.toFixed(3)}`;

  // If quantity entered, calculate total
  if (!isNaN(quantity) && quantity > 0) {
    const totalResult = singleResult * quantity;
    outputText += ` | For ${quantity} pipes: ${totalResult.toFixed(3)}`;
  }

  document.getElementById("result").innerText = outputText;

  // Save to history
  const history = JSON.parse(localStorage.getItem("calcHistory")) || [];
  history.push(`Pipe → a:${a}, b:${b}, factor:${factorVal}, qty:${quantity || 1} → ${outputText}`);
  localStorage.setItem("calcHistory", JSON.stringify(history));
}
