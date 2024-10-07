import path from "path";
import {fileURLToPath} from "url";
import fs from "node:fs";
import {createGunzip} from "node:zlib";

const decompress = async () => {
    const dirname = path.dirname(fileURLToPath(import.meta.url))
    const filePathRead = path.join(dirname, 'files', 'archive.gz')
    const filePathWrite = path.join(dirname, 'files', 'fileToCompress1.txt')
    const readSteam = fs.createReadStream(filePathRead)
    const writeStream = fs.createWriteStream(filePathWrite)
    const transform = createGunzip()
    readSteam.pipe(transform).pipe(writeStream)
};

await decompress();
