
VANTA.FOG({
  el: "#vanta-bg",
  mouseControls: true,
  touchControls: true,
  gyroControls: false,
  minHeight: 200.00,
  minWidth: 200.00,
  highlightColor: 0xffe1af,   // soft peach
  midtoneColor: 0xe2b59a,     // muted rose
  lowlightColor: 0x957c62,    // earthy brown
  baseColor: 0xffffff         // white background
});
window.onload = function() {
  let history = JSON.parse(localStorage.getItem("calcHistory")) || [];
  let historyList = document.getElementById("history-list");

  history.forEach(item => {
    let li = document.createElement("li");
    li.textContent = item;
    historyList.appendChild(li);
  });

  // Toggle sidebar
  document.getElementById("toggle-history").addEventListener("click", function() {
    document.getElementById("sidebar").classList.toggle("active");
    this.textContent = document.getElementById("sidebar").classList.contains("active")
      ? "Hide History"
      : "Show History";
  });
};

