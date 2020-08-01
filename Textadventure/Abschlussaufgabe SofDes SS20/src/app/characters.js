"use strict";
//  import enemy from "../data/enemy1.json";
class TSCCharacters {
    constructor(name) {
        this.name = name;
        this.bucket = new Array();
        //  console.log( "TSCInventory: " + this.name );
        //  console.log( enemy.healthpoints );
    }
    getName() {
        return this.name;
    }
    size() {
        return this.bucket.length;
    }
    getAt(index) {
        return this.bucket[index];
    }
    add(item) {
        this.bucket.push(item);
        console.log("add name" + item.getName() + " => new size = " + this.bucket.length);
    }
    removeByIndex(index) {
        this.bucket.splice(index, 1);
        console.log("remove => new size = " + this.bucket.length);
    }
    removeByName(name) {
        for (let index = 0; index < this.bucket.length; index++) {
            let item = this.bucket[index];
            if (item.getName() === name)
                this.bucket.splice(index, 1);
        }
        console.log("remove => new size = " + this.bucket.length);
    }
}
class TSCCharacter {
    constructor(name, healthPoints) {
        this.name = name;
        this.healthPoints = healthPoints;
        this.inventory = new TSCInventory("InventoryCharcter");
        //  console.log( this.name + "," + this.healthPoints );
        //  console.log( this.inventory );
    }
    getName() {
        return this.name;
    }
    getHealthPoints() {
        return this.healthPoints;
    }
    setHealthPoints(healtPoints) {
        this.healthPoints = healtPoints;
    }
    getInventory() {
        return this.inventory;
    }
    printInventory() {
        let strInventoryCharacter = "Inventory Character name = " + this.name + "(HP:" + this.healthPoints + ").\n";
        //  console.log( "list character inventory size = " +  this.getInventory().size() );
        for (let index = 0; index < this.getInventory().size(); index++) {
            let item = this.getInventory().getAt(index);
            //  console.log( "Name: " + item.getName() + ", HP: " + item.getHealtpoints() );
            strInventoryCharacter += "Name: " + item.getName() + "Description " + item.getDescription() + ", HP: " + item.getHealtPoints() + "\n";
        }
        return strInventoryCharacter;
    }
    fillInventory() {
        //  read from a map infuture
        console.log("fill character base inventory");
        this.inventory.add(new TSCItem("Item-Character-Base-1", "", 101));
    }
}
class TSCIntelligentCharacter extends TSCCharacter {
    constructor() {
        super("Einstein", 100);
        super.fillInventory();
        this.fillInventory();
        super.printInventory();
    }
    fillInventory() {
        //  read from a map infuture   
        console.log("fill player inventory");
        this.getInventory().add(new TSCItem("Item-Character-Intelligent1", "", 1000));
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
    fillInventory() {
        //  read from a map infuture  
        console.log("fill player inventory");
        this.getInventory().add(new TSCItem("test", "this is a test", null));
    }
    takeInventory(currentRoom, itemOrCharacter) {
        console.log("take from " + currentRoom.getName() + " item = " + itemOrCharacter);
        console.log("before take ==> size inventory current room: " + currentRoom.getInventory().size() + ", player inventory size: " + this.getInventory().size());
        for (let index = 0; index < currentRoom.getInventory().size(); index++) {
            let item = currentRoom.getInventory().getAt(index);
            if (item.getName() === itemOrCharacter) {
                this.getInventory().add(item);
                currentRoom.getInventory().removeByIndex(index);
                console.log("hot phase ==> size inventory current room: " + currentRoom.getInventory().size() + ", player inventory size: " + this.getInventory().size());
                return true;
            }
        }
        console.log("after take ==> size inventory current room: " + currentRoom.getInventory().size() + ", player inventory size: " + this.getInventory().size());
        return false;
    }
    dropInventory(currentRoom, itemOrCharacter) {
        console.log("drop in " + currentRoom.getName() + " my item = " + itemOrCharacter);
        console.log("before take ==> size inventory current room: " + currentRoom.getInventory().size() + ", player inventory size: " + this.getInventory().size());
        for (let index = 0; index < this.getInventory().size(); index++) {
            let item = this.getInventory().getAt(index);
            if (item.getName() === itemOrCharacter) {
                currentRoom.getInventory().add(item);
                this.getInventory().removeByIndex(index);
                console.log("hot phase ==> size inventory current room: " + currentRoom.getInventory().size() + ", player inventory size: " + this.getInventory().size());
                return true;
            }
        }
        console.log("after take ==> size inventory current room: " + currentRoom.getInventory().size() + ", player inventory size: " + this.getInventory().size());
        return false;
    }
    attack(currentRoom, itemOrCharacter) {
        console.log("attack character = " + itemOrCharacter + " in " + currentRoom.getName());
        for (let index = 0; index < currentRoom.getCharacters().size(); index++) {
            let character = currentRoom.getCharacters().getAt(index);
            if (character.getName() === itemOrCharacter) {
                character.setHealthPoints(character.getHealthPoints() - 5);
                this.setHealthPoints(this.getHealthPoints() + 5);
                console.log("hot phase ==> size inventory current room: " + currentRoom.getInventory().size() + ", player inventory size: " + this.getInventory().size());
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
    fillInventory() {
        //  read from a map infuture  
        console.log("fill player inventory");
        this.getInventory().add(new TSCItem("Item-Character-Enemy1", "", 1000));
    }
}
//# sourceMappingURL=characters.js.map