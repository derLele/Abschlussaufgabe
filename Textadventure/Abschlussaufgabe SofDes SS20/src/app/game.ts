class TSCGame { 

    private gameRunning: boolean = true;
    private mainApp: TSCApp;
    private gameCommands: TSCCommands;
    private player: TSCPlayer;

    private allRooms: Array<TSCRoom> = [new TSCRoomMain, new TSCRoomNorth, new TSCRoomSouth, new TSCRoomEast, new TSCRoomWest ];
    
    private currentRoom: TSCRoom;

    private startMessageText: string = "Abschlussaufgabe SofDes SS20 \n";
    private storyText: string = "";

    constructor( app: TSCApp ) {
        this.mainApp = app;
        console.log("--->TSCGame constructor ... " );

        //  own game logic
        this.gameCommands = new TSCCommands();
        this.currentRoom  = this.allRooms[0]; // room main
        this.player       = new TSCPlayer();

        this.storyText = this.startMessageText + this.currentRoom.getDescription(); 
        this.mainApp.printGameText( this.gameTxt() );
        this.storyText = this.currentRoom.getDescription();
    }  

    public gameTxt(): string {
        return this.storyText;
    }

    public executeGameCommand( strCommand: string, itemOrCharacter: string ): void {

        let commands: TSCCommands = this.gameCommands;
        let longCommand: string = strCommand;

        //  game was quit
        if ( !this.gameRunning )
            return;

        if ( commands.isCommandAvailable( strCommand ) ) {
            //  comment out in future?
            if ( strCommand.length === 1) {
                longCommand = commands.getFullCommand( strCommand );
                //this.mainApp.printGameText( "<" + longCommand + ">" + " command was entered" );
            }
            /*else
                this.mainApp.printGameText( "<" + strCommand + ">" + " command was entered" );*/
        }
        else {
            this.mainApp.printGameText("Commando not defined!");
        }

        //  ["command", "quit", "look", "north", "south", "east", "west", "inventory", "take", "drop", "attack"]
        switch ( commands.getCommandIndex( longCommand ) ) {
            case 0: //  command
                //this.mainApp.clearGameText();
                this.gameCommands.printAllCommands( this.mainApp );
                break;

            case 1: //  quit
                this.mainApp.clearGameText();
                this.mainApp.printGameText( "End of Game" );
                this.gameRunning = false;
                break;

            case 2: //  look
                //this.mainApp.clearGameText();
                this.mainApp.printGameText( this.gameTxt() );
                break;

            case 3: //  north
                //this.mainApp.clearGameText();   
                if ( this.currentRoom.getName() === "Main" )   
                    this.currentRoom = this.allRooms[1]; //  room north
                else if ( this.currentRoom.getName() === "Room-South")
                    this.currentRoom = this.allRooms[0]; //  room main
                else {
                    this.mainApp.printGameText( "No exit, sorry." );
                    return;
                }

                this.storyText = this.currentRoom.getDescription();
                this.mainApp.printGameText( this.gameTxt() );
                break;

            case 4: //  south
                //this.mainApp.clearGameText();   
                if ( this.currentRoom.getName() === "Main" )   
                    this.currentRoom = this.allRooms[2]; //  room south
                else if ( this.currentRoom.getName() === "Room-North")
                    this.currentRoom = this.allRooms[0]; //  room main
                else {
                        this.mainApp.printGameText( "No exit, sorry." );
                        return;
                    }

                this.storyText = this.currentRoom.getDescription();
                this.mainApp.printGameText( this.gameTxt() );
                break;  
                
            case 5: //  east
                //this.mainApp.clearGameText();   
                if ( this.currentRoom.getName() === "Main" )   
                    this.currentRoom = this.allRooms[3]; //  room east
                else if ( this.currentRoom.getName() === "Room-West")
                    this.currentRoom = this.allRooms[0]; //  room main
                else {
                        this.mainApp.printGameText( "No exit, sorry." );
                        return;
                    }

                this.storyText = this.currentRoom.getDescription();
                this.mainApp.printGameText( this.gameTxt() );
                break;

            case 6: //  west
                //this.mainApp.clearGameText();   
                if ( this.currentRoom.getName() === "Main" )   
                    this.currentRoom = this.allRooms[4]; //  room west
                else if ( this.currentRoom.getName() === "Room-East")
                    this.currentRoom = this.allRooms[0]; //  room main
                else {
                        this.mainApp.printGameText( "No exit, sorry." );
                        return;
                    }

                this.storyText = this.currentRoom.getDescription();
                this.mainApp.printGameText( this.gameTxt() );
                break;   
                
            case 7: //  inventory
                this.mainApp.printGameText( this.currentRoom.printInventory() );
                this.mainApp.printGameText( this.player.printInventory() );
                break;

            case 8: //  take
                if ( !this.player.takeInventory( this.currentRoom, itemOrCharacter ) ) {
                    this.mainApp.printGameText( "take command failed, item not found" );    
                }
                break;

            case 9: //  drop
                if ( !this.player.dropInventory( this.currentRoom, itemOrCharacter )) {
                    this.mainApp.printGameText( "drop command failed, item not found" );     
                }
                break;

            case 10: //  attack
                this.player.attack( this.currentRoom, itemOrCharacter );
                this.mainApp.printGameText( this.currentRoom.printCharacters() );
                break;

            default:
                console.log( "Command unknown ...");
                break;
        }
    }
}
