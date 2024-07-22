class PaddleController {
    /** 
            @param { Paddle }
            paddle - raquette à contrôler∗ @param { View }
            view - la vue*/

    constructor(game, view) {
            this._game = game;

            this._view = view;
            view.uptade(game._paddle);
            $(document).mousemove((evt) => this.moveMouse(this._game, view, evt));
        }
        /**
         * permet le positionnnement de la souris pour bouger la raquette
         * @param {*} param 
         * @param {*} view 
         * @param {*} evt 
         */
    moveMouse(param, view, evt) {
        var positionCursor = evt.clientX - 48;
        console.log();
        if (positionCursor > ($("#zone").offset().left + 10) && positionCursor < ($("#zone").offset().left + 960 - 105)) {
            param.PaddleMove(positionCursor);

        }
        this._view.uptade(param.Paddle);
    }
}