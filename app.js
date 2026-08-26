const ACCOUNT = "cc";
const PASSWORD = "123456";
const LETTERS = "QKWM PLZX VNTR";
const SESSION_KEY = "baidu-site-logged-in";

const loginPanel = document.getElementById("login-panel");
const secretPanel = document.getElementById("secret-panel");
const loginForm = document.getElementById("login-form");
const errorEl = document.getElementById("error");
const lettersEl = document.getElementById("letters");
const logoutBtn = document.getElementById("logout");

function showSecret() {
  lettersEl.textContent = LETTERS;
  loginPanel.hidden = true;
  secretPanel.hidden = false;
  errorEl.hidden = true;
}

function showLogin() {
  loginPanel.hidden = false;
  secretPanel.hidden = true;
  loginForm.reset();
}

if (sessionStorage.getItem(SESSION_KEY) === "1") {
  showSecret();
}

loginForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value;

  if (username === ACCOUNT && password === PASSWORD) {
    sessionStorage.setItem(SESSION_KEY, "1");
    showSecret();
    return;
  }

  errorEl.hidden = false;
});

logoutBtn.addEventListener("click", () => {
  sessionStorage.removeItem(SESSION_KEY);
  showLogin();
});
