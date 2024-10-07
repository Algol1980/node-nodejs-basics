import path from "path";
import {fileURLToPath} from "url";
import fs from "node:fs";
import {stdout} from "node:process";

const read = async () => {
    const dirname = path.dirname(fileURLToPath(import.meta.url))
    const filePath = path.join(dirname, 'files', 'fileToRead.txt')
    const readSteam = fs.createReadStream(filePath)
    readSteam.on('data', (chunk) => {
        stdout.write(chunk)
    } )
};

await read();
