class TSCRoom implements IInventory, ICharacters {
    protected name: string;
    protected roomDescription: string;
    protected roomInventory: TSCInventory;
    protected roomCharacters: TSCCharacters;

    constructor( ) {
        this.name = this.name;
        this.roomInventory = new TSCInventory( "Room" );
        this.roomCharacters = new TSCCharacters( "Room" );
    }

    public getDescription(): string {
        return this.roomDescription;
    }

    public getName(): string {
        return this.name;
    }

    public getInventory(): TSCInventory {
        return this.roomInventory;
    } 

    public getCharacters(): TSCCharacters {
        return this.roomCharacters;
    } 

    public fillInventory(): void {      
        console.log( "fill room inventory" );
        //this.roomInventory.add( new TSCItem( "Item-Room-Base1", 150 ));
        //this.roomInventory.add( new TSCItem( "Item-Room-Base2", 150 ));
    }

    public printInventory(): string {     
        let strInventoryRoom: string = "Inventory room name = " + this.name + ".\n";    
        //  console.log( "list room inventory size = " +  this.getInventory().size() );
        for ( let index: number = 0; index < this.getInventory().size(); index++) {
            let item: TSCItem = this.getInventory().getAt( index );
            //  console.log( "Name: " + item.getName() + ", HP: " + item.getHealtpoints() );
            strInventoryRoom += "Name: " + item.getName() + "Description: " + item.getDescription() +  ", HP: " + item.getHealtPoints() + "\n";
        }
        return strInventoryRoom;
    }

    public fillCharacters(): void {      
        console.log( "fill room with character" );
        //this.roomCharacters.add( new TSCCharacter( "EnemyBase1", 150 ));
        //this.roomCharacters.add( new TSCCharacter( "EnemyBase2", 150 ));
    }

    public printCharacters(): string {     
        let strCharactersRoom: string = "Character room name = " + this.name + ".\n";    
        //  console.log( "list room inventory size = " +  this.getInventory().size() );
        for ( let index: number = 0; index < this.getCharacters().size(); index++) {
            let item: TSCCharacter = this.getCharacters().getAt( index );
            //  console.log( "Name: " + item.getName() + ", HP: " + item.getHealtpoints() );
            strCharactersRoom += "Name: " + item.getName() + ", HP: " + item.getHealthPoints() + "\n";
        }
        return strCharactersRoom;
    }
}

class TSCRoomMain extends TSCRoom {
    private description: string = "Sie befinden sich im Raum Main.\n";

    //  private itemCandle: TSCCandle; 

    constructor() {
        super( );
        this.roomDescription = this.description;
        this.name = "Main";

        super.fillInventory(); 
        this.fillInventory();
        
        super.fillCharacters(); 
        this.fillCharacters();
    }

    public fillInventory(): void {      
        //  read from a map infuture
        console.log( "fill " + this.name + "room inventory" );
        //this.getInventory().add( new TSCRation());
    }

    public fillCharacters(): void {      
        console.log( "fill room with character" );
        this.roomCharacters.add( new TSCCharacter( "Enemy1", 150 ));
        this.roomCharacters.add( new TSCCharacter( "Enemy2", 150 ));
    }
}

class TSCRoomNorth extends TSCRoom {
    private description: string = "Sie befinden sich im Raum North.\n";

    constructor() {
        super( );
        this.roomDescription = this.description;
        this.name = "Room-North";

        super.fillInventory(); 
        this.fillInventory(); 
        
        super.fillCharacters(); 
        this.fillCharacters();
    }

    public fillInventory(): void {   
        //  read from a map infuture   
        console.log( "fill " + this.name + "room inventory" );
        this.getInventory().add( new TSCItem( "Item-North-1", "", 101));
        this.getInventory().add( new TSCItem( "Item-North-2", "", 102));
    }

    public fillCharacters(): void {      
        console.log( "fill room with character" );
        this.roomCharacters.add( new TSCCharacter( "Enemy3", 150 ));
        this.roomCharacters.add( new TSCCharacter( "Enemy4", 150 ));
    }
}

class TSCRoomSouth extends TSCRoom {
    private description: string = "Sie befinden sich im Raum South.\n";

    constructor() {
        super( );
        this.roomDescription = this.description;
        this.name = "Room-South";
        
        super.fillInventory(); 
        this.fillInventory(); 

        super.fillCharacters(); 
        this.fillCharacters();
    }

    public fillInventory(): void { 
        //  read from a map infuture     
        console.log( "fill " + this.name + "room inventory" );
        this.getInventory().add( new TSCItem( "Item-South-1", "", 101));
    }

    public fillCharacters(): void {      
        console.log( "fill room with character" );
        this.roomCharacters.add( new TSCCharacter( "Enemy5", 150 ));
        this.roomCharacters.add( new TSCCharacter( "Enemy6", 150 ));
    }
}

class TSCRoomEast extends TSCRoom {
    private description: string = "Sie befinden sich im Raum East.\n";

    constructor() {
        super( );
        this.roomDescription = this.description;
        this.name = "Room-East";
        
        super.fillInventory(); 
        this.fillInventory(); 

        super.fillCharacters(); 
        this.fillCharacters();
    }

    public fillInventory(): void {   
        //  read from a map infuture   
        console.log( "fill " + this.name + "room inventory" );
        this.getInventory().add( new TSCItem( "Item-East-1", "", 101));
    }

    public fillCharacters(): void {      
        console.log( "fill room with character" );
        this.roomCharacters.add( new TSCCharacter( "Enemy7", 150 ));
        this.roomCharacters.add( new TSCCharacter( "Enemy8", 150 ));
    }
}

class TSCRoomWest extends TSCRoom {
    private description: string = "Sie befinden sich im Raum West.\n";

    constructor() {
        super( );
        this.roomDescription = this.description;
        this.name = "Room-West";

        super.fillInventory(); 
        this.fillInventory(); 

        super.fillCharacters(); 
        this.fillCharacters();
    }

    public fillInventory(): void {  
        //  read from a map infuture    
        console.log( "fill " + this.name + "room inventory" );
        this.getInventory().add( new TSCItem( "Item-West-1", "", 101));
    }

    public fillCharacters(): void {      
        console.log( "fill room with character" );
        this.roomCharacters.add( new TSCCharacter( "Enemy9", 150 ));
        this.roomCharacters.add( new TSCCharacter( "Enemy10", 150 ));
    }
}


