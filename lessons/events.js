// const Emitter = require('events');
//
// const emitter = new Emitter();
//
// const callBack = (data, second, third) => {
//     console.log('вы прислали сообщение ' + data);
//     console.log('второй аргумент ' + second);
// }
//
// emitter.emit('message', callBack)
//
// emitter.emit('message')
// emitter.emit('message')
// emitter.emit('message')
// emitter.emit('message')
//
//
// emitter.removeAllListeners();
// emitter.removeListener('message', callBack)

// const MESSAGE = process.env.message || ' ';
//
// if (MESSAGE) {
//     emitter.emit('message', MESSAGE, 123);
// } else {
//     emitter.emit('message', 'вы не указали сообщение');
// }