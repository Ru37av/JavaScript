const button = document.querySelector("button")
const body = document.querySelector("body")
const color = ['red', 'orange', 'blue', 'yellow', 'pink', 'purple', 'black'];

body.style.background = 'violet'

button.addEventListener('click', changeB);

function changeB() {
    const colorIndex = parseInt(Math.random() * color.length);
    body.style.background = color[colorIndex];
}
