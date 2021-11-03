class Player2 {
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
            'KeyD': () => {
                this.velX = 20;
            },
            'KeyA': () => {
                this.velX = -20;
            },
            'KeyW': () => {
                this.velY = -20;
            },
            'KeyS': () => {
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
            'KeyD': () => {
                this.velX = 0;
            },
            'KeyA': () => {
                this.velX = -0;
            },
            'KeyW': () => {
                this.velY = 0;
            },
            'KeyS': () => {
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
        game.ctx.lineWidth = "3";
        game.ctx.fillStyle = "#FF0000";
        game.ctx.fillRect(this.x, this.y, 25, 25);
        game.ctx.stroke();
    }


}

export default Player2;