import {getDirPath} from "./fsHelper.js";
import {join} from "path";
import {writeFile} from 'node:fs/promises'

const create = async () => {
    const filePath = join(await getDirPath(), 'files',  'fresh.txt');
    try {
        await writeFile(filePath, 'I am fresh and young', {flag: 'wx'});
    } catch (e) {
        throw new Error('FS operation failed');
    }
};

await create();
