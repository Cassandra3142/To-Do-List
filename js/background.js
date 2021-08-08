const background = document.querySelector('#bgimg');
const images = ["0.jpg","1.jpg","2.jpg","3.jpg","4.jpg","5.jpg" ];

const randomBg = () => {
    const chosenImages = images[Math.floor(Math.random() * images.length)];
    background.style.backgroundImage = `url(./img/${chosenImages}) `
}

const bgImg = () => {
    randomBg();
}

bgImg();