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
//from here down is different gif for command --pat ------------------------------------------------------
const quotes3 = ["HOLA", "PONÉ LINKS ACA CTM"]

function randomQuote3() {
	return quotes3[Math.floor(Math.random() * quotes3.length)];
};
il.add(randomQuote3, []);

il.run();

console.log(randomQuote3());
//from here down is different gif for command --roll ------------------------------------------------------
const quotes4 = ["nada", "por", "aqui"]

function randomQuote4() {
	return Math.floor(Math.random() * 100);
};
il.add(randomQuote4, []);

il.run();

console.log(randomQuote4());
//from here down is different gif for command --chiste ------------------------------------------------------
const quotes5 = ["- ¡Soldado López!\n- ¡Sí, mi capitán!\n- ¡No lo ví ayer en la prueba de camuflaje.\n- ¡Gracias, mi capitán", "- ¿Qué pasa si te corto una oreja?\n- Me quedo medio sordo.\n- ¿Y si te corto la otra?\n- Me quedo ciego.\n- ¿Por qué?\n- Porque se me caen los lentes", "¿Cuál es el colmo de un peluquero?\n¡Perder el bus por los pelos!", "- Ayer ví un letrero que hizo que me cagara en los pantalones\n- ¿Y qué decía?\n - «Baño cerrado»", "Llegan a una casa para el Censo y le preguntan:\n- ¿Su nombre?\n- Adan\n- ¿El de su esposa?\n- Eva\n- ¡Increíble! Por casualidad, ¿La serpiente también vive aquí?\n- Sí, un momento,\n  ¡¡SUEGRAAA, LA BUSCAN!!", "Cuando muera, pondré en mi tumba «WiFi Gratis»\nAsí vendrá gente a visitarme", "- Señor, su esposa cayó al río\n- Búsquenla río arriba\n- Pero si el río va para abajo\n- Hágame caso, ¡esta pendeja siempre le lleva la contraria a todo!", "Pepito le pregunta a su maestra:\n- Maestra, ¿me castigaría usted por algo que yo no hice?\n- No Pepito, ¡por supuesto que no!\n- Qué bien, porque no hice la tarea de hoy.", "Me robaron todas las sillas de mi casa,\nno saben cómo me siento ahora.", "- ¿Nivel de inglés?\n- Alto\n- Traduzca <<Memoria>>\n- Memory\n- Úselo en una oración\n- Una vez me aventé por la ventana y memory\n- ¡CONTRATADO!", "- Oye, ¿por qué te bañas con pintura azul?\n- Es que mi novia vive lejos\n- ¡¿Y eso que tiene que ver?!\n- Es que quiero estar azulado ;-;"]

function randomQuote5() {
	return quotes5[Math.floor(Math.random() * quotes5.length)];
};
il.add(randomQuote5, []);

il.run();

console.log(randomQuote5());

client.on('ready', () => {
  client.user.setGame('En cambios, por favor no usarme a menos que seas tester')
});

client.on("message", message => {
  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();
  const version = "alpha_0.1.4.6(edit_49)";
  if (!message.content.startsWith(prefix)) return;
  
  if (message.content.startsWith(prefix + "ping")) {
    message.channel.send("**Pong!** :ping_pong:");
  } else
  if (message.content.startsWith(prefix + "xDD")) {
    message.channel.send("xDD");
  } else
  if (message.content.startsWith(prefix + "info")) {
    message.channel.send("Estado del Bot: **Conectado**\nFallos: **0**\nCreador: **ElBuenAnvita**\nVersión del Bot: " + version);
  } else
  if (message.content.startsWith(prefix + "invite")) {
    message.channel.send("```AnviBot Alpha Discord Bot```\nSi tienes dudas sobre el bot o quieres colaborar, puedes entrar con el siguiente enlace:\nhttps://discord.gg/PSFfWFp\n\n```Invita AnviBot a tu servidor de Discord```\nPuedes invitar al bot con el siguiente enlace:\nhttps://discordapp.com/api/oauth2/authorize?client_id=419980531564806145&permissions=8&scope=bot\n\n**¡Gracias por usar AnviBot n.n!**");
  } else
  if (message.content.startsWith(prefix + "8ball")) {
    message.reply(randomQuote());
  } else
  if (message.content.startsWith(prefix + "roll")) {
    message.channel.send('Tu número aleatorio es ' + randomQuote4());
  } else
  if (message.content.startsWith(prefix + "say")) {
    let text = args.slice(0).join(" ");
    message.delete();
    message.channel.send(text);
  }
});

