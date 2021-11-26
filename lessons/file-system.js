const fs = require('fs')
const path = require('path')

// console.log('START');

// fs.mkdir(path.resolve(__dirname, 'dir'), (err) =>{
//     if (err) {
//         console.log(err);
//         return;
//     }
//     console.log('Папка создана');
// })

// console.log('END');


// fs.rmdir(path.resolve(__dirname, 'dir'), (err) => {
//     if (err) {
//         throw err
//     }
// })

// fs.writeFile(path.resolve(__dirname, 'test.txt.txt'), 'Запись произошла', (err)=> {
//     if (err) {
//         throw err;
//     }
//     console.log('файл записан');

//     fs.appendFile(path.resolve(__dirname, 'test.txt.txt'), ' Запись добавлена в конец', (err)=> {
//         if (err) {
//             throw err;
//         }
//         console.log('Запись добавлена в конец');
//     })
// })

const writeFileAsync = async (path, data)=> {
    return new Promise((resolve, reject) => fs.writeFile(path, data, (err) => {
        if (err) {
            return reject(err.message)
        }
        resolve()
    }))
}

const appendFileAsync = async (path, data)=> {
    return new Promise((resolve, reject) => fs.appendFile(path, data, (err) => {
        if (err) {
            return reject(err.message)
        }
        resolve()
    }))
}

const readFileAsync = async (path)=> {
    return new Promise((resolve, reject) => fs.readFile(path, {encoding:'utf8'}, (err, data) => {
        if (err) {
            return reject(err.message)
        }
        resolve(data)
    }))
}

const removeFileAsync = async (path)=> {
    return new Promise((resolve, reject) => fs.rm(path, (err) => {
        if (err) {
            return reject(err.message)
        }
        resolve()
    }))
}

// writeFileAsync(path.resolve(__dirname, 'test.txt.txt'), 'data')
// .then(() => appendFileAsync(path.resolve(__dirname, 'test.txt.txt'),'123'))
// .then(() => appendFileAsync(path.resolve(__dirname, 'test.txt.txt'),'320'))
// .then(() => appendFileAsync(path.resolve(__dirname, 'test.txt.txt'),'415'))
// .then(() => readFileAsync(path.resolve(__dirname, 'test.txt.txt')))
// .then(data => console.log(data))
// .catch(err => console.log(err))


// removeFileAsync(path.resolve(__dirname, 'test.txt.txt'))
// .then(() => console.log('file was removed'))

// const test.txt = process.env.TEXT || '';

// writeFileAsync(path.resolve(__dirname, 'test.txt.txt'), test.txt)
//     .then(() => readFileAsync(path.resolve(__dirname, 'test.txt.txt')))
//     .then(data => data.split(' ').length)
//     .then(count => writeFileAsync(path.resolve(__dirname, 'count.txt'), `Колличество слов ${count}`))
//     .then(() => removeFileAsync(path.resolve(__dirname, 'test.txt.txt')))
