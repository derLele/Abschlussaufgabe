class TSCItem {

    private name: string;
    private description: string;
    private healtpoints: number;

    constructor( name: string, _description: string, healthpoints: number ) {
        this.name = name;
        this.description = name;
        this.healtpoints = healthpoints;

        //console.log( this.name );
        //console.log( this.healtpoints );
    }

    public getName(): string {
        return this.name;
    }

    public getDescription(): string {
        return this.description;
    }

    public getHealtPoints(): number {
        return this.healtpoints;
    }
}
/* 
class TSCRation extends TSCItem {
    constructor( ) {
        super( "Bread", "Just some normal bread, nothing special", 100 );  ##In case a special item is needed##
    }
} */