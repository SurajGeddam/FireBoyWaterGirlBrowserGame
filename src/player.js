class Player {
    constructor(x, y, width, height) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.velX = 0;
        this.velY = 0;

        document.addEventListener('keydown', this.keyPressListener);

        document.addEventListener('keyup', this.keyUpListener);
    }


    keyPressListener = (e) => {
        const keyListeners = {
            'ArrowRight': () => {
                this.velX = 20;
            },
            'ArrowLeft': () => {
                this.velX = -20;
            },
            'ArrowUp': () => {
                this.velY = -20;
            },
            'ArrowDown': () => {
                this.velY = 20;
            }
        };

        const fun = keyListeners[e.code];

        if (fun) {
            fun();
        }
    }

    keyUpListener = (e) => {
        const keyListeners = {
            'ArrowRight': () => {
                this.velX = 0;
            },
            'ArrowLeft': () => {
                this.velX = -0;
            },
            'ArrowUp': () => {
                this.velY = 0;
            },
            'ArrowDown': () => {
                this.velY = -0;
            }
        };

        const fun = keyListeners[e.code];

        if (fun) {
            fun();
        }
    }



    update(game) {
        this.x += this.velX * game.dt;
        this.y += this.velY * game.dt;
    }


    draw(game) {
        game.ctx.beginPath();
        game.ctx.rect(this.x, this.y, 25, 25);
        game.ctx.stroke();
    }


}

export default Player;
