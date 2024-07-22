class Dimension {
    /**
     * 
     * @param {*} width 
     * @param {*} height 
     */
    constructor(width, height) {
        this._largeur = width;
        this._hauteur = height;

    }

    get width() {

        return this._largeur;
    }

    get height() {

        return this._hauteur;
    }
}