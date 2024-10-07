import path from "path";
import {fileURLToPath} from "url";
import fs from "node:fs/promises";

const getDirPath = async () => {
    return path.dirname(fileURLToPath(import.meta.url));
}

const isPathExist = async (path) => {
    try {
        await fs.stat(path)
        return true
    } catch (e) {
        return false
    }
}

const isDirectoryExist = async (path) => {
    try {
        const pathStat = await fs.stat(path)
        return pathStat.isDirectory()
    } catch (e) {
        return false
    }
}

export {getDirPath, isDirectoryExist, isPathExist};
