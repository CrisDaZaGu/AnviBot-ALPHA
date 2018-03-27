const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  client.user.setGame('perder el tiempo .help')
});

client.on('message', message => {
    if (message.content === '++info') {
    	message.channel.send('Nuestros servidores han sufrido daños, y el bot por consiguiente, por favor, tenga paciencia, intente de nuevo en `1 día`');
  	}
});

client.on('message', message => {
    if (message.content === '++cya') {
    	message.channel.send('Cya, {{username}}, descansa bien y cuídate.');
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
