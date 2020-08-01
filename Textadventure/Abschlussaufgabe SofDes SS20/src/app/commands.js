"use strict";
class TSCCommands {
    constructor() {
        this.longCommands = ["command", "quit", "look", "north", "souce", "east", "west", "inventory", "take", "drop", "attack"];
        this.shortCommands = ["c", "q", "l", "n", "s", "e", "w", "i", "t", "d", "a"];
    }
    /*public constructor () {
   
    }*/
    isCommandAvailable(command) {
        let longCommandFound = false;
        let shortCommandFound = false;
        for (let cmd of this.longCommands) {
            if (command === cmd) {
                console.log(cmd);
                longCommandFound = true;
            }
        }
        for (let cmd of this.shortCommands) {
            if (command === cmd) {
                console.log(cmd);
                shortCommandFound = true;
            }
        }
        return longCommandFound || shortCommandFound;
    }
    getFullCommand(shortCommand) {
        let index = 0;
        for (let cmd of this.shortCommands) {
            if (shortCommand === cmd) {
                return this.longCommands[index];
            }
            index++;
        }
        return "";
    }
    getCommandIndex(command) {
        let index = 0;
        for (let cmd of this.longCommands) {
            if (command === cmd) {
                console.log(cmd);
                return index;
            }
            index++;
        }
        return -1;
    }
    printAllCommands(app) {
        let displayText = "*************************\n* List of all commands: *\n*************************\n\n";
        let index = 0;
        for (let cmd of this.longCommands) {
            displayText += cmd + "(" + this.shortCommands[index] + ")" + "\n";
            index++;
        }
        app.printGameText(displayText);
    }
} //  class TSCCommands
//# sourceMappingURL=commands.js.map