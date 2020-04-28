//bot startup sequence:

//requires discord.js from discord.js files
const Discord = require('discord.js')

//locates and sets prefix, version and token
const {prefix , version, token} = require('./ini.js')

//creates Sagitta bot
const client = new Discord.Client()

// bot startup
client.on('ready', () => {
    client.user.setStatus("online");
    console.log('Sagitta is ready and online, awaiting ');
})
//bot login
client.login(token).then(r => {
    console.log('Sagitta is logged in.');
});

// command handler
client.on('message', message => {
    if (message.author.bot || message.channel.type === 'dm' || !message.content.startsWith(prefix)) return;
})

//TODO: refrence help.js thingy and fix ini.js locator



