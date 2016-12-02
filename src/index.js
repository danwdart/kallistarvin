#!/usr/bin/env node --harmony

import irc from 'irc';
import Listener from './lib/listener';
import program from './lib/program';

console.log(`Starting Kallistarvin`);
console.log(`Connecting to ${program.server} on port ${program.port}`);

let client = new irc.Client(program.server, program.nick, {
    userName: program.nick,
    realName: 'Kallistarvin Bot',
    channels: [program.channel],
    debug: true,
    autoRejoin: true
}),
    listener = new Listener(client);

process.on('SIGINT', () => {
    console.log('SIGINT caught. Disconnecting.');
    client.disconnect('Kallistarvin quitting.', () => process.exit(0));
});

client.addListener('error', (err) => console.log(err));

client.addListener('message', ::listener.message);
client.addListener('pm', ::listener.pm);

client.say(program.channel, 'Initialised Kallistarvin bot. Enjoy your day!');
console.log('Initialised Kallistarvin bot. Enjoy your day!');
