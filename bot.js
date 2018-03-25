const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  client.user.setGame('perder el tiempo .help')
})

client.on('message', message => {
    if (message.content === '++ping') {
    	message.channel('**Pong!** :ping_pong:');
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
