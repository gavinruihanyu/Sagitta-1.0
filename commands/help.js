//todo: Basic Bare Bone Minimum of help cmd
// locates prefix version and token
const {prefix , version, token} = require('../ini.js')

//list of commands
const listOfCommands=[prefix+"help",prefix+"play", prefix+"stop"];

//list of command sub-array (tells what each command does)
const listOfCommandsDefinition=["Hello","hello","hello"];

//list of command usage
const listOfCommandUsage=[1,2,3];

//function for help
commandLister=()=> {
    for (let loopNum=0; loopNum<=listOfCommands.length;loopNum++) {
        message.author.send(listOfCommands[loopNum]+": "+listOfCommandsDefinition[loopNum]+listOfCommandUsage)[loopNum];
        console.log((listOfCommands[loopNum]+": "+listOfCommandsDefinition[loopNum]+listOfCommandUsage)[loopNum]);
    }

}
module.exports = (message, args)=>{
    message.reply(commandLister)
}
