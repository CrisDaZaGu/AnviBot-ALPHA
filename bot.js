const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = "__";

client.on('ready', () => {
  client.user.setGame(prefix + 'ayuda | AnviBot ALPHA | anvibot.blogspot.com/alpha')
});

client.on("message", message => {
  const version = "alpha_0.1.3.9(edit_19)";
  if (!message.content.startsWith(prefix)) return;
  
  if (message.content.startsWith(prefix + "ping")) {
    message.channel.send("**Pong!** :ping_pong:");
  } else
  if (message.content.startsWith(prefix + "xDD")) {
    message.channel.send("xDD");
  } else
  if (message.content.startsWith(prefix + "ayuda")) {
    message.channel.send("Soy un bot too' raro.\n¡Consulta mi lista de comandos con `__comandos`!");
  } else
  if (message.content.startsWith(prefix + "comandos")) {
    message.channel.send("Te envié mis comandos por mensaje privado, " + message.author.username);
    message.author.send("```Comandos```\n**__ayuda**: Consigue ayuda del bot.\n**__info**: Información del bot\n**__me**: Consigue tu id de jugador.\n**__ping**: ¡Ping Pong! :ping_pong:\n**__avatar**: Consulta la URL de tu avatar actual.\n**__invite**: Invita a AnviBot a tu servidor de Discord!\n**__xDD**: xDD\n```Página```\nhttp://anvibot.blogspot.com/p/commands");
  } else
  if (message.content.startsWith(prefix + "info")) {
    message.channel.send("Estado del Bot: **Conectado**\nFallos: **0**\nCreador: **ElBuenAnvita**\nVersión del Bot: " + version);
  } else
  if (message.content.startsWith(prefix + "invite")) {
    message.channel.send("```AnviBot Alpha Discord Bot```\nSi tienes dudas sobre el bot o quieres colaborar, puedes entrar con el siguiente enlace:\nhttps://discord.gg/PSFfWFp\n\n```Invita AnviBot a tu servidor de Discord```\nPuedes invitar al bot con el siguiente enlace:\nhttps://discordapp.com/api/oauth2/authorize?client_id=419980531564806145&permissions=8&scope=bot\n\n**¡Gracias por usar AnviBot n.n!**");
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

client.on('message', message => {
    if (message.content.startsWith(prefix + "avatar")) {
      const embed = {
        "title": "",
        "description": "Este eres tú, **" + message.author.username + "**, que wap@ estás.",
        "color": 2335,
        "image": {
          "url": message.author.avatarURL
        }
      }
      message.channel.send({ embed });
    }
});

client.on('message', message => {
    if (message.content.startsWith(prefix + "pat")) {
      const embed = {
        "title": "",
        "description": "No te preocupes, **" + message.author.username + "**, yo te acaricio.",
        "color": 2335,
        "image": {
          "url": "http://2.bp.blogspot.com/-X0ZDtsVYvVk/WvOwG3Y1BYI/AAAAAAAABiQ/lt6TDbpSyXMoIglTBQH-JonovXCgB2QjACK4BGAYYCw/s1600/anime-head-pat-gif-4.gif"
        }
      }
      message.channel.send({ embed });
    }
});

client.on('message', message => {
    if (message.content.startsWith(prefix + "prueba")) {
      const myArray = ['Enero', 'Febrero', 'Marzo'];
      const rand = myArray[Math.floor(Math.random() * myArray.length)];
      const embed = {
        "title": "¡Esta es una prueba del bot!",
        "description": rand,
        "color": 2335,
        }
      }
      message.channel.send({ embed });
    }
});

client.login(process.env.BOT_TOKEN);
