const Discord = require('discord.js')
const {prefix , version, token} = require('./ini.js')

const client = new Discord.Client()

// bot startup
client.on('ready', () => {
    console.log('ready')

})

// command handler
client.on('message', message => {
    if (message.author.bot || message.channel.type === 'dm' || !message.content.startsWith(prefix)) return;



})

client.login(token).then(r => {
    console.log('Logged in')
});