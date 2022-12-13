const { MessageEmbed } = require('discord.js'),
  st = require('../../core/settings').bot;


module.exports = {
  name: 'antinuke',
  aliases: ['antiwizz', 'an'],
  category: 'security',
  run: async (client, message, args) => {
    let prefix = message.guild.prefix || '&';
    const option = args[0];
    const isActivatedAlready = await client.db.get(`${message.guild.id}_antinuke`);
    const antinuke = new MessageEmbed()
      .setThumbnail(`${client.user.avatarURL({ dynamic: true })}`)
      .setColor(client.color)
      .setTitle(`__**Antinuke**__`)
      .setDescription(`<a:c_dot4:1026889119667847249> It bans admins for doing suspicious activites in the server.\n<a:c_dot4:1026889119667847249> It ignores the ones who are whitelisted.\n<a:c_dot4:1026889119667847249> Antinuke must me enabled to protect the server.`)
      .addFields([
        { name: `__**Antinuke Enable**__`, value: `To Enable Antinuke, Use - \`${prefix}antinuke enable\`` },
        { name: `__**Antinuke Disable**__`, value: `To Disable Antinuke, Use - \`${prefix}antinuke disable\`` }
      ])

    if (message.author.id === message.guild.ownerId) {
      if (!option) {
        message.reply({ embeds: [antinuke] });
      } else if (option === 'enable') {
        if (isActivatedAlready) {
          const enabnble = new MessageEmbed()
            .setThumbnail(client.user.displayAvatarURL())
            .setColor(client.color)
            .setDescription(`**  ${message.guild.name} security settings <:stolen_emoji:1023985229758734359>
Ohh uh! looks like your server has already enabled security

Current Status : <:stolen_emoji:1013079145904873602><:stolen_emoji:1013079441397788762>

To disable use ${prefix}antinuke disable **`)
          message.channel.send({ embeds: [enabnble] })
        } else {
          await client.db.set(`${message.guild.id}_antinuke`, true);
          const enable = new MessageEmbed()
            .setThumbnail(client.user.displayAvatarURL())
            .setAuthor({name: `${client.user.username} Security`, iconURL: client.user.displayAvatarURL()})
            .setColor(client.color)
            .setDescription(`
    **  ${message.guild.name} Security Settings ** <:stolen_emoji:1023985229758734359>
Also move my role to top of roles for me to work properly <:authority:965702516589359124>
      ** 
Anti Ban <:ares_cross:1028665327875272754><:ares_tick:1028664451521589359>
Anti Kick <:ares_cross:1028665327875272754><:ares_tick:1028664451521589359>
Anti Unban <:ares_cross:1028665327875272754><:ares_tick:1028664451521589359>
Anti Role-Create <:ares_cross:1028665327875272754><:ares_tick:1028664451521589359>
Anti Role-Delete <:ares_cross:1028665327875272754><:ares_tick:1028664451521589359>
Anti Role-Update <:ares_cross:1028665327875272754><:ares_tick:1028664451521589359>
Anti Channel-Create <:ares_cross:1028665327875272754><:ares_tick:1028664451521589359>
Anti Channel-Delete <:ares_cross:1028665327875272754><:ares_tick:1028664451521589359>
Anti Channel-Update <:ares_cross:1028665327875272754><:ares_tick:1028664451521589359>
Anti Emoji Create <:ares_cross:1028665327875272754><:ares_tick:1028664451521589359>
Anti Emoji Update <:ares_cross:1028665327875272754><:ares_tick:1028664451521589359>
Anti Emoji Delete <:ares_cross:1028665327875272754><:ares_tick:1028664451521589359>
Anti Webhook Create <:ares_cross:1028665327875272754><:ares_tick:1028664451521589359>
Anti Webhook Update <:ares_cross:1028665327875272754><:ares_tick:1028664451521589359>
Anti Webhook Delete <:ares_cross:1028665327875272754><:ares_tick:1028664451521589359>
Anti Sticker Create <:ares_cross:1028665327875272754><:ares_tick:1028664451521589359>
Anti Sticker Update <:ares_cross:1028665327875272754><:ares_tick:1028664451521589359>
Anti Sticker Delete <:ares_cross:1028665327875272754><:ares_tick:1028664451521589359>
Anti Everyone/Here <:ares_cross:1028665327875272754><:ares_tick:1028664451521589359>
Anti Server-Update <:ares_cross:1028665327875272754><:ares_tick:1028664451521589359>
Anti Prune <:ares_cross:1028665327875272754><:ares_tick:1028664451521589359>
Anti Bot Add <:ares_cross:1028665327875272754><:ares_tick:1028664451521589359>
Anti Vanity Steal <:ares_cross:1028665327875272754><:ares_tick:1028664451521589359>

Auto Recovery <a:stolen_emoji:965675086956871720>
Enabled antinuke for this server
      **`)
          message.channel.send({ embeds: [enable] })
          await client.db.set(`${message.guild.id}_wl`, { whitelisted: [] });
        }
      } else if (option === 'disable') {
        if (!isActivatedAlready) {
          const dissable = new MessageEmbed().setThumbnail(client.user.displayAvatarURL())
            .setColor(client.color)
            .setDescription(` ** ${message.guild.name} security settings <:stolen_emoji:1023985229758734359>
Ohh NO! looks like your server doesn't enabled security

Current Status : <:stolen_emoji:1024295746494804028><:stolen_emoji:1024295818276118579>

To enable use ${prefix}antinuke enable ** `)
          message.channel.send({ embeds: [dissable] })
        } else {
          await client.db.set(`${message.guild.id}_antinuke`, null);
          const disable = new MessageEmbed().setThumbnail(client.user.displayAvatarURL())
            .setColor(client.color)
            .setDescription(`** ${message.guild.name} security settings <:stolen_emoji:1023985229758734359>
Successfully disabled security settings.

Current Status : <:stolen_emoji:1024295746494804028><:stolen_emoji:1024295818276118579> 

To enable again use ${prefix}antinuke enable **`)
          message.channel.send({ embeds: [disable] })
        }
      }
    } else {
      message.reply({ embeds: [new MessageEmbed().setColor(client.color).setDescription('<:vbVoteCrossCyan:1027966735153905724> | Only Server Owner Can Run This Command.')] });
    }
  }
}