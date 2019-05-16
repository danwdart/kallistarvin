export default class Listener {
    constructor(client, program) {
        this.client = client;
        this.program = program;
    }

    clean(message) {
        if (message.startsWith(this.program.delimiter))
            message = message.substr(this.program.delimiter.length);
        return message;
    }

    action(message) {
        message = this.clean(message);
        console.log('Actioning', message);
    }

    message(from, to, message) {
        console.log(`${from} to ${to}: ${message}`);
        if (message.startsWith(this.program.delimiter))
            this.action(message);
    }

    pm(from, message) {
        console.log(`${from}: ${message}`);
        this.client.say(from, `Just an echo bot for now. You said: ${message}`);
        this.action(message);
    }
}
