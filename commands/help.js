//list of commands
const listOfCommands=[prefix+"help",prefix+"play", prefix+"stop"]

//command handler for )help
client.on('message', message => {
    if (message.author.bot || message.channel.type === 'dm' || !message.content.startsWith(prefix)) return;
    if (message.content===prefix+"help"){
        message.reply("listOfCommands")
        }

})
