const client = require('../index'),
  st = require('../core/settings'),
  db = require('../core/db');
const { MessageEmbed, MessageButton, MessageActionRow } = require('discord.js');

module.exports = async (client) => {

client.on('messageCreate', async (message) => {
  client.util.setPrefix(message, client);
  client.util.noprefix();
  let prefix = message.guild.prefix || '&';
  if (message.author.bot || !message.guild) return;
  const row = new MessageActionRow()
  .addComponents(
    new MessageButton()
    .setLabel(`Invite Me`)
    .setStyle('LINK')
    .setURL(`https://discord.com/api/oauth2/authorize?client_id=${client.user.id}&permissions=8&scope=bot`)
  ,
    new MessageButton()
  .setLabel(`Support`)
  .setStyle('LINK')
  .setURL(`https://dsc.gg/ares-support`)
  )
  if (message.content === `<@${client.user.id}>`) { 
    return message.channel.send({ embeds: [new MessageEmbed().setColor(`00e3ff`).setTitle(message.guild.name).setDescription(`Hey ${message.author},\nMy Prefix here is: \`${prefix}\`\nServer Id: \`${message.guild.id}\`\n\nType \`${prefix}\`**help** To Get The Command List.`).setFooter({text: `Developed with ❤️ By Ares Development`, iconURL: message.guild.iconURL({dynamic: true})})], components: [row] });
  }
  let datab = client.noprefix || [];
  if (!datab.includes(message.author.id)) {
    if (!message.content.startsWith(prefix)) return;
  }
  const args = datab.includes(message.author.id) == false ? message.content.slice(prefix.length).trim().split(/ +/) : message.content.startsWith(prefix) == true ? message.content.slice(prefix.length).trim().split(/ +/) : message.content.trim().split(/ +/);

  const cmd = args.shift().toLowerCase();

  const command = client.commands.get(cmd.toLowerCase()) || client.commands.find(c => c.aliases?.includes(cmd.toLowerCase()));
  if(!command) return;
  message.guild.prefix = prefix;
  await command.run(client, message, args);
});
}