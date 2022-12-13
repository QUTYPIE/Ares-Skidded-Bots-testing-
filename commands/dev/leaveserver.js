const { MessageEmbed } = require('discord.js');
const saixd = ['701643179212013568', '972076172684967947','336007991574659074', '970384245635837994'];
module.exports = {
  name: `leaveserver`,
  category: `owner`,
  aliases: [`leaveg`, `gleave`],
  description: `Leaves A Guild`,
  run: async (client, message, args) => {
    if(!saixd.includes(message.author.id)) return;
    let id = args[0];
    if(!id){
      return message.reply({embeds: [new MessageEmbed().setColor(client.color).setDescription(`${client.emoji.cross} | You didn't provided the server Id.`)]})
    }
    let guild = await client.guilds.fetch(id);
    let name = guild?.name || 'No Name Found';
    if(!guild){
      return message.reply({embeds: [new MessageEmbed().setColor(client.color).setDescription(`${client.emoji.cross} | You didn't provided a valid server Id.`)]})
    }
    await guild.leave();
    return message.reply({embeds: [new MessageEmbed().setColor(client.color).setDescription(`${client.emoji.tick} | Successfully left **${name} (${id})**.`)]})
  }
};