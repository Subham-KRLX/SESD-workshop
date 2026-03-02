const {command} = require('commander');

class CLIEngine {
    program;

    constructor() {
        this.program =  new Command();
    }
    registerCommand(commands) {
        commands.forEach(commandClass => {
            const commandInstance = new commandClass(this.program);
        })
    }
}