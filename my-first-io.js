const fs = require('fs')

let content = fs.readFileSync(process.argv[2])

const nLines = content.toString().split('\n').length - 1

console.log(nLines)