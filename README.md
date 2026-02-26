# SESD Workshop Project - My CLI Tool

Hey! This is the CLI I built for the SESD workshop. It's a handy little tool that handles a bunch of stuff like math, checking up on my system, and even grabbing info from some APIs.

I've written it using TypeScript and stuck to some basic OOP concepts (classes were mandatory!) to keep the code clean and easy to follow.

## Getting Started

If you want to run this locally, here's what you need to do:

1.  **Get the packages**:
    ```bash
    npm install
    ```
2.  **Build the project**:
    ```bash
    npx tsc
    ```
3.  **Use it globally**:
    ```bash
    npm link
    ```

## What it can do

I've added about 10 custom commands so far. You just type `mycli` followed by whatever you want.

### Math (The basics)
*   `mycli add <n1> <n2>` - Just adds two numbers.
*   `mycli sub <n1> <n2>` - Subtraction.
*   `mycli mul <n1> <n2>` - Multiplication.
*   `mycli div <n1> <n2>` - Dividing numbers (don't try zero!).

### System Stuff
*   `mycli greet <name>` - Quick hello.
*   `mycli sysinfo` - Shows what OS I'm on and how much RAM is free.
*   `mycli fileinfo <path>` - Check out a file's size and when I created it.

### Cool API Things (The advanced part)
*   `mycli quote` - Grabs a random motivational quote from ZenQuotes.
*   `mycli github <user>` - Peeks at someone's GitHub stats (repos, followers, etc).
*   `mycli weather <city>` - Quick weather check using wttr.in.
