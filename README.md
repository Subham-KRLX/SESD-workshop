# SESD Workshop Project - My CLI Tool

A TypeScript CLI built for the SESD workshop using OOP. It handles math, system checks, and integrates with 3 APIs.

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

## Bonus Features (Flags & Options)

*   **Global Version**: Use `mycli -v` or `mycli --version` to see the current version.
*   **Shout Mode**: Use `mycli greet <name> --shout` to get a LOUD greeting.
*   **Simple Sysinfo**: Use `mycli sysinfo --simple` to get just the platform name.
