// Animate box on button click
document.getElementById('animateBtn').addEventListener('click', () => {
  const box = document.getElementById('box');
  box.classList.toggle('animate');
});

// Set and store theme in localStorage
function setTheme(theme) {
  document.body.className = theme;
  localStorage.setItem('preferredTheme', theme);
}

// Load stored theme on page load
window.onload = () => {
  const savedTheme = localStorage.getItem('preferredTheme') || 'light';
  document.body.className = savedTheme;
};
