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
    	message.reply('descansa bien y cuídate, hasta mañana.');
  	}
});

client.on('message', message => {
    if (message.content === '++info') {
    	message.reply('Mis actuales comandos son `++info`, `++cya` y `++help`. Soy el ALPHA de AnviBot.');
  	}
});

client.on('message', message => {
    if (message.content === 'so! :cheese: ') {
    	message.reply('ciedad');
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
