const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = "__";
const InfiniteLoop = require('infinite-loop');
const il = new InfiniteLoop;
const quotes = ["Decididamente sí", "Decididamente no", "No veo algo bueno en esta bola mágica, ¿eh?", "No cuentes con ello.", "Cuenta con ello.", "A mí se me hace que sí, ¿eh?", "No lo creo.", "Muy dudoso.", "Probablemente", "Tengo una bola mágica, pero no hago milagros. <:02monka:518638316065783828>"]
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
const quotes2 = ["Referencia", "Referencia"]

function randomQuote2() {
	return quotes2[Math.floor(Math.random() * quotes2.length)];
};
il.add(randomQuote2, []);

il.run();

console.log(randomQuote2());
//from here down is different QUOTES FOR :VISTO: ------------------------------------------------------
const quotes4 = ["<:visto:49181876175044608>", "<:visto:461334819586965507>", "<:Visto2:482049600602243072>"]

function randomQuote4() {
	return Math.floor(Math.random() * 100);
};
il.add(randomQuote4, []);

il.run();

//from here down is different QUOTES FOR :VISTO: ------------------------------------------------------
const quotes8 = ["<:visto:49181876175044608>", "<:visto:461334819586965507>", "<:Visto2:482049600602243072>", "<:VistoIG:453283456181600276>"]

function randomQuote8() {
	return quotes8[Math.floor(Math.random() * quotes8.length)];
};
il.add(randomQuote8, []);

il.run();

console.log(randomQuote8());
// Chistes v
const quotes5 = [
  "—¡Soldado López!\n—¡Sí, mi capitán!\n—¡No lo ví ayer en la prueba de camuflaje!\n—¡Gracias, mi capitán!",
  "—¿Qué pasa si te corto una oreja?\n—Me quedo medio sordo.\n—¿Y si te corto la otra?\n—Me quedo ciego.\n—¿Por qué?\n—Porque se me caen los lentes",
  "¿Cuál es el colmo de un peluquero?\n¡Perder el bus por los pelos!",
  "—Ayer ví un letrero que hizo que me cagara en los pantalones\n—¿Y qué decía?\n—«Baño cerrado»",
  "Llegan a una casa para el Censo y le preguntan:\n—¿Su nombre?\n—Adan\n—¿El de su esposa?\n—Eva\n—¡Increíble! Por casualidad, ¿La serpiente también vive aquí?\n—Sí, un momento,\n  ¡¡SUEGRAAA, LA BUSCAN!!",
  "Cuando muera, pondré en mi tumba «WiFi Gratis»\nAsí vendrá gente a visitarme",
  "—Señor, su esposa cayó al río\n—Búsquenla río arriba\n—Pero si el río va para abajo\n—Hágame caso, ¡esta pendeja siempre le lleva la contraria a todo!",
  "Pepito le pregunta a su maestra:\n—Maestra, ¿me castigaría usted por algo que yo no hice?\n—No Pepito, ¡por supuesto que no!\n—Qué bien, porque no hice la tarea de hoy.",
  "Me robaron todas las sillas de mi casa,\nno saben cómo me siento ahora.",
  "—¿Nivel de inglés?\n—Alto\n—Traduzca <<Memoria>>\n—Memory\n—Úselo en una oración\n—Una vez me aventé por la ventana y memory\n—¡CONTRATADO!",
  "—Oye, ¿por qué te bañas con pintura azul?\n—Es que mi novia vive lejos\n—¡¿Y eso que tiene que ver?!\n—Es que quiero estar azulado ;-;",
  "—¿A qué te dedicas?\n—Soy rockero\n—Wow, ¿cantas o tocas la guitarra en alguna banda?\n—No, junto rocas y las vendo",
  "*En una pequeña farmacia del pueblo entra una mujer y dice:*\n—Por favor, quiero comprar Arsénico.\n—No puedo venderle eso. ¿Cuál es su finalidad?\n—¡Matar a mi marido!\n—Mucho peor, para ese fin no se lo puedo vender.\n*La mujer abre su cartera y extrae una foto del marido haciendo el amor con la mujer del farmacéutico*\n—Ahh, buenooo, con receta es otra cosa...",
  "—Hijo, si repruebas el examen de mañana olvídate que soy tu padre.\n*Al día siguiente*\n—Hijo, ¿cómo te fue en el exámen?\n—¿Y tú quién eres?",
  "—Roberto, ¿cuál es tu verdura favorita?\n—La zanahoria\n—¿Me la puedes deletrear?\n—Mmm... ahora que lo pienso es la papa",
  "—Mamá, ¿estoy muy peluda?\n—¡Ay, un monito que habla!\n—¡MAMÁAAA!\n—¡AYY, y dice 'mamá'! ¡Me lo quedo!",
  "¿Qué le dice una impresora a otra?\n*¿Esa hoja es tuya o es impresión mía?",
  "¿Celosa yo? JAJAJAJAJAJA.\N¿QUIÉN CARAJOS ES REXONA Y POR QUÉ NO TE ABANDONA?",
  "*Que sea lo que Dios quiera*\nYo entregando el exámen",
  "—¿Tiene pastillas para la flojera?\n—Sí.\n—¿Me pone una en la boca, por favor?",
  "Había una vez un niño llamado «Tarea»\nUn día, la profesora dijo «¡Tarea para la casa!»\nY el niño se fue para su casa.",
  "¿Por qué la torre de pizza está inclinada?\nPorque tuvo más reflejos que las torres gemelas",
  "—¡Señorita! ¡Eh, usted, la rubia!\n—¿Si, es a mí?\n—¡Le comunicamos que su avión viene demorado!\n—Ay, qué lindo, ese es mi color favorito...",
  "—¿Sabes que mi hermano anda en bicicleta desde los cuatro años?.\n—Mmm, pues ya debe estar lejos.",
  "—Si mis besos fueran WiFi, ¿me los pedirías o me los robarías?\n—Usaría datos móviles...",
  "—¿Por qué se suicidó el libro de matemáticas?\n—Porque tenía muchos problemas.",
  "¿Por qué los diabéticos no pueden vengarse?\nPorque la venganza es dulce..."
]