client.on('message', message => {
    if (message.content.startsWith(prefix + "me")) {
      message.channel.send('Usuario: **' + message.author.username + '**\nID:' + message.author.id);
    }
});

client.on('message', message => {
  if (message.content.startsWith(prefix + "ayuda")) {
    const embed = {
      "title": "",
      "author": {
        "name": client.user.username,
        "icon_url": client.user.avatarURL
      },
      "description": "Estos son mis comandos, recuerda que mi actual prefijo es » **" + prefix + "**",
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
        "value": "`xDD`, `8ball`, `roll`, `chiste`"
      },
      {
        "name": "PRONTO",
        "value": "`say`, `ban`, `inu`, `neko`, `idk`\n\nPuedes entrar a la página oficial de comandos haciendo [click aquí](http://anvibot.blogspot.com/p/commands)"
      }],
      "footer": {
        "text": "Gracias por usar AnviBot! | Creado por ElBuenAnvita"
      },
    }
    message.channel.send({ embed })
  }
});

client.on('message', message => {
  if (message.content.startsWith(prefix + "comandos")) {
    const embed = {
      "title": "",
      "author": {
        "name": client.user.username,
        "icon_url": client.user.avatarURL
      },
      "description": "Estos son mis comandos, recuerda que mi actual prefijo es » **" + prefix + "**",
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
      const args = message.content.slice(prefix.length).trim().split(/ +/g);
      const args2 = args.slice(1).join(" ")
      let text = "<@!" + message.author.id + "> está besando a " + args2;
      if(!args2) text = "¿Besandote sólo, <@!" + message.author.id + ">? Perdón por eso"
      const embed = {
        "title": "",
        "description": text,
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
  if (message.content.startsWith(prefix + "visto")) {
    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const args2 = args.slice(1).join(" ")
    let text = "A" + args2 + "le dejaron en visto <:visto:429237848022056960>";
    if(!args2) text = "<@!" + message.author.id + "> lo dejaron en visto <:visto:429237848022056960>"
    const embed = {
      "title": "",
      "description": text,
      "color": 2335,
    }
    message.channel.send({ embed });
  }
});

client.on('message', message => {
  if (message.content.startsWith(prefix + "chiste")) {
    const embed = {
      "title": "",
      "author": {
        "name": client.user.username,
        "icon_url": client.user.avatarURL
      },
      "description": "Aquí tienes algunos chistes, <@!" + message.author.id + ">",
      "color": 2335,
      "fields": [{
        "name": "Chiste",
        "value": randomQuote5()
      }]
    }
    message.channel.send({ embed });
  }
});

client.on('message', message => {
    if (message.content.startsWith(prefix + "avatar")) {
      const embed = {
        "title": "",
        "description": "Este eres tú, <@!" + message.author.id + ">, que wap@ estás.",
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
        "description": "No te preocupes <@!" + message.author.id + ">, yo te acaricio.",
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

client.on("message", async message => {

  if(message.author.bot) return;

  if(message.content.indexOf(prefix) !== 0) return;

  const args = message.content.slice(prefix.lenght).trim().split(/ +/g);
  const command = args.shift().toLowerCase();

  if(command === "say") {
    const sayMessage = args.join(" ");
    message.delete().catch(O_o=>{});
    message.channel.send(sayMessage);
  }
})

client.login(process.env.BOT_TOKEN);
