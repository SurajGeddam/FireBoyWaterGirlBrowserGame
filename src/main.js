console.log('text')

const canvas = document.getElementById('canvas');

canvas.width = 420;
canvas.height = 420;

const ctx = canvas.getContext('2d');


console.log('text 2')
// Box width
var bw = 400;
// Box height
var bh = 400;
// Padding
var p = 10;

let y = 20;

function drawBoard(){
    for (var x = 0; x <= bw; x += 40) {
        ctx.moveTo(0.5 + x + p, p);
        ctx.lineTo(0.5 + x + p, bh + p);
    }

    for (var x = 0; x <= bh; x += 40) {
        ctx.moveTo(p, 0.5 + x + p);
        ctx.lineTo(bw + p, 0.5 + x + p);
    }
    ctx.strokeStyle = "black";
    ctx.stroke();
}

const gameLoop = (timestamp) => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.beginPath();
    ctx.rect(y, 20, 25, 25g);
    ctx.stroke();

    y++; 

    drawBoard();

    requestAnimationFrame(gameLoop);
}

const init = () => {
    requestAnimationFrame(gameLoop);
}

init();