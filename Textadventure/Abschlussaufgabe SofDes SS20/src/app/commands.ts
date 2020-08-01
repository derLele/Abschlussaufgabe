class TSCCommands {

    private longCommands: Array<string> = ["command", "quit", "look", "north", "souce", "east", "west", "inventory", "take", "drop", "attack"];
    private shortCommands: Array<string> = ["c", "q", "l", "n", "s", "e", "w", "i", "t", "d", "a"];

    /*public constructor () {
   
    }*/

    public isCommandAvailable( command: string ): boolean {
        let longCommandFound: boolean = false;
        let shortCommandFound: boolean = false;
        for (let cmd of this.longCommands ) {
            if ( command === cmd ) {
                console.log(cmd);
                longCommandFound = true;
            } 
        }
        for (let cmd of this.shortCommands ) {
            if ( command === cmd ) {
                console.log(cmd);
                shortCommandFound = true;
            } 
        }
        return longCommandFound || shortCommandFound;
    }

    public getFullCommand( shortCommand: string ): string {
        let index: number = 0;
        for (let cmd of this.shortCommands ) {
            if ( shortCommand === cmd ) {
                return this.longCommands[index];
            } 
            index++;
        } 
        return "";
    }

    public getCommandIndex( command: string ): number {
        let index: number = 0;
        for (let cmd of this.longCommands ) {
            if ( command === cmd ) {
                console.log(cmd);
                return index;
            } 
            index++;
        }
        return -1;
    }

    public printAllCommands( app: TSCApp ): void {
        let displayText: string = "*************************\n* List of all commands: *\n*************************\n\n";
        let index: number = 0;

        for (let cmd of this.longCommands ) {
            displayText += cmd + "(" + this.shortCommands[index] + ")" + "\n";
            index++;
        }
        app.printGameText( displayText );
    }
}  //  class TSCCommands