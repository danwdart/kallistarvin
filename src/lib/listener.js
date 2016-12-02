export default class Listener {
    constructor(client) {
        this.client = client;
    }

    message(from, to, message) {
        console.log(`${from} to ${to}: ${message}`);
    }

    pm(from, message) {
        console.log(`${from}: ${message}`);
        this.client.say(from, `Just an echo bot for now. You said: ${message}`);
    }
};
