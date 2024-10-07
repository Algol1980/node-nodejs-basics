import * as fsHelper from './fsHelper.js'
import path from "path";
import fs from 'node:fs/promises'
const rename = async () => {
    const dirPath = await fsHelper.getDirPath()
    const wrongFileName = 'wrongFilename.txt'
    const properFilename = 'properFilename.md'
    const wrongPath = path.join(dirPath, 'files', wrongFileName)
    const properPath = path.join(dirPath, 'files', properFilename)
    if (!await fsHelper.isPathExist(wrongPath) || await fsHelper.isPathExist(properPath)) {
        throw new Error('FS operation failed')
    }
    await fs.rename(wrongPath, properPath)

};

await rename();
