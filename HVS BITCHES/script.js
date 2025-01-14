// Get the color changer and color bar elements
const colorChanger = document.getElementById('color-changer');
const colorBar = document.querySelector('.color-bar');

// Add an event listener to the color changer
colorChanger.addEventListener('input', (event) => {
  // Get the selected color
  const selectedColor = event.target.value;
  // Update the color bar's background
  colorBar.style.background = selectedColor;
});