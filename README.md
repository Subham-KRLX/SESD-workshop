# SESD Workshop CLI

A powerful, object-oriented CLI tool built with TypeScript, featuring 10 commands and 3 API integrations.

## Setup Instructions

1.  **Install dependencies**:
    ```bash
    npm install
    ```
2.  **Compile TypeScript**:
    ```bash
    npx tsc
    ```
3.  **Link globally**:
    ```bash
    npm link
    ```

## Available Commands

### Math Operations
- `mycli add <a> <b>`: Add two numbers
- `mycli sub <a> <b>`: Subtract two numbers
- `mycli mul <a> <b>`: Multiply two numbers
- `mycli div <a> <b>`: Divide two numbers

### System Info
- `mycli greet <name>`: Simple greeting
- `mycli sysinfo`: Display OS and memory info
- `mycli fileinfo <path>`: Display file size and creation date

### API Integrations
- `mycli quote`: Fetch a random quote (ZenQuotes API)
- `mycli github <user>`: Fetch GitHub user stats (GitHub API)
- `mycli weather <city>`: Fetch current weather (wttr.in API)
