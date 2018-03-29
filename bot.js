const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
 client.user.setActivity('--help');
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
    if (message.content === 'ciedad') {
    	message.reply('más mala.');
  	}
});

client.on('message', message => {
    if (message.content === '--rae') {
    	message.channel.send('Cada día, un diccionario muere por la falta de ortografía. No dejes que pase esto, ayudale al que lo necesite, entrando a dle.rae.es tienes un diccionario completamente gratuito. #AyudemosAlRAE');
  }
});

client.on('message', message => {
    if (message.content === '--rae') {
    	message.reply('https://cdn.discordapp.com/attachments/427962744520835082/428767421034135572/triggered_rae.gif');
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
