const fs = require('fs'), ini = require('ini')
module.exports = ini.parse(fs.readFileSync('./settings.ini', 'utf-8'))
