function changeColor(element) {
    // Generate random colors for the name and background
    const randomColor1 = getRandomColor();
    const randomColor2 = getRandomColor();
  
    // Apply the new colors
    element.style.color = randomColor1;
    element.parentElement.style.backgroundColor = randomColor2;
  }
  
  function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
  