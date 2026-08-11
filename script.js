// State variables
let count = 0;

// DOM Elements
const countDisplay = document.getElementById('count');
const incrementBtn = document.getElementById('increment');
const decrementBtn = document.getElementById('decrement');
const resetBtn = document.getElementById('reset');
const themeToggle = document.getElementById('themeToggle');

// Helper to update DOM
function updateDisplay() {
  countDisplay.textContent = count;
}

// Event Listeners
incrementBtn.addEventListener('click', () => {
  count++;
  updateDisplay();
});

decrementBtn.addEventListener('click', () => {
  count--;
  updateDisplay();
});

resetBtn.addEventListener('click', () => {
  count = 0;
  updateDisplay();
});

// Dark Mode Toggle Logic
themeToggle.addEventListener('click', () => {
  const currentTheme = document.body.getAttribute('data-theme');
  if (currentTheme === 'dark') {
    document.body.removeAttribute('data-theme');
    themeToggle.textContent = '🌙 Dark Mode';
  } else {
    document.body.setAttribute('data-theme', 'dark');
    themeToggle.textContent = '☀️ Light Mode';
  }
});