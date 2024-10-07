import {join} from "path";
import * as fs from 'node:fs/promises'
import {isPathExist, getDirPath} from "./fsHelper.js";

const copy = async () => {
        const sourceDirPath = join(await getDirPath(), 'files');
        const destinationDirPath = join(await getDirPath(), 'files_copy');
        if (!await isPathExist(sourceDirPath) || await isPathExist(destinationDirPath)) {
            throw new Error('FS operation failed')
        }
        await fs.cp(sourceDirPath, destinationDirPath, {recursive: true}).catch(() => {
                throw new Error('FS operation failed')
            }
        )
    }
;

await copy();
