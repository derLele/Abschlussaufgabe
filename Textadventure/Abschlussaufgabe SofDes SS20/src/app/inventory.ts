interface IInventory {
    fillInventory(): void;
    printInventory(): string;
}

class TSCInventory {

    private name: string;
    private bucket: Array<TSCItem>;

    constructor( name: string ) {      
        this.name = name;  
        this.bucket = new Array();              
        //  console.log( "TSCInventory: " + this.name );
    }

    public getName(): string {
        return this.name;
    }

    public size(): number {
        return this.bucket.length;
    }

    public getAt( index: number ): TSCItem {
        return this.bucket[index];
    }

    public add( item: TSCItem ): void {
        this.bucket.push( item );
        console.log( "add name" + item.getName() + " => new size = " + this.bucket.length );
    }

    public removeByIndex( index: number ): void {
        this.bucket.splice( index, 1 );
        console.log( "remove => new size = " + this.bucket.length );
    }

    public removeByName( name: string ): void {
        for ( let index: number = 0; index < this.bucket.length; index++) {
            let item: TSCItem = this.bucket[index];
            if ( item.getName() === name )
                this.bucket.splice( index, 1 );    
        }
        console.log( "remove => new size = " + this.bucket.length );
    }
}



