const {prefix} = require('../ini.js')
//sets where output will be
let helpText='';
let introHelpText='These are the commands that Sagitta will recognize: ';

//list of commands
const listOfCommands=[
    prefix+"help",
    prefix+"play songname",
    prefix+"stop",

];

//list of command sub-array (tells what each command does)
const listOfCommandsDefinition=[
    "Sagitta will direct message you the list of commands it will respond to.",
    "Plays a song from youtube",
    "Stops playback of all songs"
];

//function for help
commandLister=()=> {
    for (let i = 0; i < (listOfCommands.length); i ++) {
        helpText+=(">"+listOfCommands[i] + ": " + listOfCommandsDefinition[i] + "\n");
    }

}
commandLister()
module.exports = (message)=>{
    message.author.send(introHelpText+"\n"+helpText);
}
