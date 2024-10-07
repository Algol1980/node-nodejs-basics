import {getDirPath} from "./fsHelper.js";
import path from "path";
import fs from 'node:fs/promises'

const list = async () => {
    const dirPath = path.join(await getDirPath(), 'files')
    try {
        const dirList = await fs.readdir(dirPath, {withFileTypes: true})
        dirList.forEach(item => {
            if (item.isFile()) {
                console.log(item.name)
            }
        })
    } catch (e) {
        throw new Error('FS operation failed')
    }

};

await list();
