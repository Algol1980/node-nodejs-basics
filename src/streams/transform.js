import {Transform} from "node:stream";
import {stdout} from "node:process";

const transform = async () => {
    const transformReverse = new Transform(
        {
            transform(chunk, encoding, callback) {
                this.push(chunk.toString().split('').reverse().join(''))
                callback()
            }
        }
    )
    process.stdin.pipe(transformReverse).pipe(stdout)
};

await transform();
