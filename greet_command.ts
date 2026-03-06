class GreetCommand {
    program;
constructor(program) {
    this.program = program;
}
    greetName(name: string) {
        console.log(`Hello, ${name}!`);
        // return `Hello, ${name}!`;
    }
    async fetchJoke(): Promise<string> {
        return "Why do programmers prefer dark mode? Because light attracts bugs!";
    }

    register(program) {
        this.program = program

        this.program
            .command('greet <name>')
            .action((name) => { this.greetName(name); });

        program.command("joke")
            .action(async () => {
                const joke = await this.fetchJoke();
                console.log(joke)
            });
    }
}

module.exports = { GreetCommand }
export {}
