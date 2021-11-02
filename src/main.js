import Player from "./player.js";
console.log('text')

const canvas = document.getElementById('canvas');

canvas.width = 700;
canvas.height = 700;

const ctx = canvas.getContext('2d');

console.log('text 2')

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

    requestAnimationFrame(gameLoop);
}

const init = () => {
    requestAnimationFrame(gameLoop);
}

init();