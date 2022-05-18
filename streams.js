const fs = require('fs')
const readStream = fs.createReadStream('./docs/doc3.txt', {encoding: 'utf-8'})
const writeStream = fs.createWriteStream('./docs/doc4.txt', )
// readStream.on('data', (chunk)=>{
//  console.log('--- NEW CHUNK ---');
// console.log(chunk.toString());
// writeStream.write(chunk)
// writeStream.write('\n New Chunk\n')
// })

//piping from a readable file to a writable file
readStream.pipe(writeStream)