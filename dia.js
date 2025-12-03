function calculateDia() {
  const dia = parseFloat(document.getElementById("dia").value);
  const userVal = parseFloat(document.getElementById("userVal").value); // one input used twice
  let quantity = parseInt(document.getElementById("quantity").value);

  if (isNaN(dia) || isNaN(userVal)) {
    document.getElementById("result").innerText = "Result: Please enter valid numbers!";
    return;
  }

  // Default quantity to 1 if empty
  if (isNaN(quantity) || quantity <= 0) quantity = 1;

  // Step-by-step using userVal for both subtraction and multiplication
  let step1 = dia - userVal;       // subtract user input
  let step2 = step1 * userVal;     // multiply by same user input
  let step3 = step2 * 0.0248;      // multiply by 0.0248
  let singleResult = step3 * 6;    // multiply by 6

  // Apply quantity
  let totalResult = singleResult * quantity;

  // Format outputs
  const singleFormatted = singleResult.toFixed(3);
  const totalFormatted = totalResult.toFixed(3);

  document.getElementById("result").innerText =
    `1 dia: ${singleFormatted} | For ${quantity} dias: ${totalFormatted}`;

  // ✅ Save to history
  const history = JSON.parse(localStorage.getItem("calcHistory")) || [];
  history.push(`Dia → input:${dia}, userVal:${userVal}, qty:${quantity} → single:${singleFormatted}, total:${totalFormatted}`);
  localStorage.setItem("calcHistory", JSON.stringify(history));
}