function randomQuote5() {
	return quotes5[Math.floor(Math.random() * quotes5.length)];
};
il.add(randomQuote5, []);

il.run();

console.log(randomQuote5());

// v INFORMACIÓN GLOBAL v
const errores_detectados = 'Unknown'
const version = "1.8.5_prerelase-1.8.5"
const veces_commit = "0" // Esto será deprecado en las siguientes versiones. Usaremos prerelases.
// ^ FIN INFORMACIÓN GLOBAL ^

client.on('ready', () => {
  client.user.setGame(`En pruebas - ${version} | ${prefix}ayuda | AnviBot | anvi.cf/bot/`); // Juego
  client.user.setStatus('dnd') // Status de "No molestar" para cuando el bot esté en mantenimiento
});

client.on("message", message => {
  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();
  if (!message.content.startsWith(prefix)) return;
  
  if (message.content.startsWith(prefix + "ping")) {
    message.channel.send("**Pong!** :ping_pong:");
  } else
  if (message.content.startsWith(prefix + "info")) {
    message.channel.send(`**Estado del Bot:** En funcionamiento.\n**Errores detectados:** ${errores_detectados}\n**Versión actual:** ${version}\n**Numero mágico (¡hala!):** ${veces_commit}`);
  } else
  if (message.content.startsWith(prefix + "invite")) {
    message.channel.send("```AnviBot Discord Bot```\nhttps://discord.gg/JRvV4mX\n\n```Invita AnviBot a tu servidor de Discord```\n¡Échele ojo! Puede marcar y desmarcar permisos para una mejor experiencia de uso.\n**Recuerde: AnviBot no es un bot de moderación y por ende, no necesita permisos de administrador.**\n<https://discordapp.com/oauth2/authorize?client_id=427578215394050049&permissions=117824&scope=bot&redirect_url=http://anvi.cf/bot/comandos>");
  } else
  if (message.content.startsWith(prefix + "8ball")) {
    if(!args[1]) return message.channel.send('Oye, pregunta algo, ya estoy preparando mi bola mágica 🔮.');
    let pregunta = args.slice(0).join(" ");
    message.channel.send(`<@!${message.author.id}> a tu pregunta «_${pregunta}_» 🔮 **${randomQuote()}**`);
  } else
  if (message.content.startsWith(prefix + "roll")) {
    message.channel.send('Tu número aleatorio es ' + randomQuote4());
  } else
  if (message.content.startsWith(prefix + "say")) {
    let text = args.slice(0).join(" ");
    message.channel.send(text);
  }
});

client.on('message', message => {
  var args = message.content.substring(prefix.length).split(" ");

  if (message.content.startsWith(prefix + "args")) {
  if(!args[1]) {
    message.channel.send("Requieres de 2 argumentos para el buen uso de este comando.")
  } else {
    message.channel.send(`Usaste ${args[1]} como tu primer argumento`)
  }
}});

// DESHABILITADO POR ERROR vvv
/* client.on('message', message => {
  var args = message.content.substring(prefix.length).split(" ");

  if (message.content.startsWith(prefix + "avatar")) {
  if(!message.mentions.members.first() && !args[1]) {
    const embed = {
      "title": `Avatar de ${message.author.username}`,
      "description": `(Enlace directo)[${message.author.avatarURL}]`,
      "color": 2335,
      "image": {
        "url": message.author.avatarURL
      }
    };
    message.channel.send({ embed });
  } else {
    var mentioneduser = message.mentions.users.first();
    const embed = {
      "title": `Avatar de ${mentioneduser.username}`,
      "description": `(Enlace directo)[${mentioneduser.avatarURL}]`,
      "color": 2335,
      "image": {
        "url": mentioneduser.avatarURL
      }
    };
    message.channel.send({ embed });
  }
}}); */

