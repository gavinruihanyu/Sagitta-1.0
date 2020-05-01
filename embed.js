const {RichEmbed} = require('discord.js');
const ini = require('./ini')

baseColor = ini.color

module.exports = options => {
    if (options.color) {
        return {
            color: options.color,
            title: options.title,
            description: options.description,
            timestamp: new Date()
        }
    } else {
        const embed = options
        embed.color = baseColor

        if (options.thumbnail) {
            embed.thumbnail = {url: embed.thumbnail}
        }

        return embed
    }
}