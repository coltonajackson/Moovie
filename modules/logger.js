const EventEmitter = require('events');
const uuid = require('uuid');

class Logger extends EventEmitter {
    log(data) {
        this.emit('data', { id: uuid.v4(), data })
    }
}

module.exports = Logger;