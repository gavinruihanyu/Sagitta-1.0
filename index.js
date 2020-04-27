const Discord = require('discord.js')
const ini = require('./ini.js')

const client = new Discord.Client()

// bot startup
client.on('ready', () => {
    console.log('ready')

})

// command handler
client.on('message', message => {
    if (message.author.bot) return;
    if (message.channel.type === 'dm') return;


})
/*
this will work
 */


