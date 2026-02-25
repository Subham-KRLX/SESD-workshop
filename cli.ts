#!/usr/bin/env node
const { Command } = require("commander")
const axios = require("axios")
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

program.command("joke")
.action(async()=>{
    try{
        const res = await axios.get("https://zenquotes.io/api/random")
        console.log(res)
    }
    catch(err){
        console.log(err)
    }
})
program.parse();
