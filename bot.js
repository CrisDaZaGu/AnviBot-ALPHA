const Discord = require('discord.js');
const client = new Discord.Client();
const args = message.content.slice(prefix.length).trim().split(/ +/g);
const command = args.shift().toLowerCase();

let prefix = "++";
client.on("message", (message) => {
  // Exit and stop if the prefix is not there or if user is a bot
  if (!message.content.startsWith(prefix) || message.author.bot) return;

  if (message.content.startsWith(prefix + "ping")) {
    message.channel.send("pong!");
  } else
  if (message.content.startsWith(prefix + "que")) {
    message.channel.send("so!");
  }
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
