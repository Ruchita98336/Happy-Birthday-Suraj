// Confetti burst
confetti({
    particleCount: 200,
    spread: 100,
    origin: { y: 0.6 }
  });
  
  // Theme toggle
  const btn = document.getElementById("themeToggle");
  btn.addEventListener("click", () => {
    document.body.classList.toggle("light-mode");
    btn.textContent = document.body.classList.contains("light-mode") ? "🌙" : "☀️";
  });
  