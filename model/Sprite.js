class Sprite {
    /**
     * 
     * @param {*} topLeft 
     * @param {*} dimension 
     * @param {*} id 
     * @param {*} type 
     */
    constructor(topLeft, dimension, id, type) {
        this._id = id;
        this._topLeft = topLeft;
        this._dimension = dimension;
        this._type = type;
    }

    get topLeft() {

        return this._topLeft;
    }
    get dimension() {

        return this._dimension;
    }

    get id() {

        return this._id;
    }
    get type() {

        return this._type;
    }

    /**
     * 
     *  méthode générale qui vérifie si un sprite est en collision
        avec un autre 
     * 
     * @param {} spriteOther 
     */
    verifier(spriteOther) {
        if (spriteOther instanceof Paddle) {
            return (this._topLeft._x <= spriteOther._topLeft._x + spriteOther.dimension.width &&
                this._topLeft._x - 75 + spriteOther.dimension.width >= spriteOther._topLeft._x &&
                this._topLeft._y <= spriteOther._topLeft._y + spriteOther.dimension.height &&
                this.dimension.height + this._topLeft._y >= spriteOther._topLeft._y);
        } else if (this instanceof Brick) {
            return (this._topLeft._x <= spriteOther._topLeft._x - 18 + spriteOther.dimension.width &&
                this._topLeft._x + spriteOther.dimension.width >= spriteOther._topLeft._x &&
                this._topLeft._y <= spriteOther._topLeft._y + spriteOther.dimension.height &&
                this.dimension.height + this._topLeft._y >= spriteOther._topLeft._y);
        }
    }
}