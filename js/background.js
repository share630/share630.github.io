/// array
const images = [
    "01.jpg",
    "02.jpg",
    "03.jpg",
    "04.jpg",
    "05.jpg",
    "06.jpg",
    "07.jpg",
    "08.jpg",
    "09.jpg",
    "10.jpg",
];

///random image selector
///const chosenImage = images[Math.floor(Math.random() * images.length)];

///create elements on HTML page called "img"
///const bgImage = document.createElement("img")

///find image location and assgining it to "img" element on HTML
///bgImage.src = `img/${chosenImage}`;

/// adding to the HTML body
///document.body.appendChild(bgImage);

function randomBackground() {
    const chosenImage = Math.floor(Math.random() * images.length);
    const randomImage = images[chosenImage];
    const fullscreenbg = document.querySelector(".fullscreen-bg");
    fullscreenbg.style.backgroundImage = `url('img/${randomImage}')`;
    console.log(`url('img/${randomImage}')`)
} 

window.addEventListener('load',randomBackground);