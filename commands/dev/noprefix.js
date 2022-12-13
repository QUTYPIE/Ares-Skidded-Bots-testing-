const { Message, Client, MessageEmbed,MessageActionRow,MessageButton } = require("discord.js");
const saixd = ['701643179212013568', '972076172684967947', '336007991574659074','954815434828431451']
module.exports = {
  name: "noprefix",
  aliases: ['np'],
  category: 'owner',
  run: async (client, message, args) => {
    const embed = new MessageEmbed()
    .setColor(client.color)
    let prefix = message.guild.prefix;
    if(!saixd.includes(message.author.id)) return;
    if(!args[0]){
      return message.channel.send({embeds: [embed.setColor(client.color).setDescription(`Please provide the required arguments.\n${prefix}noprefix \`<add/remove/list>\` \`<user id>\``)]})
    }
    if(args[0].toLowerCase() === `list`){
      let listing = await client.db.get(`noprefix_${client.user.id}`) ? await client.db.get(`noprefix_${client.user.id}`) : [];
       let info = "";
       let ss;
       if(listing.length < 1) info = `No Users ;-;`;
       else {
        for(let i = 0; i < listing.length; i++){
          ss = await client.users.fetch(`${listing[i]}`);
          info = info + `${i + 1}) ${ss.tag} (${ss.id})\n`
         }
       }
       return message.channel.send(`**No Prefix** Users List :-\n\`\`\`js\n${info}\`\`\``)
    }
      let check = 0;
    if(!args[1]){
      return message.channel.send({embeds: [embed.setColor(client.color).setDescription(`Please provide the required arguments.\n${prefix}noprefix \`<add/remove/list>\` \`<user id>\``)]})
    }
    let user = await client.users.fetch(`${args[1]}`).catch((er) => { 
      check += 1;
    })
      if(check == 1){
        return message.channel.send({embeds: [embed.setColor(client.color).setDescription(`Please provide the required arguments.\n${prefix}noprefix \`<add/remove/list>\` \`<user id>\``)]})
      }
    let added = await client.db.get(`noprefix_${client.user.id}`) ? await client.db.get(`noprefix_${client.user.id}`) : [];
    let opt = args[0].toLowerCase();
    if(opt == `add` || opt == `a` || opt == `+`){
      added.push(`${user.id}`)
      added = client.util.removeDuplicates(added);
      await client.db.set(`noprefix_${client.user.id}`, added)
      return message.channel.send({embeds: [embed.setColor(client.color).setDescription(`${client.emoji.tick} | **<@${user.id}> (${user.id})** has been added as a **No Prefix** user.`)]})
    }
    if(opt == `remove` || opt == `r` || opt == `-`){
      added = added.filter(srv => srv != `${user.id}`)
      added = client.util.removeDuplicates(added);
      await client.db.set(`noprefix_${client.user.id}`, added)
      return message.channel.send({embeds: [embed.setColor(client.color).setDescription(`${client.emoji.tick} | **<@${user.id}> (${user.id})** has been removed from a **No Prefix** user.`)]})
    }
      message.channel.send({embeds: [embed.setColor(client.color).setDescription(`${prefix}noprefix \`<add/remove/list>\` \`<user id>\``)]})
  }
}