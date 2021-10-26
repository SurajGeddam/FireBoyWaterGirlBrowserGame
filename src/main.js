console.log('text')

const canvas = document.getElementById('canvas');

canvas.width = 700;
canvas.height = 700;

const ctx = canvas.getContext('2d');

console.log('text 2')

let x = 20;
let y = 20;

const gameLoop = (timestamp) => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Red rectangle
    ctx.beginPath();
    ctx.lineWidth = "6";
    ctx.strokeStyle = "red";
    ctx.rect(x, 20, 150, 100);
    ctx.stroke();
    

    // Green rectangle
    ctx.beginPath();
    ctx.lineWidth = "4";
    ctx.strokeStyle = "green";
    ctx.rect(20, y, 150, 100);
    ctx.stroke();
    y++;

    // Blue rectangle
    ctx.beginPath();
    ctx.lineWidth = "10";
    ctx.strokeStyle = "blue";
    ctx.rect(x, y, 150, 100);
    ctx.stroke();

    x++;
    y++;

    requestAnimationFrame(gameLoop);
}

const init = () => {
    requestAnimationFrame(gameLoop);
}

init();