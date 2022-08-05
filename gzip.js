const fs = require("fs")
const { pipeline } = require("stream")
const zlib = require("zlib")

const path = "./test.txt"
const readableStream = fs.createReadStream(path)
const writableStream = fs.createWriteStream(`${path}.gz`)

const gzip = zlib.createGzip()
pipeline(readableStream, gzip, writableStream, (err) => {
    console.log("Error occurred")
    console.log(err)
})