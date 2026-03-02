const {execSync} = require('child_process');
class init_ts{
    program;
    constructor(program) {
        this.program = program;
}
register(program) {
    this.program
    .command('init.ts <foldername>')
    .action((foldername) => { this.IntializesTS(foldername); })
}
IntializesTS(foldername){
    this.run(`mkdir ${foldername}`)
    this.run(`cd ${foldername} && npm init -y`)
    this.run(`cd ${foldername} && npm install typescript @types/node --save-dev`)
    this.run(`cd ${foldername} && npx tsc --init`)
    this.run(`cd ${foldername} && touch index.ts`)
}
run(command) {
    execSync(command,{stdio:"inherit"})
}
}