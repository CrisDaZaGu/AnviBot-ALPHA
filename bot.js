const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = "__";
const InfiniteLoop = require('infinite-loop');
const il = new InfiniteLoop;
const quotes = ["Sí", "No", "No sé", "Buena pregunta, pero no sé la respuesta", "Nunca.", "Definitivamente sí", "Definitivamente no", "No pasará", "50/50", "No responderé eso", "Mmm... ahora ando descansando, prueba después"]

function randomQuote() {
	return quotes[Math.floor(Math.random() * quotes.length)];
};
il.add(randomQuote, []);

il.run();

console.log(randomQuote());
//from here down is different gif for command --kiss ------------------------------------------------------
const quotes2 = ["https://i.imgur.com/9y34cfo.gif", "https://media.giphy.com/media/FqBTvSNjNzeZG/giphy.gif", "https://media1.tenor.com/images/78095c007974aceb72b91aeb7ee54a71/tenor.gif?itemid=5095865", "https://media.giphy.com/media/ZRSGWtBJG4Tza/giphy.gif",]

function randomQuote2() {
	return quotes2[Math.floor(Math.random() * quotes2.length)];
};
il.add(randomQuote2, []);

il.run();

console.log(randomQuote2());

client.on('ready', () => {
  client.user.setGame('en actualizaciones, no usarme a menos que seas tester.')
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
  if (message.content.startsWith(prefix + "info")) {
    message.channel.send("Estado del Bot: **Conectado**\nFallos: **0**\nCreador: **ElBuenAnvita**\nVersión del Bot: " + version);
  } else
  if (message.content.startsWith(prefix + "invite")) {
    message.channel.send("```AnviBot Alpha Discord Bot```\nSi tienes dudas sobre el bot o quieres colaborar, puedes entrar con el siguiente enlace:\nhttps://discord.gg/PSFfWFp\n\n```Invita AnviBot a tu servidor de Discord```\nPuedes invitar al bot con el siguiente enlace:\nhttps://discordapp.com/api/oauth2/authorize?client_id=419980531564806145&permissions=8&scope=bot\n\n**¡Gracias por usar AnviBot n.n!**");
  }
  if (message.content.startsWith(prefix + "8ball")) {
    message.reply(randomQuote());
  }
});

client.on('message', message => {
    if (message.content.startsWith(prefix + "me")) {
      message.channel.send('Usuario: **' + message.author.username + '**\nID:' + message.author.id);
    }
});

client.on('message', message => {
  if (message.content.startsWith(prefix + "comandos")) {
    const embed = {
      "title": "Comandos",
      "author": {
        "name": client.user.username,
        "icon_url": client.user.avatarURL
      },
      "description": "Estos son mis comandos, recuerda que mi actual prefijo es > **" + prefix + "**",
      "color": 2335,
      "fields": [{
        "name": "INFORMACIÓN",
        "value": "`info`, `me`"
      },
      {
        "name": "IMÁGENES",
        "value": "`pat`, `kiss`" 
      },
      {
        "name": "DIVERSIÓN",
        "value": "`idk`, `xDD`, `8ball`"
      },
      {
        "name": "PRONTO",
        "value": "`say`, `ban`, `inu`, `neko`\n\nPuedes entrar a la página oficial de comandos haciendo [click aquí](http://anvibot.blogspot.com/p/commands)"
      }],
      "footer": {
        "text": "Gracias por usar AnviBot! | Creado por ElBuenAnvita"
      },
    }
    message.channel.send({ embed })
  }
});

client.on('message', message => {
    if (message.content.startsWith(prefix + "kiss")) {
      const embed = {
        "title": "",
        "description": "¿Besandote tú mism@, <@!" + message.author.id + ">? Perdón por eso.",
        "color": 2335,
        "footer": {
          "text": "Las imágenes pueden estar sujetas a derechos de autor"
        },
        "image": {
          "url": randomQuote2()
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
        "footer": {
          "text": "Las imágenes pueden estar sujetas a derechos de autor"
        },
        "image": {
          "url": "http://2.bp.blogspot.com/-X0ZDtsVYvVk/WvOwG3Y1BYI/AAAAAAAABiQ/lt6TDbpSyXMoIglTBQH-JonovXCgB2QjACK4BGAYYCw/s1600/anime-head-pat-gif-4.gif"
        }
      }
      message.channel.send({ embed });
    }
});

client.login(process.env.BOT_TOKEN);
