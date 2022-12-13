const {
    MessageEmbed,
    Message,
    MessageActionRow,
    MessageButton,
    MessageSelectMenu,
    Client
} = require("discord.js");
const Settings = require('../../core/settings.js');
const client = require('../../index');
const db = require('../../core/db');

module.exports = {
  name: 'help',
  aliases: ['h'],
  category: 'info',
  run: async (client, message, args) => {
    let prefix = await db.get(`prefix_${message.guild.id}`);
    if (!prefix) prefix = Settings.bot.info.prefix;
    const row = new MessageActionRow()
      .addComponents(
        new MessageSelectMenu()
          .setCustomId('helpop')
          .setPlaceholder(`❯ ${client.user.username} Help Menu!`)
          .addOptions([
            {
              label: ' AntiNuke',
              description: 'Get All AntiNuke Command List',
              value: 'first',
              emoji: '<:moderation:1026896478540664892>',
            },
            {
              label: ' Moderation',
              description: 'Get All Moderation Command List',
              value: 'second',
              emoji: '<:antinuke:1026896229399023706>',
            },
            {
              label: 'Utility',
              description: 'Get All Utility Command List',
              value: 'third',
              emoji: '<:general:1026896811404828682>',
            },
            {
              label: 'Fun',
              description: 'Get All Fun Command List',
              value: 'fourth',
              emoji: '<a:Disco:1028691431923126322>',
            },
            {
              label: 'Giveaway',
              description: 'Get All Giveaway Commmand List',
              value: 'fifth',
              emoji: '<a:giveaway2:1027531088135991337>',
            },
            {
              label: 'Welcomer',
              description: 'Get All Welcomer Command List',
              value: 'sixth',
              emoji: '<a:welcomer:1026898748460257281>',
            }
          ])
        )
    const embed = new MessageEmbed()
    .setColor(client.color)
    .setAuthor({ name: message.author.tag, iconURL: message.author.displayAvatarURL({dynamic: true})})
    .setThumbnail(client.user.displayAvatarURL())
    .setDescription(`<a:c_dot4:1026889119667847249> Prefix for this server \`${prefix}\`\n<a:c_dot4:1026889119667847249> Total Commands: \`${client.commands.size}\`**\n[Invite Me](https://discord.com/api/oauth2/authorize?client_id=${client.user.id}&permissions=8&scope=bot) | [Support Server](https://discord.gg/xcPkAc2k3M)**\n\nType \`${prefix}antinuke enable\` to get started up!`)
    .addField('Command Category', `**<:moderation:1026896478540664892> \`:\` AntiNuke\n<:antinuke:1026896229399023706> \`:\` Moderation\n<:general:1026896811404828682> \`:\` Utility\n<a:Disco:1028691431923126322> \`:\` Fun\n<a:giveaway2:1027531088135991337> \`:\` Giveaway\n<a:welcomer:1026898748460257281> \`:\` Welcomer**\n\n\`Choose A Category To Get All Commands List\``)
    message.reply({embeds: [embed], components: [row]})
  }
}

function embeds(embed, prefix, ping) {
  if (embed === 'help') {
    return new MessageEmbed()
      .setColor('FF0000')
      .setAuthor(client.user.username, client.user.displayAvatarURL(), "https://discord.gg/5SsfRf6ueX")
      .setDescription(`**<a:skye_help:1024947429113602048> My Default Prefix Is  -**

**<a:c_dot4:1026889119667847249> A Best Antinuke Security Bot With Many More Advance Features
<a:c_dot4:1026889119667847249> ${client.user.username} Provides You Best Premium Security Features 
<a:c_dot4:1026889119667847249> [Invite](https://discord.com/api/oauth2/authorize?client_id=${client.user.id}&permissions=8&scope=bot) | [Support](https://discord.gg/TCf2JQafK8) | Total ${client.commands.size - 1} Commands **

**Choose One Of The Category Below : **

<:skye_module:1024957289616117800>  **__Main Module__**
>  **<:skye_antinuke:1024952333731364876> <:skye_arrow:1024953388909215764> Antinuke **
>  **<:skye_mod:1024952187136262154> <:skye_arrow:1024953388909215764> Moderation**
>  **<:skye_whitelist:1024952571535827014> <:skye_arrow:1024953388909215764> Whitelist** `);
    
  } else if (embed === 'x') {
    return new MessageEmbed()
      .setColor("FF0000")
      .setDescription("**MODERATION** `ban`,`kick`,`unban`,`mute`,`unmute`,`lock`,`unlock`,`unhide`,`hide`,`unbanall`,`nuke`")
  } else if (embed === 'toggle') {
    return new MessageEmbed()
    .setColor('FF0000')
    .setDescription(`**ANTINUKE COMMANDS**

>  To Enable Use :  \`-antinuke enable\`
>  To Disable Use :  \`-antinuke disable\`

Enabling Antinuke Will Feature Your Server : 

• \`Anti Ban\`,\`Anti Kick\`,\`Anti Unban\`,\` Anti Role Create\`,\`Anti Role Update \`,\`Anti Role Delete\`,\` Anti Channel Create\`,\`Anti Channel Delete\`,\`Anti Channel Update\`, \`Anti Emoji Create\` , \`Anti Emoji Delete\` , \`Anti Emoji Update\`,\`Anti Webhook Create \`,\`Anti Webhook Update\`,\`Anti Webhook Delete\`,\`Anti Sticker Create\`,\`Anti Sticker Update\`,\`Anti Sticker Delete\`,\`Anti Everyone/Here \`,\`Anti Server Update \`,\`Anti Prune \`,\`Anti Bot Add \`,\`Anti Vanity Steal \``);

  } 
}