client.on('message', async message => {
  var args = message.content.substring(prefix.length).split(" ");

  if (message.content.startsWith(prefix + "feo")) {
    if(!message.mentions.members.first()) return message.channel.send("**Error:** Necesitas mencionar a una persona.\n**Uso:** `feo <@mención>`");

    const porcentajeFeo = Math.floor(Math.random() * 100);
    var mentioneduser = message.mentions.users.first();
    const attachment = mentioneduser.avatarURL; 
    if(mentioneduser.id === '331641970910953473') {
      return message.channel.send("`[...........]` \n**0% fealdad = 100% belleza. ¡Eres la persona menos fea! (ya hasta el creador del bot te envidia owo) o/**") && message.channel.sendFile(attachment, 'feo.jpg');
    };
    if(mentioneduser.id === '427578215394050049') return message.channel.send('**Error:** Ocurrió un error.\n**Uso:** `feo <@mención>`')
    if(porcentajeFeo == "0") texto = "`[...........]` \n**0% fealdad = 100% belleza. ¡Eres la persona menos fea! (ya hasta el creador del bot te envidia owo) o/**";
    if(porcentajeFeo >= "1" && porcentajeFeo <= "10") texto = "`[█..........]` \n**¡Te has salvado! Conseguiste un porcentaje muy, pero muy bajo.**";
    if(porcentajeFeo >= "11" && porcentajeFeo <= "20") texto = "`[██.........]` \n**¡Te has salvado! Conseguiste un porcentaje muy bajo.**";
    if(porcentajeFeo >= "21" && porcentajeFeo <= "30") texto = "`[███........]` \n**¡Te has salvado! Conseguiste un porcentaje bajo.**";
    if(porcentajeFeo >= "31" && porcentajeFeo <= "40") texto = "`[████.......]` \n**Usted no es ni tan feo(a), ni tan guapo(a).**";
    if(porcentajeFeo >= "41" && porcentajeFeo <= "50") texto = "`[█████......]` \n**Usted no es ni tan feo(a), ni tan guapo(a).**";
    if(porcentajeFeo >= "51" && porcentajeFeo <= "60") texto = "`[██████.....]` \n**Usted no es ni tan feo(a), ni tan guapo(a).**";
    if(porcentajeFeo >= "61" && porcentajeFeo <= "70") texto = "`[███████....]` \n**Uf... <:02monka:518638316065783828>**";
    if(porcentajeFeo >= "71" && porcentajeFeo <= "80") texto = "`[████████...]` \n**Tengo miedo. ¡Tengo miedo! <:02monka:518638316065783828>**";
    if(porcentajeFeo >= "81" && porcentajeFeo <= "91") texto = "`[█████████..]` \n**Yo de ti no seguiría intentándolo al llegar a este número <:02monka:518638316065783828>**";
    if(porcentajeFeo >= "91" && porcentajeFeo <= "99") texto = "`[██████████.]` \n**Por poco y llegas al cien, jaja. _Sigue intentado_**";
    if(porcentajeFeo == "100") texto = "`[███████████]` \n**Lamentamos informarle que usted consiguió el 100% de fealdad.**";
    message.channel.send('**' + porcentajeFeo + '%** ' + texto);
    message.channel.sendFile(attachment, 'feo.jpg');
  }
});

client.on('message', async message => {
  if (message.content.startsWith(prefix + "rip")||message.content.startsWith(prefix + "tsb")||message.content.startsWith(prefix + "tombstone")) {
    var args = message.content.split(/ +/g); 
    const args2 = args.slice(2).join(" ");
    const attachment = `http://www.tombstonebuilder.com/generate.php?top2=${args[1]}&top3=${args2}`;
    // if(!args[1]) attachment = `http://www.tombstonebuilder.com/generate.php?top2=RIP&top3=${message.author.username}`; //no responsive
    message.channel.sendFile(attachment, 'rip.jpg');
  }
});

client.on('message', message => {
  var args = message.content.substring(prefix.length).split(" ");
  let text = args.slice(1).join(" ");

  if (message.content.startsWith(prefix + "broadcast")) {
    if(message.author.id == "331641970910953473" && args[1]) {
      client.channels.get("517856035399008256").send(":loudspeaker: **Anuncio** :loudspeaker:\n( @everyone )\n\n" + text)
    } else if (args[1]) {
      message.channel.send("**Error:** No cuentas con permisos para usar este comando. **Uso:** `bc|broadcast|announcement <anuncio>")
    };
    if(!args[1]) {
      message.channel.send("**Error:** Faltan parámetros.\n**Uso:** `bc|broadcast|announcement <anuncio>`")
    };
}});

client.on('message', message => {
    if (message.content.startsWith(prefix + "me")) {
      message.channel.send('Usuario: **' + message.author.username + '**\nID:' + message.author.id);
    }
});

client.on('message', message => {
  if (message.content.startsWith(prefix + "visto")) {
    const embed = {
      "title": "",
      "description": "Visto <:visto:518634205710647296>",
      "color": 2335,
      "timestamp": new Date(),
    }
    message.channel.send({ embed })
  }
});

// habilitado nuevamente, slice 1 no contendrá al mismo comando-
client.on('message', message => {
  var args = message.content.split(/ +/g); 
  const args2 = args.slice(1).join(" ");

  if (args[0] === `${prefix}f`) {
    if(args[1]) {
      var embed = {
        "title": "",
        "description": `**${message.author.username}** ha pagado sus respetos por ${args2}`,
        "color": 2335,
      };
    } else {
      var embed = {
        "title": "",
        "description": `**${message.author.username}** ha pagado sus respetos.`,
        "color": 2335,
      };
    }
    message.channel.send({ embed });
  }
});


