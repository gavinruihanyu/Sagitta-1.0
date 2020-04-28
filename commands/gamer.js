const got = require('got');
const {apis} = require('../ini.js')

module.exports = (message, args) => {
    if (!args.length) {
        return message.reply('fucking stupid candy ass faggot')
    }

    message.reply(args[0])
}