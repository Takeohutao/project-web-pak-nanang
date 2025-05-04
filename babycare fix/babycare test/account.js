const loginForm = document.getElementById("loginForm");
const registerForm = document.getElementById("registerForm");
const indicator = document.getElementById("indicator");

function showLogin() {
  loginForm.classList.add("active");
  registerForm.classList.remove("active");
  indicator.style.transform = "translateX(0)";
}

function showRegister() {
  registerForm.classList.add("active");
  loginForm.classList.remove("active");
  indicator.style.transform = "translateX(100%)";
}

// Tampilkan login form secara default saat halaman dibuka
window.onload = showLogin;
