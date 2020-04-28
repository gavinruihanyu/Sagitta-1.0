// locates prefix version and token
const {prefix , version, token} = require('../ini.js')
//list of commands
const listOfCommands=[prefix+"help",prefix+"play", prefix+"stop"];

//list of command sub-array (tells what each command does)
const listOfCommandsDefinition=["Hello","hello","hello"];

//list of command usage
const listOfCommandUseage=[1,2,3];

//function for help
commandLister=()=> {
    for (i=0; i<=listOfCommands.length;i++) {
        msg.reply(listOfCommands[i]+": "+listOfCommandsDefinition[i]);
        console.log((listOfCommands[i]+": "+listOfCommandsDefinition[i]));
    }

}

//command handler for )help
client.on('message', message => {
    if (message.author.bot || message.channel.type === 'dm' || !message.content.startsWith(prefix)) return;
    if (message.content===prefix+"help"){
     commandLister();
        }

})
