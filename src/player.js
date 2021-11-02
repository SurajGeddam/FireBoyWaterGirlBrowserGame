class Player {
    constructor(x, y, width, height) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.velX = 0;
        this.velY = 0;

        document.addEventListener('keyup', this.keyPressListener);
    }
    /*

    keyPressListener = (e) => {
        const keyListeners = {
            'ArrowRight': () => {
                this.velX = 20;
            },
            'ArrowLeft': () => {
                this.velX = -20;
            },
            'ArrowUp': () => {
                this.velY = 20;
            },
            'ArrowDown': () => {
                this.velY = -20;
            }
        };
    }
    */


    update(game) {
        this.x += this.velX * game.dt;
        this.y += this.velY * game.dt;
    }


    draw(game) {
        game.ctx.beginPath();
        game.ctx.rect(this.x, this.y, 150, 150);
        game.ctx.stroke();
    }


}

export default Player;
