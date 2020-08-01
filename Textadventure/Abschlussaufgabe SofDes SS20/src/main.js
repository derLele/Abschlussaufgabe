"use strict";
//  entry class
class TSCApp {
    constructor() {
        this.appName = "Abschlussaufgabe SofDes SS20" + "\n";
        this.keyEventHandler = (e) => {
            let commandInput = this.commandInput;
            let command = "";
            let param = "";
            //  check <ENTER> 
            if (e.keyCode == 13) {
                let arrCommand = commandInput.value.split(" ");
                //  no command
                if (arrCommand.length == 0) {
                    return;
                }
                //  normal command
                else if (arrCommand.length == 1) {
                    console.log("normal command ==> " + arrCommand);
                    command = arrCommand[0].toString();
                }
                else {
                    console.log("special command with param==> " + arrCommand);
                    command = arrCommand[0].toString();
                    param = arrCommand[1].toString();
                }
                //  execute game command
                this.tsGame.executeGameCommand(command, param);
                //  delete last input
                commandInput.value = "";
            }
        };
        console.log("-->TSCApp constructor ... ");
        //  interaction with the browser
        this.textOutput = document.getElementById("txtOut");
        this.commandInput = document.getElementById("cmdIn");
        //  attach event listener
        this.createUserEvents();
        this.tsGame = new TSCGame(this);
        console.log(this.tsGame);
    }
    name() {
        return this.appName;
    }
    printGameText(textToDisplay) {
        //  text limit in future?    
        //  with text history, "+=" ==> "=" without
        this.textOutput.value += textToDisplay + "\n";
        this.textOutput.scrollTop = this.textOutput.scrollHeight;
    }
    clearGameText() {
        this.textOutput.value = "";
    }
    createUserEvents() {
        let commandInput = this.commandInput;
        commandInput.addEventListener("keydown", this.keyEventHandler);
    }
}
//  document onload/reload
window.onload = () => {
    console.log("->Create App window.onload ...");
    //  create web app
    let app = new TSCApp();
    console.log(`---->TSCApp ${app.name()} started ...`);
};
//# sourceMappingURL=main.js.map