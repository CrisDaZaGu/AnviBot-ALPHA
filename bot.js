const Discord = require('discord.js');
const client = new Discord.Client();

});

client.on('message', message => {
    if (message.content === 'nuv') {
    	message.channel.send('Más nuv eres tú diciendo eso.');
  	}
});

{game:
  {name:"anime",
    type:3
  }
}

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
