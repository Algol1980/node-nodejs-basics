import fs from 'node:fs'
import path from "path";
import {fileURLToPath} from "url";
import {createHash} from "node:crypto";
import {Transform} from 'node:stream'
import {stdout} from "node:process";
const calculateHash = async () => {
    const dirname = path.dirname(fileURLToPath(import.meta.url))
    const filePath = path.join(dirname, 'files', 'fileToCalculateHashFor.txt')
    const readSteam = fs.createReadStream(filePath)
    const cryptoTransform = new Transform({
        transform(chunk, encoding, callback) {
            this.push(createHash('sha256').update(chunk).digest('hex'))
            callback()
        }
    })
    readSteam.pipe(cryptoTransform).pipe(stdout)

};

await calculateHash();
