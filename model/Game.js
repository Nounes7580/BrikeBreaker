class Game {
    /**
     * while permettant de choisir le nombre de ligne de brique que l'on veut
     * 
     */
    constructor() {
        this.nbRow = Number(window.prompt("notez le nombre de ligne brique que vous voulez pour commencer le niveau  (1, 2 ou 3)"));

        while (this.nbRow < 1 || this.nbRow > 3) {
            this.nbRow = Number(window.prompt("notez le nombre de ligne brique que vous voulez pour commencer le niveau  (1, 2 ou 3)"));
        }




        this._paddle = new Paddle(new Position(900, $("#zone").offset().top + 600 - 40), new Dimension(96, 16), "l ", "l ");
        this._ball = new Ball(new Position(950, 600), new Movement(3, -2), new Dimension(24, 24), "l ", "l ");
        this._wall = this.mur(this.nbRow);
        this._player = new Player();

    }

    get Paddle() {
        return this._paddle;
    }
    get ball() {
        return this._ball;
    }

    get wall() {
        return this._wall;

    }

    get player() {

        return this._player;
    }


    /**
     * permet de faire bouger la raquette
     * @param {*} centerX 
     */
    PaddleMove(centerX) {

            this._paddle.moveTo(centerX);
        }
        /**
         * permet la collision entre la balle et le paddle,verifWall est appeler pour que la balle puissent etre en collision avec les briques
         */
    ballMove() {
        var view = new View();
        var posx = this._paddle._topLeft._x - view.sceneLeft();

        this.verifWall();

        if (this._ball.verifier(this._paddle)) {

            this.ball._mouvement.reverseY();
        }


        this.ball.move();
    }

    /**
     * permet de mettre les briques 
     * @param {} nbRow 
     */

    mur(nbRow) {
            let mur = [];
            for (var i = 0; i < nbRow; i++) {
                for (var j = 0; j < horiz; j++) {
                    if (j % 64 == 0) {
                        mur.unshift(new Brick(new Position(j + $("#zone").offset().left, $("#zone").offset().top + i * 24), new Dimension(64, 24), "brique" + mur.length, "brick"));
                    }
                }
            }
            return mur;
        }
        /**
         * permet la collision entre la balle et les briques
         */
    verifWall() {
        for (var i = 0; i < this._wall.length; i++) {

            if (this._wall[i].verifier(this._ball)) {
                if (document.getElementById(this._wall[i]._id) != null) {
                    document.getElementById(this._wall[i]._id).remove();
                    this._ball._mouvement.reverseY();
                    this._player.addToScore(5);
                    document.getElementById("score").textContent = "score :" + this._player._score;
                }
            }
        }
        /**
         *  retourn le nombre de brique que si c'est équivalent à 0
         * pour l'utiliser dans une autre methode me permettant de faire perdre 
         * 
         */
    }
    gameOver() {
        console.log(document.getElementById("brick").childNodes.length);
        return (document.getElementById("brick").childNodes.length == 0);
    }
}