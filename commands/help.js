const {prefix} = require('../ini.js');
const Discord = require('discord.js');
//sets where output will be
let helpTextTail='';
let helpTextHead="Saggita's capabilities:";

//list of commands
const listOfCommands=[
    prefix+"help",
    prefix+'play "songname"',
    prefix+"stop",

];

//list of command sub-array (tells what each command does)
const listOfCommandsDefinition=[
    "Sagitta's capabilities",
    "Plays a song from youtube",
    "Stops playback of all songs"
];

//function for help
commandLister=()=> {
    for (let i = 0; i < (listOfCommands.length); i ++) {
        helpTextTail+=(listOfCommands[i] + ": " + listOfCommandsDefinition[i] + "\n");
    }
}
commandLister()

const helpTextMsg = new Discord.MessageEmbed()
    .setTitle("Sagitta 1.0")
    .addField(helpTextHead,helpTextTail)
    .setColor(0xa9a9a9);
const helpReply = new Discord.MessageEmbed()
    .setColor(0xa9a9a9)
    .setTitle("Sagitta's command dictionary has\nbeen sent to your DM's!");

module.exports = (message)=>{
    message.react('✔');
    message.author.send(helpTextMsg);
}
