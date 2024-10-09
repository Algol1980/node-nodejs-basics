import * as os from "node:os";
import {Worker, isMainThread} from "node:worker_threads";
import path from "path";
import {fileURLToPath} from "url";

const performCalculations = async () => {
    if (isMainThread) {
        const cpuCount = os.cpus().length,
            workerPromises = []
        let startNumber = 10,
            limit = startNumber + cpuCount - 1

        for (let i = startNumber; i <= limit; i++) {
            workerPromises.push(create(i))
        }

        const results = await Promise.all(workerPromises)
        results.forEach((result) => {
            console.log(result)
        })
    }

};

await performCalculations();

function create(threadNumber) {
    const dirPath = path.dirname(fileURLToPath(import.meta.url)),
        workerPath = path.join(dirPath, 'worker.js')
    return new Promise((resolve, reject) => {
        const worker = new Worker(workerPath, {workerData: threadNumber})
        worker.on('message', (result) => {
            resolve({
                status: 'resolved',
                data: result
            })
        })
        worker.on('error', (err) => {
            reject({
                status: 'error',
                data: null
            })
        })
    })
}
