class Paddle extends Sprite {
    /**
     * 
     * @param {*} topLeft 
     * @param {*} dimension 
     * @param {*} id 
     * @param {*} type 
     */
    constructor(topLeft, dimension, id, type) {
        super(topLeft, dimension, id, type);
    }

    get Left() {
        return this._topLeft._x;
    }

    moveTo(val) {
        this._topLeft._x = val;
    }
}