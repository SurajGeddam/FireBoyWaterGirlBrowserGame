import Player from "./player.js";
console.log('text')

const canvas = document.getElementById('canvas');

canvas.width = 700;
canvas.height = 700;

const ctx = canvas.getContext('2d');

// Box width
var bw = canvas.width-20;
// Box height
var bh = canvas.height-20;
// Padding
var p = 10;

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

let game = undefined;

const reset = (timestamp) => {
    game = {
        ctx: ctx,
        player: new Player(0, 0, 150, 150),
        dt: 0,
        timestamp: timestamp,
        lastUpdated: timestamp,
        gameSpeed: 1.5
    };
}

const gameLoop = (timestamp) => {

    if (!game) {
        reset(timestamp);
    }

    game.timestamp = timestamp;

    game.ctx.clearRect(0, 0, canvas.width, canvas.height);

    game.dt = (timestamp - game.lastUpdated) / 1000;
    game.dt *= game.gameSpeed;

    game.player.update(game);
    game.player.draw(game);

    game.lastUpdated = timestamp;

    drawBoard();

    requestAnimationFrame(gameLoop);
}

const init = () => {
    requestAnimationFrame(gameLoop);
}

init();