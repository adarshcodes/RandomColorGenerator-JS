const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

// #

const btn = document.getElementById('btn');
const color = document.querySelector('.color');
const revCol = document.querySelector('.reverse');
const heading = document.querySelector('h2');

btn.addEventListener('click', function () {
    let hexColor = "#";

    for (let i = 0; i < 6; i++) {
        hexColor += hex[getRandomNumber()];
    }
    color.textContent = hexColor;
    document.body.style.backgroundColor = hexColor;
    heading.style.color = hexColor;
    heading.style.backgroundColor = (reverseColor());
    revCol.textContent = reverseColor();

    function reverseColor() {
        let colArr = hexColor.split("");

        colArr.reverse().pop();
        return (`#${colArr.join("")}`);
    }
});

function getRandomNumber() {
    return Math.floor(Math.random() * hex.length);
}