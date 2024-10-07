import path from "path";
import {fileURLToPath} from "url";
import fs from "node:fs";

const write = async () => {
    const dirname = path.dirname(fileURLToPath(import.meta.url))
    const filePath = path.join(dirname, 'files', 'fileToWrite.txt')
    const writeSteam = fs.createWriteStream(filePath)
    process.stdin.pipe(writeSteam)
};

await write();
