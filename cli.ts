#!/usr/bin/env node
const { Command } = require("commander")
const program = new Command()
program
    .command("greet <name>")
    .action((name) => {
        console.log(`Hello ${name}`);
    });

program
    .command("add <num1> <num2>")
    .action((num1, num2) => {
        console.log(Number(num1) + Number(num2));
    });

program
    .command("sub <num1> <num2>")
    .action((num1, num2) => {
        console.log(Number(num1) - Number(num2));
    });

program
    .command("mul <num1> <num2>")
    .action((num1, num2) => {
        console.log(Number(num1) * Number(num2));
    });

program.parse();
