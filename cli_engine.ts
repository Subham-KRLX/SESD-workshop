const { Command } = require('commander');

class CLIEngine {
    program;

    constructor() {
        this.program =  new Command();
    }
    registerCommand(commands) {
        commands.forEach(commandClass => {
            const commandInstance = new commandClass(this.program);
            commandInstance.register(this.program)
        })
    }
    run(){
        this.program.parse()
    }
}
module.exports = { CLIEngine }
export {}