//  import enemy from "../data/enemy1.json";

interface ICharacters {
    fillCharacters(): void;
    printCharacters(): string;
}

class TSCCharacters {

    private name: string;
    private bucket: Array<TSCCharacter>;

    constructor( name: string ) {      
        this.name = name;  
        this.bucket = new Array();              
        //  console.log( "TSCInventory: " + this.name );
        //  console.log( enemy.healthpoints );
    }

    public getName(): string {
        return this.name;
    }

    public size(): number {
        return this.bucket.length;
    }

    public getAt( index: number ): TSCCharacter {
        return this.bucket[index];
    }

    public add( item: TSCCharacter ): void {
        this.bucket.push( item );
        console.log( "add name" + item.getName() + " => new size = " + this.bucket.length );
    }

    public removeByIndex( index: number ): void {
        this.bucket.splice( index, 1 );
        console.log( "remove => new size = " + this.bucket.length );
    }

    public removeByName( name: string ): void {
        for ( let index: number = 0; index < this.bucket.length; index++) {
            let item: TSCCharacter = this.bucket[index];
            if ( item.getName() === name )
                this.bucket.splice( index, 1 );    
        }
        console.log( "remove => new size = " + this.bucket.length );
    }
}

class TSCCharacter implements IInventory {

    private name: string;
    private healthPoints: number;
    private inventory: TSCInventory;

    constructor( name: string, healthPoints: number ) {
        this.name = name;
        this.healthPoints = healthPoints;
        this.inventory = new TSCInventory( "InventoryCharcter" );
        //  console.log( this.name + "," + this.healthPoints );
        //  console.log( this.inventory );
    }

    public getName(): string {
        return this.name;
    }

    public getHealthPoints(): number {
        return this.healthPoints;
    }

    public setHealthPoints( healtPoints: number ): void {
        this.healthPoints = healtPoints;
    }

    public getInventory(): TSCInventory {
        return this.inventory;
    } 

    public printInventory(): string {  
        let strInventoryCharacter: string = "Inventory Character name = " + this.name + "(HP:" + this.healthPoints + ").\n";    
        //  console.log( "list character inventory size = " +  this.getInventory().size() );
        for ( let index: number = 0; index < this.getInventory().size(); index++) {
            let item: TSCItem = this.getInventory().getAt( index );
            //  console.log( "Name: " + item.getName() + ", HP: " + item.getHealtpoints() );
            strInventoryCharacter += "Name: " + item.getName() + "Description " + item.getDescription() + ", HP: " + item.getHealtPoints() + "\n";
        }
        return strInventoryCharacter;
    }

    public fillInventory(): void {      
        //  read from a map infuture
        console.log( "fill character base inventory" );
        this.inventory.add( new TSCItem( "Item-Character-Base-1", "", 101));
    }
}

class TSCIntelligentCharacter extends TSCCharacter {
    constructor() {
        super("Einstein", 100);

        super.fillInventory();
        this.fillInventory();

        super.printInventory();
    }

    public fillInventory(): void {   
        //  read from a map infuture   
        console.log( "fill player inventory" );
        this.getInventory().add( new TSCItem( "Item-Character-Intelligent1", "", 1000));
    }
}

class TSCPlayer extends TSCCharacter {
    constructor() {
        //  init base class
        super("Player", 100);

        super.fillInventory();
        this.fillInventory();

        super.printInventory();
    }

    public fillInventory(): void {    
        //  read from a map infuture  
        console.log( "fill player inventory" );
        this.getInventory().add( new TSCItem( "test", "this is a test", null));
    }

    public takeInventory( currentRoom: TSCRoom, itemOrCharacter: string ): boolean {
        console.log( "take from " + currentRoom.getName() + " item = " + itemOrCharacter );
        console.log( "before take ==> size inventory current room: " + currentRoom.getInventory().size() + ", player inventory size: " + this.getInventory().size() );
        for ( let index: number = 0; index < currentRoom.getInventory().size(); index++) {
            let item: TSCItem = currentRoom.getInventory().getAt( index );
            if ( item.getName() === itemOrCharacter ) {
                this.getInventory().add( item );
                currentRoom.getInventory().removeByIndex( index );
                console.log( "hot phase ==> size inventory current room: " + currentRoom.getInventory().size() + ", player inventory size: " + this.getInventory().size() );
                return true;
            }
            
        }
        console.log( "after take ==> size inventory current room: " + currentRoom.getInventory().size() + ", player inventory size: " + this.getInventory().size() );
        return false;
    }

    public dropInventory( currentRoom: TSCRoom, itemOrCharacter: string ): boolean {
        console.log( "drop in " + currentRoom.getName() + " my item = " + itemOrCharacter );
        console.log( "before take ==> size inventory current room: " + currentRoom.getInventory().size() + ", player inventory size: " + this.getInventory().size() );
        for ( let index: number = 0; index < this.getInventory().size(); index++) {
            let item: TSCItem = this.getInventory().getAt( index );
            if ( item.getName() === itemOrCharacter ) {
                currentRoom.getInventory().add( item );
                this.getInventory().removeByIndex( index );
                console.log( "hot phase ==> size inventory current room: " + currentRoom.getInventory().size() + ", player inventory size: " + this.getInventory().size() );
                return true;
            }
            
        }
        console.log( "after take ==> size inventory current room: " + currentRoom.getInventory().size() + ", player inventory size: " + this.getInventory().size() );
        return false;
    }

    public attack( currentRoom: TSCRoom, itemOrCharacter: string ): boolean {
        console.log( "attack character = " + itemOrCharacter + " in " + currentRoom.getName());
        for ( let index: number = 0; index < currentRoom.getCharacters().size(); index++) {
            let character: TSCCharacter = currentRoom.getCharacters().getAt( index );
            if ( character.getName() === itemOrCharacter ) {
                character.setHealthPoints(character.getHealthPoints() - 5);
                this.setHealthPoints( this.getHealthPoints() + 5 );
                console.log( "hot phase ==> size inventory current room: " + currentRoom.getInventory().size() + ", player inventory size: " + this.getInventory().size() );
                return true;
            }
            
        }
        return false;
    }
}

class TSCEnemy extends TSCCharacter {
    constructor() {
        super("Enemy", 100);

        super.fillInventory();
        this.fillInventory();

        super.printInventory();
    }

    public fillInventory(): void {    
        //  read from a map infuture  
        console.log( "fill player inventory" );
        this.getInventory().add( new TSCItem( "Item-Character-Enemy1", "", 1000));
    }
}

