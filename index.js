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
    client.user.setPresence({ activity: { name: '|Help for commands' }, status: 'online' })
    console.log('Sagitta '+version+' is ready and online, awaiting orders...');
})
//bot login
client.login(token).then(r => {
    console.log('Sagitta is logged in.');
});

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

    const isBotOwner1 = message.author.id == '186107166686576641';
    const isBotOwner2 = message.author.id == '312380733668851712';

    if (message.author.bot || message.channel.type === 'dm') return;

    if (message.content.startsWith(prefix)) {
        const args = message.content.slice(prefix.length).split(/ +/)
        const command = args.shift().toLowerCase()

        if (!client.commands.has(command) && message.content!='|!|SagittaShutdown') {
            message.reply('Type |help for the list of commands. fag')
            return
        }

        try {
            client.commands.get(command)(message, args)
            // message.delete()
        } catch(error) {
            console.log(error)
        }
    }
    if (message.content=='|!|SagittaShutdown') {
        if (!isBotOwner1 && !isBotOwner2){
            message.reply('You must have some nerve to think your little fairy homosexual loving waste of human flesh ass can have the authority to shut me down.')
            return;
        }
        else{
            const shutdownDialogue=new Discord.MessageEmbed()
                .setColor(0x770000)
                .setTitle('Sagitta '+version+' is now deactivating.');
            message.author.send(shutdownDialogue).then(shutdownSeq => {
                client.destroy();
                client.destroy();
            })
            console.log('Sagitta has been shut down.')
        }
    }
})