client.on('message', message => {
  var args = message.content.substring(prefix.length).split(" ");
  if (message.content.startsWith(prefix + "ayuda")) {
    if (args[1] === "kiss") return message.channel.send("Besa a un usuario mencionándolo.\n**Uso:** `kiss (mención)`");
    if (args[1] === "hug") return message.channel.send("Abraza a un usuario mencionándolo.\n**Uso:** `hug (mención)`");
    if (args[1] === "slap") return message.channel.send("Bofetea a un usuario mencionándolo\n**Uso:** `slap (mención)`");
    if (args[1] === "feed") return message.channel.send("Alimenta a un usuario mencionándolo\n**Uso:** `feed <mención (necesaria)>`");
    if (args[1] === "pat") return message.channel.send("Acaricia a un usuario mencionándolo\n**Uso:** `pat (mención)`");
    if (args[1] === "smug") return message.channel.send("Sentite (¿creído?) ante alguien ¬u¬\n**Uso:** `smug (mención)`");
    if (args[1] === "chiste") return message.channel.send("AnviBot te contará unos chistes (malos, por cierto.)\n**Uso:** `chiste`");
    if (args[1] === "visto") return message.channel.send('Manda un mensaje de "visto"\n**Uso:** `visto`');
    if (args[1] === "args") return message.channel.send("[[tmp]]Comando temporal, no te servirá pa' na\n**Uso:** `args (args)`");
    if (args[1] === "say") return message.channel.send("Haz que el bot diga cosas.\n**Uso:** `say (mensaje a decir)`");
    if (args[1] === "sayd") return message.channel.send("Haz que el bot diga cosas (¡e incluso te borre el mensaje! (bueno, puede ser que no))\n**Uso:** `say (mensaje a decir)`");
    if (args[1] === "8ball") return message.channel.send("Haz preguntas cerradas al bot, capaz será tu bola mágica\n**Uso:** `8ball (pregunta sí/no)`");
    if (args[1] === "neko") return message.channel.send("Si te gustan los gatos _2D_, este es tu comando.\n**Uso:** `neko`");
    if (args[1] === "mcskin") return message.channel.send("Si te sientes OR-GU-LLO-SO de tu skin de Minecraft, puedes usar este comando para verla (o ver la skin de los demás, claro está)\n**Uso:** `mcskin <avatar|helm|cube|bust|skin> <uuid/nickname>");
    if (args[1] === "feo") return message.channel.send("Mide la fealdad de una persona con este comando.\n**Uso:** `feo <@mención>`");
    if (args[1] === "f") return message.channel.send("Mide la fealdad de una persona con este comando.\n**Uso:** `feo <@mención>`");
    const embed = {
      "title": "",
      "author": {
        "name": client.user.username,
        "icon_url": client.user.avatarURL
      },
      "description": "H-Hola, soy AnviBot... estos son los comandos que me sé, mi prefijo es » `" + prefix + "`\nPuedes conseguir el uso de cada comando que conozco si lo colocas como argumento `help avatar`",
      "color": 2335,
      "fields": [{
        "name": "Información/Utilidad",
        "value": "`info`, `me`, `ayuda`, `conversor`, `mcskin`"
      },
      {
        "name": "Imágenes",
        "value": "`pat`, `hug`, `kiss`, `neko`, `smug`, `cat`, `baka`, `slap`, `feed`, `nsfw`" 
      },
      {
        "name": "Diversión",
        "value": "`8ball`, `roll`, `chiste`, `say`, `sayd`, `visto`, `feo`"
      },
      {
        "name": "Pronto",
        "value": "N/A\n\nPuedes entrar a la página oficial de comandos haciendo [click aquí](http://anvibot.blogspot.com/p/commands)"
      }],
      "footer": {
        "text": "¡Gracias por usar AnviBot!"
      },
    }
    message.channel.send({ embed })
  }
});

client.on('message', message => {
  var args = message.content.substring(prefix.length).split(" ");
  if (message.content.startsWith(prefix + "mcskin")) {
    if (args[1] === "avatar") enlace = `https://minotar.net/avatar/${args[2]}.png`;
    if (args[1] === "helm") enlace = `https://minotar.net/helm/${args[2]}.png`;
    if (args[1] === "cube") enlace = `https://minotar.net/cube/${args[2]}.png`;
    if (args[1] === "bust") enlace = `https://minotar.net/bust/${args[2]}.png`;
    if (args[1] === "skin") enlace = `https://minotar.net/skin/${args[2]}.png`;
    if (args[1] === "body") enlace = `https://minotar.net/body/${args[2]}/200.png`;
    if (args[1] === "armor") enlace = `https://minotar.net/armor/body/${args[2]}/200.png`;
    if (!args[1]) return message.channel.send('**Error:** Faltan parámetros.\n**Uso:** `mcskin <avatar|helm|cube|bust|skin|avatar|armor> <uuid/nickname>`');
    if (!args[2]) return message.channel.send('**Error:** Faltan parámetros.\n**Uso:** `mcskin <avatar|helm|cube|bust|skin|avatar|armor> <uuid/nickname>`');
    const embed = {
      "title": "",
      "author": {
        "name": args[2],
        "icon_url": `https://minotar.net/helm/${args[2]}.png`
      },
      "description": `Resultados para ${args[2]}`,
      "color": 2335,
      "image": {
        "url": enlace
      },
      "footer": {
        "text": "Steve = No premium | Powered by minotar.net"
      }
    }
    message.channel.send({ embed })
  }
});

