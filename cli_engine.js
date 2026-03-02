const {Command} = require('commander');
class CliEngine {
    constructor() {
        this.program = new Command();
    }

    registerCommand(command) {
        this.program.addCommand(command);
    }
}
