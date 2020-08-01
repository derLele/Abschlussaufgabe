"use strict";
class TSCInventory {
    constructor(name) {
        this.name = name;
        this.bucket = new Array();
        //  console.log( "TSCInventory: " + this.name );
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
//# sourceMappingURL=inventory.js.map