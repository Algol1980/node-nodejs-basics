import {argv, stdout} from "node:process";

const parseArgs = () => {
    const args = argv.slice(2)
    for (let i = 0; i < args.length; i += 2) {
        stdout.write(`${args[i]} is ${args[i + 1]} `)
    }

};

parseArgs();
