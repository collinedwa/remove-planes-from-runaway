class Runway {
    static MAX_PLANES_ALLOWED_ON_ALL_RUNWAYS = 100;
    static planes = [];

    name;

    constructor(name){
        if(!name) throw new Error('Missing name argument');
        this.name = name;
    }
    
    add(plane){
        if (Runway.planes.length>Runway.MAX_PLANES_ALLOWED_ON_ALL_RUNWAYS) {
            throw new Error ("runways at full capacity!");
        }
        Runway.planes.push(plane);
    }

    remove(plane){
        if(!Runway.planes.includes(plane)) throw new Error("plane not in runway")
        Runway.planes.splice(Runway.planes.indexOf(plane), 1)
    }

    removeAll(){
        Runway.planes = [];
    }
}

module.exports = Runway;