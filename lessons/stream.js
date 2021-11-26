const fs = require('fs');
const path = require('path')


// fs.readFile(path.resolve(__dirname, 'test.txt'), (err, data) => {
//     if (err) {
//         throw err
//     }
//     console.log(data);
// })

// const stream = fs.createReadStream(path.resolve(__dirname, 'test2.txt'))
//
// // chunk default 64kb
// stream.on('data', (chunk => {
//     console.log(chunk);
// }))
//
// stream.on('end', () => console.log('закончили считать') )
// stream.on('open', () => console.log('начали считать') )
// stream.on('error', (e) => console.log(e) )

// Readable - чтение
// Writable - Запись
// Duplex - Запись + Чтение
// Transform - Такие же как Duplex но вмомент выполнения данные могут както изменнять

// const WritableStream = fs.createWriteStream(path.resolve(__dirname, 'test2.txt'))
//
// for (let i = 0; i < 20; i++) {
//     WritableStream.write(i + '\n')
// }
//
// WritableStream.end()
// WritableStream.close()
// WritableStream.destroy()
// WritableStream.on('error')

// const http = require('http');
//
// http.createServer((req, res) =>{
//     // req - readable stream
//     // req - writable stream
//     const stream = fs.createReadStream(path.resolve(__dirname, 'test.txt'))
//
//     // стрим закончит читать раньше чем пользватель скачает решение неподходит
//     // stream.on('data', chunk => res.write(chunk))
//     // stream.on('end', chunk => res.end(chunk))
//     stream.pipe(res)
// })

