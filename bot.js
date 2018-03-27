const Discord = require('discord.js');
const client = new Discord.Client();

});

client.on('message', message => {
    if (message.content === '--info') {
    	message.channel.send('Actualmente nuestro bot de ALPHA está caído, por favor, intentelo en `1 días`');
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
