//管道流
var fs = require("fs")

var readStream = fs.createReadStream('./data/input.txt')
var writeStrem = fs.createWriteStream('./data/output1.txt')
readStream.pipe(writeStrem)