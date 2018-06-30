var nconf = require('nconf').argv().env().file({ file:'config.json' });

// List of commands to check for
var commands = [
    'left', 'right', 'up', 'down',
    'start', 'select',
    'a', 'b'
];

var os = process.env.CONFIG_OS || nconf.get('CONFIG_OS');
//var programName = process.env.CONFIG_PROGRAM_NAME || nconf.get('CONFIG_PROGRAM_NAME');
var programName = '8BitMMO';
var maxCharName = process.env.CONFIG_MAX_CHAR_NAME || nconf.get('CONFIG_MAX_CHAR_NAME');
var maxCharCommand = process.env.CONFIG_MAX_CHAR_COMMAND || nconf.get('CONFIG_MAX_CHAR_COMMAND');
var sendKey = process.env.CONFIG_SEND_KEY || nconf.get('CONFIG_SEND_KEY');
var filteredCommands = process.env.CONFIG_FILTERED_COMMANDS || nconf.get('CONFIG_FILTERED_COMMANDS');
var throttledCommands = process.env.CONFIG_THROTTLED_COMMANDS || nconf.get('CONFIG_THROTTLED_COMMANDS');

var ircConfig = {
    // Either 'windows' or 'other'
    os: os || 'windows',

    // Title of the window of the program
    // Ex: 'Desmume' or 'VBA'
    programName: programName || 'VBA',

    // If you want to print usernames/commands like in twitchplayspokemon
    printToConsole: true,
    // Maximum characters to show for a person's name in the console log
    maxCharName: maxCharName || 8,
    // Maximum characters to show for a command in the console log
    // Ex: left => left since only 4 char, democracy => democra
    maxCharCommand: maxCharCommand || 10,

    // If you need to filter the commands sent to the program
    // Ex: democracy/anarchy since they don't affect the program itself
    // Ex: ["democracy","anarchy"]
    filteredCommands: filteredCommands || [],

    // If you want to prevent people from using from command too often
    // Ex: ["start"]
    throttledCommands: throttledCommands || [],
    // Throttle time in seconds
    // Ex: you can limit 'start' so it's only used every 10 sec
    timeToWait: 10000,

    // Linux: delay between each possible keypress in ms (can't be too fast)
    // If you want to change delay for windows - change key.py
    delay: 100,

    sendKey: sendKey,
    commands: commands
};

module.exports = ircConfig;
