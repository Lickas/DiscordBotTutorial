const Discord = require('discord.js')
const config = require('./config.json')
const client = new Discord.Client();


client.on('ready', () => {
    console.log(`Entrei Como: ${client.user.tag}`);
  });

/// Pasta De Comandos ///
client.on('message', message =>{
  if (message.author.bot) return;
  if (message.channel.type == 'dm') return;
  if (!message.content.toLowerCase().startsWith(config.prefix.toLowerCase())) return;
  if (message.content.startsWith(`<@!${client.user.id}>`) || message.content.startsWith(`<@${client.user.id}>`)) return;
  


  const args = message.content.slice(config.prefix.length).trim().split(/ +/g)
  const command = args.shift().toLocaleLowerCase();
  try {
    const commandFile = require(`./commands/${command}.js`)

    commandFile.run(client, message, args)
  } catch (err) {
    console.log(`Erro: ${err}`)
  }

})


client.login(config.token)