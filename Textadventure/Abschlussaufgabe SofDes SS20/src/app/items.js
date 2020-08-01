"use strict";
class TSCItem {
    constructor(name, _description, healthpoints) {
        this.name = name;
        this.description = name;
        this.healtpoints = healthpoints;
        //console.log( this.name );
        //console.log( this.healtpoints );
    }
    getName() {
        return this.name;
    }
    getDescription() {
        return this.description;
    }
    getHealtPoints() {
        return this.healtpoints;
    }
}
/*
class TSCRation extends TSCItem {
    constructor( ) {
        super( "Bread", "Just some normal bread, nothing special", 100 );  ##In case a special item is needed##
    }
} */ 
//# sourceMappingURL=items.js.map