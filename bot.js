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

{game:
  {name:"you sleep O_O",
    type:3
  }
}

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
