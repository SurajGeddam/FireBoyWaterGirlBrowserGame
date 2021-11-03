import Player from "./player.js";
import Player2 from "./player2.js";
console.log('text')

const canvas = document.getElementById('canvas');

<<<<<<< HEAD
canvas.width = 420;
canvas.height = 420;
=======
canvas.width = 700;
canvas.height = 700;
>>>>>>> 45d8b4a777995ccaa25408718a299162ea366ae9

const ctx = canvas.getContext('2d');

// Box width
var bw = canvas.width - 20;
// Box height
var bh = canvas.height - 20;
// Padding
var p = 10;

function drawBoard() {
    for (var x = 0; x <= bw; x += 40) {
        ctx.moveTo(0.5 + x + p, p);
        ctx.lineTo(0.5 + x + p, bh + p);
    }

    for (var x = 0; x <= bh; x += 40) {
        ctx.moveTo(p, 0.5 + x + p);
        ctx.lineTo(bw + p, 0.5 + x + p);
    }
    ctx.strokeStyle = "black";
    ctx.lineWidth = "2";
    ctx.stroke();
}

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

    game.player.update(game);
    game.player.draw(game);

    ctx.beginPath();
    ctx.rect(y, 20, 25, 25);
    ctx.stroke();

    y++; 

    drawBoard();

    requestAnimationFrame(gameLoop);
}

const init = () => {
    requestAnimationFrame(gameLoop);
}

init();