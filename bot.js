const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = "__";
const InfiniteLoop = require('infinite-loop');
const il = new InfiniteLoop;
const quotes = ["Sí", "No", "No sé", "Buena pregunta, pero no sé la respuesta", "Nunca.", "Definitivamente sí", "Definitivamente no", "No pasará", "50/50", "No responderé eso", "Mmm... ahora ando descansando, prueba después"]
const request = require('snekfetch');
const got = require('got');
const clientneko = require('nekos.life');
const neko = new clientneko();

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
const quotes3 = ["https://media1.tenor.com/images/68d981347bf6ee8c7d6b78f8a7fe3ccb/tenor.gif?itemid=5155410", "http://2.bp.blogspot.com/-X0ZDtsVYvVk/WvOwG3Y1BYI/AAAAAAAABiQ/lt6TDbpSyXMoIglTBQH-JonovXCgB2QjACK4BGAYYCw/s1600/anime-head-pat-gif-4.gif", "https://media1.tenor.com/images/bf646b7164b76efe82502993ee530c78/tenor.gif?itemid=7394758", "https://media1.tenor.com/images/1e92c03121c0bd6688d17eef8d275ea7/tenor.gif?itemid=9920853", "https://media1.tenor.com/images/c0bcaeaa785a6bdf1fae82ecac65d0cc/tenor.gif?itemid=7453915", "https://pa1.narvii.com/6475/d8ed9aa8d975550df2653714ee90fe7e5c526135_hq.gif", "https://78.media.tumblr.com/71d93048022df065a1d2af96ab71afa3/tumblr_olykrec0DB1qbvovho1_500.gif", "http://funnypictures2.fjcdn.com/funny_gifs/Anime+grill+headpats_5d0d3c_6068962.gif"]

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
  client.user.setGame('[1] Mantenimimiento');
  client.user.setStatus('dnd')
});

