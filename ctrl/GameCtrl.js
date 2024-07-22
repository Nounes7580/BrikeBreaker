class GameCtrl {
    /**
     * 
     * @param {*} game 
     * @param {*} view 
     */
    constructor(game, view) {
        this.game = game
        this.view = view
        this._controlpad = new PaddleController(game, view);
        this._ballcontrol = new BallCtrl(game, view);
        view.uptadeScore(this.game.player._score);
        view.addAll(game.mur(game.nbRow));
        this.play();
    }

    /**
     * débute le jeu
     */
    play() {
            this.ballStartWait();
        }
        /**
         * pour l'affichage du message
         */
    ballStartWait() {
            this.view.showMessage("Click to start");
            $(document).mouseup(() => this.ballStart());
        }
        /**
         * 
         * permet de commencer à faire bouger la balle
         */
    ballStart() {
            $(document).off("mouseup");
            this.view.hideMessage();
            this._ballcontrol.start();
        }
        /**
         * permet d'arrêter la balle
         */
    stop() {
        this._ballcontrol.stop();
    }



}