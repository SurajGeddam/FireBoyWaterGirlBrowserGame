console.log('text')

const canvas = document.getElementById('canvas');

canvas.width = 300;
canvas.height = 300;

const ctx = canvas.getContext('2d');


console.log('text 2')


let x = 20;

const gameLoop = (timestamp) => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.beginPath();
    ctx.rect(x, 20, 150, 100);
    ctx.stroke();

    x++; 

    requestAnimationFrame(gameLoop);
}

const init = () => {
    requestAnimationFrame(gameLoop);
}

init();