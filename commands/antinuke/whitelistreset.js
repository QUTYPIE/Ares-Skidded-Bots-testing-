const { MessageEmbed, MessageActionRow, MessageButton } = require("discord.js");

module.exports = {
  name: "whitelistreset",
  aliases: ['wlreset'],
  category: 'security',
  run: async (client, message, args) => {
    if (message.author.id !== message.guild.ownerId) {
      return message.reply({ embeds: [new MessageEmbed().setColor(client.color).setDescription(`${client.emoji.cross} | Only owner of this server can use this command.`)]});
    } else {
      const antinuke = await client.db.get(`${message.guild.id}_antinuke`);
      if (!antinuke) {
        message.reply({ embeds: [new MessageEmbed().setColor(client.color).setDescription(`${client.emoji.cross} | Seems that antinuke module is not enabled in this server.`)]});
      } else {
        await client.db.get(`${message.guild.id}_wl`).then(async (data) => {
          if (!data) {
            await client.db.set(`${message.guild.id}_wl`, { whitelisted: [] });
            message.reply({ embeds: [new MessageEmbed().setColor(client.color).setDescription(`${client.emoji.cross} | Please again run this command as the database was earlier not assigned.`)]})
          } else {
            const users = data.whitelisted;
            const mentions = [];
            if (users.length !== 0) {
              await client.db.set(`${message.guild.id}_wl`, { whitelisted: [] });
              return message.reply({ embeds: [new MessageEmbed().setColor(client.color).setDescription(`${client.emoji.tick} | Successfully reset the whitelisted members list.`)]})
            } else {
              message.reply({ embeds: [new MessageEmbed().setColor(client.color).setDescription(`${client.emoji.cross} | There are no whitelisted members in this server.`)]})
            }
          }
        });
      }
    }
  },
};