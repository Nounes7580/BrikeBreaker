let i = 0;

class Ball extends Sprite {
    /**
     * 
     * 
     * 
     * @param {*} topLeft 
     * @param {*} mouvement 
     * @param {*} dimension 
     * @param {*} id 
     * @param {*} type 
     */

    constructor(topLeft, mouvement, dimension, id, type) {
        super(topLeft, dimension, id, type)
        this._mouvement = mouvement;

    }
    get topLeft() {
        return this._topLeft;
    }
    get mouvement() {
        return this._mouvement;
    }

    set topLeft(topLeft) {
        this._topLeft = topLeft;
    }

    set mouvement(mouvement) {
            this._mouvement = mouvement;
        }
        /**
         * permet le mouvement de la balle et de rebondire sur les mur du jeu 
         * 
         */
    move() {

        if ((0 + $("#zone").offset().top < this._topLeft.y < 600 + $("#zone").offset().top) && (0 + $("#zone").offset().left < this._topLeft.x < 960 + $("#zone").offset().left)) {
            this._topLeft = new Position(this._topLeft.x + this._mouvement.deltaX, this._topLeft.y + this._mouvement.deltaY);
        }
        if ($("#zone").offset().top > this._topLeft._y) {
            this._topLeft = new Position(this._topLeft.x + this._mouvement.deltaX, this._topLeft.y + this._mouvement.reverseY());
            if (i > color.length) {

                i = 0;

            }
            $("#balle").css("background", color[i++]);

        }
        if ($("#zone").offset().top + 600 < this.topLeft._y + 24) {
            if (!player.gameOver()) {
                this._mouvement.reverseY();
                player.removeVie();
            }
            if (player.gameOver()) {
                gameCtrl.stop();
            }
        } else if ($("#zone").offset().left > this.topLeft.x || $("#zone").offset().left + 960 < this.topLeft._x + 24) {
            this._topLeft = new Position(this._topLeft.x + this._mouvement.reverseX(), this._topLeft.y + this._mouvement.deltaY);
            $("#balle").css("background", color[i++]);
        }

    }
}