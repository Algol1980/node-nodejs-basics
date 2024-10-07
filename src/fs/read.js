import path from "path";
import {getDirPath} from "./fsHelper.js"
import {readFile} from 'node:fs/promises'

const read = async () => {
    const filePath = path.join(await getDirPath(), 'files', 'fileToRead.txt')
    try {
        const fileContent = await readFile(filePath)
        process.stdout.write(fileContent)
    } catch (e) {
        throw new Error('FS operation failed')
    }
};

await read();
