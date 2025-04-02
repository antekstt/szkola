document.addEventListener('DOMContentLoaded', (event) => {
    const redSlider = document.getElementById('red');
    const greenSlider = document.getElementById('green');
    const blueSlider = document.getElementById('blue');
    const colorDiv = document.getElementById('color');
    const changeColorButton = document.getElementById('changeColorButton');

    function changeColor() {
        let red = parseInt(redSlider.value) || 0;
        let green = parseInt(greenSlider.value) || 0;
        let blue = parseInt(blueSlider.value) || 0;

        // Ensure values are within the range 0-255
        red = Math.min(255, Math.max(0, red));
        green = Math.min(255, Math.max(0, green));
        blue = Math.min(255, Math.max(0, blue));

        colorDiv.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
    }

    changeColorButton.addEventListener('click', changeColor);

    // Initialize the color on page load
    changeColor();
});