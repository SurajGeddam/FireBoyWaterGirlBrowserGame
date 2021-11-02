import Player from "./player.js";
console.log('text')

const canvas = document.getElementById('canvas');

canvas.width = 700;
canvas.height = 700;

const ctx = canvas.getContext('2d');

console.log('text 2')

let game = undefined;

const reset = () => {
    game = {
        player: new Player(0, 0, 100, 100),
        ctx: ctx
    };
}

reset();

const gameLoop = (timestamp) => {

    game.timestamp = timestamp;

    game.ctx.clearRect(0, 0, canvas.width, canvas.height);
    game.player.draw(game);
    game.player.update(game);

    game.dt = (timestamp - game.lastUpdated) / 1000;

    game.player.update(game);
    game.player.draw(game);

    game.lastUpdated = timestamp;

    requestAnimationFrame(gameLoop);
}

const init = () => {
    requestAnimationFrame(gameLoop);
}

init();