
const {prefix , version, token} = require('../ini.js')

//list of commands
const listOfCommands=[
    prefix+"help",
    prefix+"play",
    prefix+"stop",

];

//list of command sub-array (tells what each command does)
const listOfCommandsDefinition=[
    "Hello",
    "hello",
    "hello"
];

//list of command usage
const listOfCommandUsage=[
    1,
    2,
    3];

//function for help
commandLister=()=> {
    for (let i = 0; i < (listOfCommands.length); i ++) {
        return(listOfCommands[i] + ": " + listOfCommandsDefinition[i] + listOfCommandUsage[i]);
    }

}
module.exports = (message, args)=>{
    message.author.send(commandLister());
}
