const Discord = require('discord.js');

module.exports.run = async (client, message, args) => {

    const convidarbot = new Discord.MessageEmbed()
    .setColor('#fc0313')
    .addField(`Para Adicionares o ${client.user.tag} clica no seguinte link:`, `[Clica Para Adicionar](https://discord.com/oauth2/authorize?scope=bot&client_id=677935700636860458&permissions=8)`)
    .setFooter(`Tutorial Youtube | Comando Embed`)
    message.channel.send(convidarbot)

}