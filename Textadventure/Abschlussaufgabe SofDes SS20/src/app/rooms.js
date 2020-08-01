"use strict";
class TSCRoom {
    constructor() {
        this.name = this.name;
        this.roomInventory = new TSCInventory("Room");
        this.roomCharacters = new TSCCharacters("Room");
    }
    getDescription() {
        return this.roomDescription;
    }
    getName() {
        return this.name;
    }
    getInventory() {
        return this.roomInventory;
    }
    getCharacters() {
        return this.roomCharacters;
    }
    fillInventory() {
        console.log("fill room inventory");
        //this.roomInventory.add( new TSCItem( "Item-Room-Base1", 150 ));
        //this.roomInventory.add( new TSCItem( "Item-Room-Base2", 150 ));
    }
    printInventory() {
        let strInventoryRoom = "Inventory room name = " + this.name + ".\n";
        //  console.log( "list room inventory size = " +  this.getInventory().size() );
        for (let index = 0; index < this.getInventory().size(); index++) {
            let item = this.getInventory().getAt(index);
            //  console.log( "Name: " + item.getName() + ", HP: " + item.getHealtpoints() );
            strInventoryRoom += "Name: " + item.getName() + "Description: " + item.getDescription() + ", HP: " + item.getHealtPoints() + "\n";
        }
        return strInventoryRoom;
    }
    fillCharacters() {
        console.log("fill room with character");
        //this.roomCharacters.add( new TSCCharacter( "EnemyBase1", 150 ));
        //this.roomCharacters.add( new TSCCharacter( "EnemyBase2", 150 ));
    }
    printCharacters() {
        let strCharactersRoom = "Character room name = " + this.name + ".\n";
        //  console.log( "list room inventory size = " +  this.getInventory().size() );
        for (let index = 0; index < this.getCharacters().size(); index++) {
            let item = this.getCharacters().getAt(index);
            //  console.log( "Name: " + item.getName() + ", HP: " + item.getHealtpoints() );
            strCharactersRoom += "Name: " + item.getName() + ", HP: " + item.getHealthPoints() + "\n";
        }
        return strCharactersRoom;
    }
}
class TSCRoomMain extends TSCRoom {
    //  private itemCandle: TSCCandle; 
    constructor() {
        super();
        this.description = "Sie befinden sich im Raum Main.\n";
        this.roomDescription = this.description;
        this.name = "Main";
        super.fillInventory();
        this.fillInventory();
        super.fillCharacters();
        this.fillCharacters();
    }
    fillInventory() {
        //  read from a map infuture
        console.log("fill " + this.name + "room inventory");
        //this.getInventory().add( new TSCRation());
    }
    fillCharacters() {
        console.log("fill room with character");
        this.roomCharacters.add(new TSCCharacter("Enemy1", 150));
        this.roomCharacters.add(new TSCCharacter("Enemy2", 150));
    }
}
class TSCRoomNorth extends TSCRoom {
    constructor() {
        super();
        this.description = "Sie befinden sich im Raum North.\n";
        this.roomDescription = this.description;
        this.name = "Room-North";
        super.fillInventory();
        this.fillInventory();
        super.fillCharacters();
        this.fillCharacters();
    }
    fillInventory() {
        //  read from a map infuture   
        console.log("fill " + this.name + "room inventory");
        this.getInventory().add(new TSCItem("Item-North-1", "", 101));
        this.getInventory().add(new TSCItem("Item-North-2", "", 102));
    }
    fillCharacters() {
        console.log("fill room with character");
        this.roomCharacters.add(new TSCCharacter("Enemy3", 150));
        this.roomCharacters.add(new TSCCharacter("Enemy4", 150));
    }
}
class TSCRoomSouth extends TSCRoom {
    constructor() {
        super();
        this.description = "Sie befinden sich im Raum South.\n";
        this.roomDescription = this.description;
        this.name = "Room-South";
        super.fillInventory();
        this.fillInventory();
        super.fillCharacters();
        this.fillCharacters();
    }
    fillInventory() {
        //  read from a map infuture     
        console.log("fill " + this.name + "room inventory");
        this.getInventory().add(new TSCItem("Item-South-1", "", 101));
    }
    fillCharacters() {
        console.log("fill room with character");
        this.roomCharacters.add(new TSCCharacter("Enemy5", 150));
        this.roomCharacters.add(new TSCCharacter("Enemy6", 150));
    }
}
class TSCRoomEast extends TSCRoom {
    constructor() {
        super();
        this.description = "Sie befinden sich im Raum East.\n";
        this.roomDescription = this.description;
        this.name = "Room-East";
        super.fillInventory();
        this.fillInventory();
        super.fillCharacters();
        this.fillCharacters();
    }
    fillInventory() {
        //  read from a map infuture   
        console.log("fill " + this.name + "room inventory");
        this.getInventory().add(new TSCItem("Item-East-1", "", 101));
    }
    fillCharacters() {
        console.log("fill room with character");
        this.roomCharacters.add(new TSCCharacter("Enemy7", 150));
        this.roomCharacters.add(new TSCCharacter("Enemy8", 150));
    }
}
class TSCRoomWest extends TSCRoom {
    constructor() {
        super();
        this.description = "Sie befinden sich im Raum West.\n";
        this.roomDescription = this.description;
        this.name = "Room-West";
        super.fillInventory();
        this.fillInventory();
        super.fillCharacters();
        this.fillCharacters();
    }
    fillInventory() {
        //  read from a map infuture    
        console.log("fill " + this.name + "room inventory");
        this.getInventory().add(new TSCItem("Item-West-1", "", 101));
    }
    fillCharacters() {
        console.log("fill room with character");
        this.roomCharacters.add(new TSCCharacter("Enemy9", 150));
        this.roomCharacters.add(new TSCCharacter("Enemy10", 150));
    }
}
//# sourceMappingURL=rooms.js.map