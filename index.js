const Discord = require('discord.js')
const config = require('./config.json')
const client = new Discord.Client();


client.on('ready', () => {
    console.log(`Entrei Como: ${client.user.tag}`);
  });

  /////////////////////////////////////////////
  client.on('message', msg => {
    if (msg.content === 't!ping') {
      msg.reply('Pong!');
    }
  });


client.login(config.token)