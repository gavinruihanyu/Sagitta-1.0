const fs = require('fs'), ini = require('ini')

module.exports = function(f) {
    return ini.parse(fs.readFileSync('./settings.ini', 'utf-8'))
}