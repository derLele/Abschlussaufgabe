//  entry class
class TSCApp {

    private appName: string = "Abschlussaufgabe SofDes SS20" + "\n";
    private tsGame: TSCGame;

    private textOutput: HTMLTextAreaElement;
    private commandInput: HTMLInputElement;
    
    constructor() {
        console.log("-->TSCApp constructor ... ");

        //  interaction with the browser
        this.textOutput = document.getElementById("txtOut") as HTMLTextAreaElement;
        this.commandInput = document.getElementById("cmdIn") as HTMLInputElement;
        
        //  attach event listener
        this.createUserEvents();

        this.tsGame = new TSCGame( this );
        console.log( this.tsGame );
    }

    public name(): string {
        return this.appName;
    }

    public printGameText( textToDisplay: string ): void {   
        //  text limit in future?    
        
        //  with text history, "+=" ==> "=" without
        this.textOutput.value += textToDisplay + "\n";
        this.textOutput.scrollTop = this.textOutput.scrollHeight;
    }  

    public clearGameText( ): void {     
        this.textOutput.value = "" ;
    } 

    private createUserEvents(): void {
        let commandInput: HTMLInputElement = this.commandInput;
            
        commandInput.addEventListener("keydown", this.keyEventHandler);
    }
    
    private keyEventHandler = (e: KeyboardEvent) => { 
        let commandInput: HTMLInputElement = this.commandInput;
        let command: string = "";
        let param: string = "";
        
        //  check <ENTER> 
        if ( e.keyCode == 13 ) {
            let arrCommand: Array<string> = commandInput.value.split( " " );

            //  no command
            if ( arrCommand.length == 0 ) {
               return;
            }
            //  normal command
            else if (arrCommand.length == 1) {
                console.log( "normal command ==> " + arrCommand ); 
                command = arrCommand[0].toString();
            }
            else {
                console.log( "special command with param==> " + arrCommand );
                command = arrCommand[0].toString();
                param = arrCommand[1].toString();
            }
            
            //  execute game command
            this.tsGame.executeGameCommand( command, param );
            //  delete last input
            commandInput.value = "";  
        }           
    }  
}

//  document onload/reload
window.onload = () => {
    console.log("->Create App window.onload ...");

    //  create web app
    let app: TSCApp = new TSCApp();

    console.log( `---->TSCApp ${app.name()} started ...` );
};




