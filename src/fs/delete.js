import * as fsHelper from './fsHelper.js'
import {rm} from 'node:fs/promises'
import path from "path";
const remove = async () => {
    const dirPath = await fsHelper.getDirPath(),
        pathToDelete = path.join(dirPath, 'files', 'fileToRemove.txt')

    if (!await fsHelper.isPathExist(pathToDelete)) {
        throw new Error('FS operation failed')
    }
    await rm(pathToDelete)

};

await remove();
