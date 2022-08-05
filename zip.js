const archiver = require("archiver")
const fs = require("fs")

const paths = ["./test.txt", "./test2.txt"]
const outputfile = "./compressed.zip"

const inputSources = paths.map(path => ({
    readStream: fs.createReadStream(path),
    name: path.split('/').pop()     // getFile name
}))
const outputStream = fs.createWriteStream(outputfile)

const archive = archiver('zip', {
    zlib: { level: 9 }
});
archive.pipe(outputStream)
inputSources.forEach(src => archive.append(src.readStream, { name: src.name }))
archive.finalize()