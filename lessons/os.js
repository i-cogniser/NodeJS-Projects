const os = require('os')
const cluster = require('cluster')

// console.log(os.platform());
// console.log(os.arch());
// console.log(os.cpus().length);

// if (cluster.isMaster) {
//     for (let i = 0; i < os.cpus().length - 3; i++) {
//         cluster.fork()
//     }
//
//     cluster.on("exit", (worker) => {
//         `worker with pid = pid ${worker.process.pid} ded`
//         if (code=== )
//         cluster.fork()
//     })
//
// } else {
//     console.log(`worker with pid = ${process.pid} запущен`);
//
//     setInterval(() => {
//         console.log(`worker with pid = ${process.pid} еще работает`);
//     }, 5000)
// }

