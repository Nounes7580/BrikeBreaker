class Movement {
    /**
     * 
     * @param {*} deltaX 
     * @param {*} deltaY 
     */
    constructor(deltaX, deltaY) {
        this._deltaX = deltaX;
        this._deltaY = deltaY
    }

    get deltaX() {
        return this._deltaX;
    }

    get deltaY() {
        return this._deltaY;
    }

    set deltaX(value) {
        this._deltaX = value;
    }
    set deltaY(value) {
            this._deltaY = value;
        }
        /**
         * retourne la position oppposer
         */
    reverseX() {
            return this._deltaX = -this._deltaX;
        }
        /**
         * retourne le position opposer
         */
    reverseY() {
        return this._deltaY = -this._deltaY;
    }
}