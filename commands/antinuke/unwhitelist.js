const { MessageEmbed } = require("discord.js");

module.exports = {
  name: 'unwhitelist',
  aliases: ['uwl'],
  category: 'security',
  run: async (client, message, args) => {
    
    const uwl = new MessageEmbed()
      .setColor(client.color)
      .setTitle(`__**Unwhitelist Commands**__`)
      .setDescription(`**Removes user from whitelisted users which means that there will be proper actions taken on the members if they trigger the antinuke module.**`)
      .addFields([
        { name: `__**Usage**__`, value: `<a:c_dot4:1026889119667847249> \`${message.guild.prefix}unwhitelist @user\`\n<a:c_dot4:1026889119667847249> \`${message.guild.prefix}uwl @user\`` }
      ])
    
    if (message.author.id !== message.guild.ownerId) {
      return message.reply({ embeds: [new MessageEmbed().setColor(client.color).setDescription(`${client.emoji.cross} | Only owner of this server can use this command.`)]});
    } else {
      const antinuke = await client.db.get(`${message.guild.id}_antinuke`);
      if (!antinuke) {
         const dissable = new MessageEmbed()
          .setColor(client.color)
          .setDescription(` ** ${message.guild.name} security settings <:stolen_emoji:1023985229758734359>
Ohh NO! looks like your server doesn't enabled security

Current Status : <:stolen_emoji:1024295746494804028><:stolen_emoji:1024295818276118579>

To enable use antinuke enable ** `)
      } else {
        await client.db.get(`${message.guild.id}_wl`).then(async (data) => {
          if (!data) {
            await client.db.set(`${message.guild.id}_wl`, { whitelisted: [] });
            return message.reply({embeds: [new MessageEmbed().setColor(client.color).setDescription(`${client.emoji.cross} | Please again run this command as the database was earlier not assigned.`)]})
          } else {
            const user = message.mentions.users.first();
            if (!user) {
              message.reply({ embeds: [uwl] });
            } else {
              const userId = user.id;
              
              if (!data.whitelisted.includes(userId)) {
                message.reply({ embeds: [new MessageEmbed().setColor(client.color).setDescription(`${client.emoji.cross} | <@${user.id}> is not a whitelisted member.`)] });
              } else {
                await client.db.pull(`${message.guild.id}_wl.whitelisted`, userId);
                 message.reply({ embeds: [new MessageEmbed().setColor(client.color).setDescription(`${client.emoji.tick} | Successfully removed <@${user.id}> from whitelisted user.`)] });
              }
            }
          }
        })
      }
    }
  }
}