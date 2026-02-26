#!/usr/bin/env node
const { Command } = require("commander");
const axios = require("axios");
const fs = require("fs");
const os = require("os");

class Actions {
    greet(n: string) {
        console.log(`Hello ${n}`);
    }
    add(a: string, b: string) {
        console.log(Number(a) + Number(b));
    }
    sub(a: string, b: string) {
        console.log(Number(a) - Number(b));
    }
    mul(a: string, b: string) {
        console.log(Number(a) * Number(b));
    }
    div(a: string, b: string) {
        if (Number(b) === 0) return console.log("Error: div by 0");
        console.log(Number(a) / Number(b));
    }
    fileinfo(p: string) {
        try {
            const s = fs.statSync(p);
            console.log(`Size: ${s.size} bytes\nCreated: ${s.birthtime}`);
        } catch (e) {
            console.log("Error: file not found");
        }
    }
    sysinfo() {
        console.log(`OS: ${os.platform()} ${os.arch()}\nFree Mem: ${(os.freemem() / 1024 / 1024).toFixed(2)} MB`);
    }
    async quote() {
        try {
            const r = await axios.get("https://zenquotes.io/api/random");
            console.log(`"${r.data[0].q}" - ${r.data[0].a}`);
        } catch (e) {
            console.log("Error: api fail");
        }
    }
    async github(u: string) {
        try {
            const r = await axios.get(`https://api.github.com/users/${u}`);
            console.log(`GitHub: ${r.data.login}\nRepos: ${r.data.public_repos}\nFollowers: ${r.data.followers}`);
        } catch (e) {
            console.log("Error: user not found");
        }
    }
    async weather(c: string) {
        try {
            const r = await axios.get(`https://wttr.in/${c}?format=3`);
            console.log(r.data.trim());
        } catch (e) {
            console.log("Error: weather api fail");
        }
    }
}

class App {
    constructor() {
        const prog = new Command();
        const act = new Actions();
        prog.command("greet <n>").action((n: string) => act.greet(n));
        prog.command("add <a> <b>").action((a: string, b: string) => act.add(a, b));
        prog.command("sub <a> <b>").action((a: string, b: string) => act.sub(a, b));
        prog.command("mul <a> <b>").action((a: string, b: string) => act.mul(a, b));
        prog.command("div <a> <b>").action((a: string, b: string) => act.div(a, b));
        prog.command("fileinfo <p>").action((p: string) => act.fileinfo(p));
        prog.command("sysinfo").action(() => act.sysinfo());
        prog.command("quote").action(() => act.quote());
        prog.command("github <u>").action((u: string) => act.github(u));
        prog.command("weather <c>").action((c: string) => act.weather(c));
        prog.parse();
    }
}
new App();
