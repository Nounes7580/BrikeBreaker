/** 
Contrôleur de la balle.∗Propose des méthodes pour démarrer / arrêter la balle et la faire bouger.*/
class BallCtrl {
    /** 
            @param { Ball }
            ball - la balle à contrôler∗ @param { View }
            view - la vue*/

    constructor(game, view) {
        this._game = game;
        this._ball = game._ball;
        this._view = view;
        view.uptade(game._ball);
    }

    /** Démarre la balle. */
    start() {

        this._moveListener = setInterval(() => this.move(), 8);
    }

    /** Déplace la balle d’un pas (défini par son mouvement) et rafraichit la vue. */
    move() {
        this._game.ballMove();
        this._view.uptade(this._ball);
    }

    /** Arrête la balle. */
    stop() {
        clearInterval(this._moveListener);
    }
}