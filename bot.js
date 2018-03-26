const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  client.user.setGame('perder el tiempo .help')
});

client.on('message', message => {
    if (message.content === '++ping') {
    	message.channel.send('**Pong!** :ping_pong:');
  	}
});
client.user.setPresence({ game: { name: '--help', type: 0 
                                } 
                        });

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
