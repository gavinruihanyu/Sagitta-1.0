const fs = require('fs')
const Discord = require('discord.js')
const {prefix, version, token} = require('./ini.js')

const client = new Discord.Client()
client.commands = new Discord.Collection()

const commandFiles = fs.readdirSync('./commands')
for (const f of commandFiles) {client.commands.set(f.slice(0, -3), require(`./commands/${f}`))}

let errors = []

// bot startup
client.on('ready', () => {
    client.user.setStatus("online");
    console.log('Sagitta is ready and online, awaiting orders...');
})

// add event
client.on('guildMemberAdd', member => {
    console.log(member)
})

// remove event
client.on('guildMemberRemove', member => {
    console.log(member)
})

// message event
client.on('message', message => {
    if (message.author.bot || message.channel.type === 'dm') return;

    if (message.content.startsWith(prefix)) {
        const args = message.content.slice(prefix.length).split(/ +/)
        const command = args.shift().toLowerCase()

        if (!client.commands.has(command)) {
            message.reply('retard')
            return
        }

        try {
            client.commands.get(command)(message, args)
            // message.delete()
        } catch(error) {
            console.log(error)
        }
    }
})


client.login(token).then(r => {
    console.log('Sagitta is logged in.');
});
