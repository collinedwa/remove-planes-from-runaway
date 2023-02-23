class Plane{
    static serialNum = 1;
    model;
    type;
    constructor(model, type){
        if(!model || !type) throw new Error("Missing arguments");

        this.model = model;
        this.type = type;
        this.serial = Plane.serialNum;
        Plane.serialNum++;
    }
}

module.exports = Plane;