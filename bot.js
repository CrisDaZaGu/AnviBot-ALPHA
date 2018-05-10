const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = "++";

client.on('ready', () => {
  client.user.setGame(prefix + 'ayuda | AnviBot ALPHA')
});

client.on("message", message => {
  if (!message.content.startsWith(prefix)) return;
  
  if (message.content.startsWith(prefix + "ping")) {
    message.channel.send("**Pong!** :ping_pong:");
  } else
  if (message.content.startsWith(prefix + "xDD")) {
    message.channel.send("xDD");
  } else
  if (message.content.startsWith(prefix + "ayuda")) {
    message.channel.send("Soy un bot too' raro.\n¡Consulta mi lista de comandos con `++comandos`!");
  } else
  if (message.content.startsWith(prefix + "comandos")) {
    message.channel.send("Te envié mis comandos por mensaje privado, " + message.author.username);
    message.author.send("```Comandos```\n**++ayuda**: Consigue ayuda del bot.\n**++info**: Información del bot\n**++me**: Consigue tu id de jugador.\n**++ping**: ¡Ping Pong! :ping_pong:\n**++avatar**: Consulta la URL de tu avatar actual.\n**++invite**: Invita a AnviBot a tu servidor de Discord!\n**++xDD**: xDD\n```Página```\nhttp://anvibot.blogspot.com/p/commands");
  } else
  if (message.content.startsWith(prefix + "info")) {
    message.channel.send("Estado del Bot: **Conectado**\nFallos: **0**\nCreador: **ElBuenAnvita**\nVersión del Bot: **alpha_0.1.2.9**");
  } else
  if (message.content.startsWith(prefix + "invite")) {
    message.channel.send("```AnviBot Discord Bot```\nSi tienes dudas sobre el bot o quieres colaborar, puedes entrar con el siguiente enlace:\nhttps://discord.gg/PSFfWFp\n\n```Invita AnviBot a tu servidor de Discord```\nPuedes invitar al bot con el siguiente enlace:\nhttps://discordapp.com/api/oauth2/authorize?client_id=419980531564806145&permissions=8&scope=bot\n\n**¡Gracias por usar AnviBot n.n!**");
  }
});

client.on('message', message => {
    if (message.content.startsWith(prefix + "me")) {
      message.channel.send('Usuario: **' + message.author.username + '**\nID:' + message.author.id);
    }
});

client.on('message', message => {
    if (message.content.startsWith(prefix + "kiss")) {
      const embed = {
        "title": "",
        "description": "¿Besandote tú mism@, **" + message.author.username + "**? Perdón por eso.",
        "color": 2335,
        "image": {
          "url": "https://media.giphy.com/media/ZRSGWtBJG4Tza/giphy.gif"
        }
      }
      message.channel.send({ embed });
    }
});

// Create an event listener for messages
client.on('message', message => {
    if (message.content.startsWith(prefix + "avatar")) {
      const embed = {
        "title": "",
        "description": "Este es tu avatar, **" + message.author.username + "**",
        "color": 2335,
        "image": {
          "url": message.author.avatarURL
        }
      }
      message.channel.send({ embed });
    }
});

client.on('message', message => {
    if (message.content === 'omae wa mou shindeiro') {
    	message.channel.send('なに？！');
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
