const Logger = class Logger {
    date = new Date(Date.now())

    getDateLog(){
        return `${this.date.getFullYear()}-${this.date.getMonth() + 1 < 10? "0" + `${this.date.getMonth() + 1}` : this.date.getMonth() + 1}-${this.date.getDate() < 10? "0" + `${this.date.getDate()}`: this.date.getDate()}`;
    }
    getClockLog(){
        return `${this.date.getHours()}:${this.date.getMinutes()}:${this.date.getSeconds() < 10? "0" + `${this.date.getSeconds()}`: this.date.getSeconds() }`
    }
    info(message) {
        return `${this.getDateLog()} ${this.getClockLog()} INFO ${message} \r\n`
    }
    debug(message) {
        return `${this.getDateLog()} ${this.getClockLog()} DEBUG ${message} \r\n`
    }
    warning(message) {
        return `${this.getDateLog()} ${this.getClockLog()} WARNING ${message} \r\n`
    }
    error(message) {
        return `${this.getDateLog()} ${this.getClockLog()} ERROR ${message} \r\n`
    }
    critical(message) {
        return `${this.getDateLog()} ${this.getClockLog()} CRITICAL ${message} \r\n`
    }
}

const createLog = function createLog(msg,pathToFile){
    const fs = require('fs')

    fs.writeFile(pathToFile ,msg,{encoding:'utf-8',flag:"a+"},() => {});
}

module.exports = {
    createLog,
    Logger
}
