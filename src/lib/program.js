import program from 'commander';

program.version('0.0.1')
    .option('-s, --server [address]', 'Address of IRC server, e.g. irc.freenode.net')
    .option('-p, --port [number]', 'Port of IRC server [6697]', 6697)
    .option('-c, --channel [name]', 'Channel of IRC server [bots]', 'bots')
    .option('-n, --nick [name]', 'Nick of bot [kallibot]', 'kallibot')
    .option('-d, --delimiter [character]', 'Delimiter, e.g. symbol to listen for commands on, [!]', '!')
    .parse(process.argv);

if (!program.server) {
    console.error('Server is not set');
    process.exit(1);
}

program.channel = '#' + program.channel;

export default program;
