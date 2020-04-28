const Discord = require('discord.js')
const {prefix, version, token} = require('./ini.js')

const client = new Discord.Client()

// bot startup
client.on('ready', () => {
    client.user.setStatus("online");
    console.log('Sagitta is ready and online, awaiting ');
})

// command handler
client.on('message', message => {
    if (message.author.bot || message.channel.type === 'dm' || !message.content.startsWith(prefix)) return;

})


client.login(token).then(r => {
    console.log('Sagitta is logged in.');
});
