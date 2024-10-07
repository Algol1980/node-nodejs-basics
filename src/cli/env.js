import {env, stdout} from "node:process";

const parseEnv = () => {
    Object.keys(env).forEach((item) => {
        stdout.write(`RSS_${item}=${env[item]}; `)
    })
};

parseEnv();
