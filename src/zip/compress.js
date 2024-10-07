import path from "path";
import {fileURLToPath} from "url";
import fs from "node:fs";
import { createGzip } from "node:zlib";

const compress = async () => {
    const dirname = path.dirname(fileURLToPath(import.meta.url))
    const filePathRead = path.join(dirname, 'files', 'fileToCompress.txt')
    const filePathWrite = path.join(dirname, 'files', 'archive.gz')
    const readSteam = fs.createReadStream(filePathRead)
    const writeStream = fs.createWriteStream(filePathWrite)
    const transform = createGzip()
    readSteam.pipe(transform).pipe(writeStream)
};

await compress();
