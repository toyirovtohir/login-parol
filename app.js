const togglePassword = document.getElementById('togglePassword');
const password = document.getElementById('password');

togglePassword.addEventListener('click', () => {
  const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
  password.setAttribute('type', type);
});

document.getElementById("loginForm").addEventListener("submit", function(e) {
  e.preventDefault();
  alert("Вы успешно вошли!");
});