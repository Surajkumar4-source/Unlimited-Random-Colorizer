const randomColor = function () {
    const hex = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += hex[Math.floor(Math.random() * 16)];
    }
    return color;
};

let intervalId;
let isColorChanging = false;

const startChangingColor = function () {
    if (!isColorChanging) {
        intervalId = setInterval(changeBgColor, 1000);
        isColorChanging = true;
    }

    function changeBgColor() {
        document.body.style.backgroundColor = randomColor();
    }
};

const stopChangingColor = function () {
    clearInterval(intervalId);
    isColorChanging = false;
};

document.querySelector('#start').addEventListener('click', startChangingColor);
document.querySelector('#stop').addEventListener('click', stopChangingColor);