client.on("message", message => {
  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();
  const version = "alpha_1.3.1(edit7)";
  if (!message.content.startsWith(prefix)) return;
  
  if (message.content.startsWith(prefix + "ping")) {
    message.channel.send("**Pong!** :ping_pong:");
  } else
  if (message.content.startsWith(prefix + "info")) {
    message.channel.send("**Estado del Bot:** Conectado\n**Fallos:** null\n**Creador:** ElBuenAnvita\n**Versión del Bot:** " + version);
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
  if (message.content.startsWith(prefix + "sayd")) {
    let text = args.slice(0).join(" ");
    message.delete();
    message.channel.send(text);
  } else
  if (message.content.startsWith(prefix + "say")) {
    let text = args.slice(0).join(" ");
    message.channel.send(text);
  } else
  if (message.content.startsWith(prefix + "kick")) {
    let text = args.slice(0).join(" ");
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
      "description": "H-Hola, soy AnviBot... estos son mis comandos, recuerda que mi actual prefijo es » `" + prefix + "`",
      "color": 2335,
      "fields": [{
        "name": "Información/Utilidad",
        "value": "`info`, `me`"
      },
      {
        "name": "Imágenes",
        "value": "`pat`, `kiss`, `neko` (**¡NUEVO!**)" 
      },
      {
        "name": "Diversión",
        "value": "`8ball`, `roll`, `chiste`, `say`, `sayd`, `visto`"
      },
      {
        "name": "Pronto",
        "value": "`ban`, `inu`, `kill`, `idk`\n\nPuedes entrar a la página oficial de comandos haciendo [click aquí](http://anvibot.blogspot.com/p/commands)"
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
    let text = "A " + args2 + " le dejaron en visto <:visto:446514915273080832> ";
    if(!args2) text = "<@!" + message.author.id + "> lo dejaron en visto <:visto:446514915273080832> "
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
      const args = message.content.slice(prefix.length).trim().split(/ +/g);
      const args2 = args.slice(1).join(" ")
      let text = "<@!" + message.author.id + "> está acariciando a " + args2 + " <:pat:455391227785773066>";
      if(!args2) text = "No te preocupes <@!" + message.author.id + ">, yo te acaricio <:pat:455391227785773066>"
      const embed = {
        "title": "",
        "description": text,
        "color": 2335,
        "footer": {
          "text": "Las imágenes pueden estar sujetas a derechos de autor"
        },
        "image": {
          "url": randomQuote3()
        }
      }
      message.channel.send({ embed });
    }
});

client.on('message', message => {
  if (message.content.startsWith(prefix + "maps")) {
    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const args2 = args.slice(1).join(" ")
    const args3 = args.slice(2).join(" ")
    const args4 = args.slice(3).join(" ")
    let text = "<@!" + message.author.id + ">, aquí tienes los resultados de tu búsqueda **" + args2 + "**\n[Buscar sitio en Google](https://www.google.com.co/search?q=" + args2 + ")";
    if(!args2) text = "<@!" + message.author.id + ">, sé específico colocando una ciudad.\n**Uso correcto:** `__maps <ciudad>,(provincia/estado/departamento),(país)`\n**Ejemplo:** `__maps Nueva+York`\n**Ejemplo 2:** `__maps Nueva+York,NY,Estados+Unidos`\n\n**NOTAS:** Los espacios entre nombres de ciudades/países/estados serán un signo mas (+).\nEl zoom predeterminado es 15.\nEl comando no funcionará con espacios\nPuede tener fallos al mostar la imágen o el sitio específico."
    const embed = {
      "title": "[BETA] Mapas de Google",
      "description": text,
      "color": 2335,
      "footer": {
        "text": "Imágenes y mapas por Google Maps"
      },
      "image": {
        "url": "https://maps.google.com.au/maps/api/staticmap?size=640x640&maptype=roadmap&center=" + args2 + "&zoom=15"
      }
    }
    message.channel.send({ embed });
  }
});

client.on('message', message => {
  if (message.content.startsWith(prefix + "usage")) {
    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const args2 = args.slice(1).join(" ")
    const text = "Error: no encontrado";
    if(args2 === maps) text = "Uso: " + prefix + "maps <ciudad>,(departamento/provincia/estado),(país)";
    if(args2 === kiss) text = "Uso: " + prefix + "kiss <usuario/texto>";
    if(args2 === pat) text = "Uso: " + prefix + "pat <usuario/texto>";
    if(args2 === visto) text = "Uso: " + prefix + "visto <usuario/texto>";
    if(!args2) text = "Error desconocido ocurrido"
    const embed = {
      "title": "Uso del comando " + args2,
      "description": text,
      "color": 2335,
      "footer": {
        "text": "Las imágenes pueden estar sujetas a derechos de autor"
      },
      "image": {
        "url": randomQuote3()
      }
    }
    message.channel.send({ embed });
  }
});

client.on('message', message => {
  if (message.content.startsWith(prefix + "changelog")) {
    const version = "alpha_1.4.5 (edit10)"
    const embed = {
      "title": "",
      "author": {
        "name": client.user.username,
        "icon_url": client.user.avatarURL
      },
      "description": "__**Listado del registro de cambios**__",
      "color": 2335,
      "fields": [
      {
        "name": "Versión actual del Bot",
        "value": version
      },
      {
        "name": "Nuevos comandos",
        "value": "`neko`: Obtén una imagen de un lindo gatito (anime)"
      },
      {
        "name": "Comandos retirados",
        "value": "`comandos`: Comando retirado, use --ayuda."
      }],
      "footer": {
        "text": "Gracias por usar AnviBot! | Creado por ElBuenAnvita"
      },
    }
    message.channel.send({ embed })
  }
});

client.on('message', async message => {
  if (message.content.startsWith(prefix + "neko")) {
    const res = await got('https://nekos.life/api/neko', {json: true})
    //if (!res || !res.body || !res.body.data) return message.channel.send("Lo sentimos, ocurrió un error.", {code: "py"})
    
    const embed = {
      "title": "",
      "description": "<@!" + message.author.id + ">, aquí tienes unos lindos gatitos, nya~",
      "color": 2335,
      "footer": {
        "text": "Powered by nekos.life"
      },
      "image": {
        "url": res.body.neko
      },
    }

    message.channel.send({ embed })
  }
});

client.on('message', async message => {
  if (message.content.startsWith(prefix + "test")) {
    const res = await got(neko.getSFWHug, {json: true})
    //if (!res || !res.body || !res.body.data) return message.channel.send("Lo sentimos, ocurrió un error.", {code: "py"})
    
    const embed = {
      "title": "",
      "description": "Yo te daré un abrazo, <@!" + message.author.id + ">",
      "color": 2335,
      "footer": {
        "text": "Powered by nekos.life"
      },
      "image": {
        "url": res.body.neko
      },
    }

    message.channel.send({ embed })
  }
})

client.login(process.env.BOT_TOKEN);