client.on('message', message => {
  var args = message.content.substring(prefix.length).split(" ");
  if (message.content.startsWith(prefix + "nsfw")) {
    const embed = {
      "title": "Comandos NSFW",
      "author": {
        "name": client.user.username,
        "icon_url": client.user.avatarURL
      },
      "description": "Comandos de imágenes SFW/NSFW dentro de AnviBot.",
      "color": 2335,
      "fields": [{
        "name": "Información",
        "value": "`ayuda`"
      },
      {
        "name": "Imágenes SFW",
        "value": "`pat`, `hug`, `kiss`, `neko`, `smug`, `cat`, `baka`, `slap`, `feed`" 
      },
      {
        "name": "Imágenes NSFW",
        "value": "`lewd`, `trap`, `pussy`, `yuri`, `ero`, `smallboobls`, `futanari`, `blowjob`"
      }],
      "footer": {
        "text": "¡Gracias por usar AnviBot!"
      },
    }
    message.delete();
    message.channel.send(':information_source: **Los comandos fueron enviados a tu DM** :information_source:');
    message.author.send({ embed });
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

client.on('message', async message => {
  if (message.content.startsWith(prefix + "conversor")) {
    var args = message.content.substring(prefix.length).split(" ");
    let text = "<@!" + message.author.id + ">, aquí tienes los resultados de tu conversión";
    if(!args[1]) return message.channel.send("**Error:** No especificaste ningúna moneda origen. \n**Uso:** `conversor <moneda origen> <moneda a convertir> <cantidad (sólo número)>`\n**Ejemplo:** `conversor EUR USD 5`");
    if(!args[2]) return message.channel.send("**Error:** No especificaste ningúna moneda a convertir. \n**Uso:** `conversor <moneda origen> <moneda a convertir> <cantidad (sólo número)>`\n**Ejemplo:** `conversor EUR USD 5`");
    if(!args[3]) return message.channel.send("**Error:** No especificaste la cantidad a convertir. \n**Uso:** `conversor <moneda origen> <moneda a convertir> <cantidad (sólo número)>`\n**Ejemplo:** `conversor EUR USD 5`")
    const res = await got(`https://api.cambio.today/v1/quotes/${args[1]}/${args[2]}/json?quantity=${args[3]}&key=290|OztDtH8ycuxHYj9U~_pdMn^0aa_ruSXj`, {json: true});
    if(!res.body.result.updated) return message.reply(`has puesto una moneda inexistente: "${res.body.result.source}" y/o "${res.body.result.target}", revisa bien tu ortografía e intenta nuevamente.`);
    const embed = {
      "title": "Resultado de conversión de monedas",
      "description": "Última actualización: `" + res.body.result.updated + "`",
      "color": 2335,
      "fields": [
      {
        "name": "Valor por unidad",
        "value": `[${res.body.result.source}] (1.0) → (${res.body.result.value}) [${res.body.result.target}]`
      },
      {
        "name": "Valor por especificación",
        "value": `[${res.body.result.source}] (${res.body.result.quantity}) → (**${res.body.result.amount}**) [${res.body.result.target}]`
      },
      {
        "name": "Resultado final",
        "value": `**${res.body.result.amount}**`
      }],
      "footer": {
        "text": "Powered by cambio.today"
      },
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
    if(!args2) text = "<@!" + message.author.id + ">, sé específico colocando un sitio en el mapa.\n**Uso correcto:** `maps <sitio/ciudad/país>`\n**Ejemplo:** `maps Nueva+York`\n**Ejemplo 2:** `__maps Nueva+York,NY,Estados+Unidos`\n**Ejemplo 3:** `__maps Times+Square`\n\n**NOTAS:** Los espacios entre los nombres serán un signo mas (+).\nEl zoom predeterminado es 15.\nEl comando no funcionará con espacios\nPuede tener fallos al mostar la imágen o el sitio, para solucionar esto, sea específico colocando su ciudad, estado o departamento."
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
    message.channel.send(`Lo sentimos, este comando ya no está disponible.`);
  }
});

client.on('message', message => {
  if (message.content.startsWith(prefix + "changelog")) {
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
        "value": "Ninguno"
      },
      {
        "name": "Comandos modificados",
        "value": "`mcskin`: Ahora puedes consultar tu body o tu body con armor.\n`feo`: Ahora no puedes mencionar al mismo bot.\n`feo`: El resultado al mencionar el creador del bot será siempre 0%."
      },
      {
        "name": "Comandos retirados",
        "value": "`avatar`: Comando deshabilitado por frecuentes errores en la ejecución del mismo."
      },
      {
        "name": "Fin del servicio",
        "value": "AnviBot y nuvnuv dejará de prestar sus servicios a partir de este 09/03 a las 11:59 GMT-5 (HORA ESTÁNDAR DE COLOMBIA)\nPara más información, (consúlte este enlace)[anvi.cf/bot/fin-servicio/]."
      }],
      "footer": {
        "text": "Gracias por usar AnviBot"
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
  if (message.content.startsWith(prefix + "hug")) {
    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const args2 = args.slice(1).join(" ")
    let text = "<@!" + message.author.id + "> está abrazando a " + args2;
    if(!args2) text = "Aww, estás solito/a, toma un abrazo :heart:";
    const res = await got('https://nekos.life/api/hug', {json: true})
    //if (!res || !res.body || !res.body.data) return message.channel.send("Lo sentimos, ocurrió un error.", {code: "py"})
    
    const embed = {
      "title": "",
      "description": text,
      "color": 2335,
      "footer": {
        "text": "Powered by nekos.life"
      },
      "image": {
        "url": res.body.url
      },
    }

    message.channel.send({ embed })
  }
});

client.on('message', async message => {
  if (message.content.startsWith(prefix + "kiss")||message.content.startsWith(prefix + "beso")) {
    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const args2 = args.slice(1).join(" ")
    let text = "<@!" + message.author.id + "> está besando a " + args2;
    if(!args2) text = "Sé que no tienes a quién besar, yo te daré uno, *lo besa*";
    const res = await got('https://nekos.life/api/kiss', {json: true})
    //if (!res || !res.body || !res.body.data) return message.channel.send("Lo sentimos, ocurrió un error.", {code: "py"})
    
    const embed = {
      "title": "",
      "description": text,
      "color": 2335,
      "footer": {
        "text": "Powered by nekos.life"
      },
      "image": {
        "url": res.body.url
      },
    }

    message.channel.send({ embed })
  }
});

client.on('message', async message => {
  if (message.content.startsWith(prefix + "baka")) {
    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const args2 = args.slice(1).join(" ")
    let text = message.mentions.members.first() + " es un BAKA BAKA BAKAAAAA! <:tontotonto:427349831393083393>";
    if(!message.mentions.members.first()) text = "<@!" + message.author.id + "> debe ser un verdadero baka <:tontotonto:427349831393083393>";
    const res = await got('https://nekos.life/api/v2/img/baka', {json: true})
    //if (!res || !res.body || !res.body.data) return message.channel.send("Lo sentimos, ocurrió un error.", {code: "py"})
    
    const embed = {
      "title": "",
      "description": text,
      "color": 2335,
      "footer": {
        "text": "Powered by nekos.life"
      },
      "image": {
        "url": res.body.url
      },
    }

    message.channel.send({ embed })
  }
});

client.on('message', async message => {
  if (message.content.startsWith(prefix + "slap")) {
    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const args2 = args.slice(1).join(" ")
    let text = "<@!" + message.author.id + "> le dio una bofetada a " + message.mentions.members.first() + ", debió doler.";
    if(!message.mentions.members.first()) text = "<@!" + message.author.id + "> ¿se dió una bofetada...?";
    const res = await got('https://nekos.life/api/v2/img/slap', {json: true})
    //if (!res || !res.body || !res.body.data) return message.channel.send("Lo sentimos, ocurrió un error.", {code: "py"})
    
    const embed = {
      "title": "",
      "description": text,
      "color": 2335,
      "footer": {
        "text": "Powered by nekos.life"
      },
      "image": {
        "url": res.body.url
      },
    }

    message.channel.send({ embed })
  }
});

client.on('message', async message => {
  if (message.content.startsWith(prefix + "smug")) {
    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const args2 = args.slice(1).join(" ")
    let text = "<@!" + message.author.id + "> se ve un poco presumido ante " + message.mentions.members.first() + ", jeje";
    if(!message.mentions.members.first()) text = "<@!" + message.author.id + ">, se ve satisfecho de sí mism@...";
    const res = await got('https://nekos.life/api/v2/img/smug', {json: true})
    //if (!res || !res.body || !res.body.data) return message.channel.send("Lo sentimos, ocurrió un error.", {code: "py"})
    
    const embed = {
      "title": "",
      "description": text,
      "color": 2335,
      "footer": {
        "text": "Powered by nekos.life"
      },
      "image": {
        "url": res.body.url
      },
    }

    message.channel.send({ embed })
  }
});

client.on('message', async message => {
  if (message.content.startsWith(prefix + "feed")) {
    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const args2 = args.slice(1).join(" ")
    let text = "<@!" + message.author.id + "> está alimentando a " + message.mentions.members.first() + ", aww :heart:";
    if(!message.mentions.members.first()) return message.channel.send("**¡Menciona a una persona para alimentarla >u<!**")
    const res = await got('https://nekos.life/api/v2/img/feed', {json: true})
    //if (!res || !res.body || !res.body.data) return message.channel.send("Lo sentimos, ocurrió un error.", {code: "py"})
    
    const embed = {
      "title": "",
      "description": text,
      "color": 2335,
      "footer": {
        "text": "Powered by nekos.life"
      },
      "image": {
        "url": res.body.url
      },
    }

    message.channel.send({ embed })
  }
});

client.on('message', async message => {
  if (message.content.startsWith(prefix + "cat")) {
    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const args2 = args.slice(1).join(" ")
    let text = "Gatos owo";
    if(!message.mentions.members.first()) text = "Gatos owo";
    const res = await got('https://nekos.life/api/v2/img/meow', {json: true})
    //if (!res || !res.body || !res.body.data) return message.channel.send("Lo sentimos, ocurrió un error.", {code: "py"})
    
    const embed = {
      "title": "",
      "description": text,
      "color": 2335,
      "footer": {
        "text": "Powered by nekos.life"
      },
      "image": {
        "url": res.body.url
      },
    }

    message.channel.send({ embed })
  }
});

client.on('message', async message => {
  if (message.content.startsWith(prefix + "pat")) {
    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const args2 = args.slice(1).join(" ")
    let text = "<@!" + message.author.id + "> está araciando a " + args2 + " <:pat:455391227785773066>";
    if(!args2) text = "Está bien, yo te acariciaré, <@!" + message.author.id + "> <:pat:455391227785773066>";
    const res = await got('https://nekos.life/api/pat', {json: true})
    //if (!res || !res.body || !res.body.data) return message.channel.send("Lo sentimos, ocurrió un error.", {code: "py"})
    
    const embed = {
      "title": "",
      "description": text,
      "color": 2335,
      "footer": {
        "text": "Powered by nekos.life"
      },
      "image": {
        "url": res.body.url
      },
    }

    message.channel.send({ embed })
  }
});

client.on('message', async message => {
  if (message.content.startsWith(prefix + "lewd")) {
    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const args2 = args.slice(1).join(" ")
    let text = "...";
    if(!message.channel.nsfw) return message.channel.send(":underage: **Comando sólo para canales NSFW** :underage:");
    const res = await got('https://nekos.life/api/v2/lewd/neko', {json: true})
    //if (!res || !res.body || !res.body.data) return message.channel.send("Lo sentimos, ocurrió un error.", {code: "py"})
    
    const embed = {
      "title": "",
      "description": text,
      "color": 2335,
      "footer": {
        "text": "Powered by nekos.life"
      },
      "image": {
        "url": res.body.url
      }
    }

    message.channel.send({ embed })
  }
});

client.on('message', async message => {
  if (message.content.startsWith(prefix + "trap")) {
    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const args2 = args.slice(1).join(" ")
    let text = "¡It's a Trap!";
    if(!message.channel.nsfw) return message.channel.send(":underage: **Comando sólo para canales NSFW** :underage:");
    const res = await got('https://nekos.life/api/v2/img/trap', {json: true})
    //if (!res || !res.body || !res.body.data) return message.channel.send("Lo sentimos, ocurrió un error.", {code: "py"})
    
    const embed = {
      "title": "",
      "description": text,
      "color": 2335,
      "footer": {
        "text": "Powered by nekos.life"
      },
      "image": {
        "url": res.body.url
      }
    }

    message.channel.send({ embed })
  }
});

client.on('message', async message => {
  if (message.content.startsWith(prefix + "pussy")) {
    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const args2 = args.slice(1).join(" ")
    let text = "...";
    if(!message.channel.nsfw) return message.channel.send(":underage: **Comando sólo para canales NSFW** :underage:");
    const res = await got('https://nekos.life/api/v2/img/pussy', {json: true})
    //if (!res || !res.body || !res.body.data) return message.channel.send("Lo sentimos, ocurrió un error.", {code: "py"})
    
    const embed = {
      "title": "",
      "description": text,
      "color": 2335,
      "footer": {
        "text": "Powered by nekos.life"
      },
      "image": {
        "url": res.body.url
      }
    }

    message.channel.send({ embed })
  }
});

client.on('message', async message => {
  if (message.content.startsWith(prefix + "yuri")) {
    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const args2 = args.slice(1).join(" ")
    let text = "...";
    if(!message.channel.nsfw) return message.channel.send(":underage: **Comando sólo para canales NSFW** :underage:");
    const res = await got('https://nekos.life/api/v2/img/yuri', {json: true})
    //if (!res || !res.body || !res.body.data) return message.channel.send("Lo sentimos, ocurrió un error.", {code: "py"})
    
    const embed = {
      "title": "",
      "description": text,
      "color": 2335,
      "footer": {
        "text": "Powered by nekos.life"
      },
      "image": {
        "url": res.body.url
      }
    }

    message.channel.send({ embed })
  }
});

client.on('message', async message => {
  if (message.content.startsWith(prefix + "ero")) {
    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const args2 = args.slice(1).join(" ")
    let text = "...";
    if(!message.channel.nsfw) return message.channel.send(":underage: **Comando sólo para canales NSFW** :underage:");
    const res = await got('https://nekos.life/api/v2/img/ero', {json: true})
    //if (!res || !res.body || !res.body.data) return message.channel.send("Lo sentimos, ocurrió un error.", {code: "py"})
    
    const embed = {
      "title": "",
      "description": text,
      "color": 2335,
      "footer": {
        "text": "Powered by nekos.life"
      },
      "image": {
        "url": res.body.url
      }
    }

    message.channel.send({ embed })
  }
});

client.on('message', async message => {
  if (message.content.startsWith(prefix + "smallboobs")) {
    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const args2 = args.slice(1).join(" ")
    let text = "Para gustos hay colores";
    if(!message.channel.nsfw) return message.channel.send(":underage: **Comando sólo para canales NSFW** :underage:");
    const res = await got('https://nekos.life/api/v2/img/smallboobs', {json: true})
    //if (!res || !res.body || !res.body.data) return message.channel.send("Lo sentimos, ocurrió un error.", {code: "py"})
    
    const embed = {
      "title": "",
      "description": text,
      "color": 2335,
      "footer": {
        "text": "Powered by nekos.life"
      },
      "image": {
        "url": res.body.url
      }
    }

    message.channel.send({ embed })
  }
});

client.on('message', async message => {
  if (message.content.startsWith(prefix + "futanari")) {
    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const args2 = args.slice(1).join(" ")
    let text = "Para gustos hay colores";
    if(!message.channel.nsfw) return message.channel.send(":underage: **Comando sólo para canales NSFW** :underage:");
    const res = await got('https://nekos.life/api/v2/img/futanari', {json: true})
    //if (!res || !res.body || !res.body.data) return message.channel.send("Lo sentimos, ocurrió un error.", {code: "py"})
    
    const embed = {
      "title": "",
      "description": text,
      "color": 2335,
      "footer": {
        "text": "Powered by nekos.life"
      },
      "image": {
        "url": res.body.url
      }
    }

    message.channel.send({ embed })
  }
});

client.on('message', async message => {
  if (message.content.startsWith(prefix + "blowjob")) {
    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const args2 = args.slice(1).join(" ")
    let text = "...";
    if(!message.channel.nsfw) return message.channel.send(":underage: **Comando sólo para canales NSFW** :underage:");
    const res = await got('https://nekos.life/api/v2/img/blowjob', {json: true})
    //if (!res || !res.body || !res.body.data) return message.channel.send("Lo sentimos, ocurrió un error.", {code: "py"})
    
    const embed = {
      "title": "",
      "description": text,
      "color": 2335,
      "footer": {
        "text": "Powered by nekos.life"
      },
      "image": {
        "url": res.body.url
      }
    }

    message.channel.send({ embed })
  }
});

/* client.on('message', async message => {
  if (message.content.startsWith(prefix + "urban")) {
    const urban = require('relevant-urban');
    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const args2 = args.slice(1).join(" ");

    if(!args[1]) return message.channel.send("Especifica una palabra a buscar");

    let res = await got(`http://api.urbandictionary.com/v0/define?term=${args[1]}`, {json: true});

    const embed = {
      "title": "UrbanDictionary",
      "description": "Resultados para tu búsqueda de: " + args2,
      "color": 2335,
      "fields": [
      {
        "name": "Definición",
        "value": res.list.definition
      },
      {
        "name": "Ejemplo",
        "value": res.list.example
      },
      {
        "name": "Autor",
        "value": res.list.author
      },
      {
        "name": "Votos",
        "value": ":thumbsup: " + res.thumbsUp + " | :thumbsdown: " + res.thumbsDown
      }],
      "footer": {
        "text": "Powered by UrbanDictionary"
      },
    }
    message.channel.send('resultado: ' + res.list.definition)
}}); */

// eliminado por error continuo
/* client.on('message', message => {
  var args = message.content.substring(prefix.length).split(" ");
  let text = args.slice(1).join(" ");

  if (message.content.startsWith(prefix + "fetchmessage")) {
    let channel = '517788082783911946'; // <- ahora se probará con el canal de la onu
    channel.fetchMessages({ limit: 1 }).then(messages => {
      let lastMessage = messages.first();
      if (!lastMessage.author.bot) {
    // Si el ultimo mensaje no fue un autor
  }
})
.catch(message.reply('ocurrio un error'));
}
message.channel.send('claro, aquí tienes tu id ' + lastMessage)
}); */

client.on('message', async message => {
  if (message.content.startsWith(prefix + "fetchgenius")) {
    var args = message.content.slice(prefix.length).trim().split(/ +/g);
    const args2 = args.slice(1).join(" ");
    if(!args[1]) return message.channel.send("**Error:** No especificaste ningúna canción a buscar.");
    const res = await got(`https://api.genius.com/?q=${args2}&access_token=_FOO8dvw7TRaCkNMTXYLtOQ4p2jmTgK5zRlJR6EfSrkcjc8CMhl8o9nHHqsT5IAk`, { json: true });
    if(!res.body.response.hits[0].result) return message.channel.send(`¡No se ha encontrado una canción! :(`);
    if(res.body) return message.channel.send('there was an unk error');

    var nombre_w_ft = res.body.response.hits[0].result.title_with_featured;
    var artist = res.body.response.hits[0].result.primary_artist.name;
    var imagen_thumb = res.body.response.hits[0].result.header_image_thumbnail_url;

    const embed = {
      "title": nombre_w_ft,
      "description": "By " + artist,
      "color": 2335,
      "thumbnail": {
        "url": imagen_thumb,
      },
      "footer": {
        "text": "Powered by Genius"
      },
    }
    // message.channel.send({ embed }); //testeando ahora con variables y token generica...
    message.channel.send('song: ' + res.body.response.hits[0].result.title_with_featured); //para testeos_2
  }
});

client.login(process.env.BOT_TOKEN);