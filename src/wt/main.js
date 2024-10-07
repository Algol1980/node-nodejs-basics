import * as os from "node:os";
import {Worker, isMainThread} from "node:worker_threads";

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
    return new Promise((resolve, reject) => {
        const worker = new Worker('./worker.js', {workerData: threadNumber})
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
