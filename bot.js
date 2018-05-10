const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = "__";

client.on('ready', () => {
  client.user.setGame('5mandos')
});

client.login(process.env.BOT_TOKEN);
