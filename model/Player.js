class Player {

    constructor() {
        this._score = 0;
        this._vie = 3;
    }

    get score() {
        return this._score;
    }

    /**
     * 
     * permet de rajouter les point mis en parametre
     * @param {} points 
     */
    addToScore(points) {

            this._score = this._score + points;
        }
        /**
         * permet de rajouter la vie 
         */
    addVie() {
            this._vie++;
        }
        /**
         * permet de retirer la vie 
         */
    removeVie() {
            var view = new View();
            this._vie--;
            view.removeVie();
        }
        /**
         * 
         * permet de finir la partie si il y'a plus de coeur 
         */
    gameOver() {
        return this._vie == 0;
    }
}