const { MessageEmbed } = require("discord.js");
const Discord  = require("discord.js");

module.exports = {
    name: "stats",
    category: "info",
    aliases: ['botinfo'],
    usage: "stats",
    run: async (client, message, args, guildData, player, prefix) => {
        try {
            let dev = [], cdev = [], supp =[];
            let user = await client.users.fetch(`701643179212013568`);//aj
            dev.push(`[${user.username}](https://discord.com/users/701643179212013568)`);
            user = await client.users.fetch(`336007991574659074`);//dest
            dev.push(`[${user.username}](https://discord.com/users/336007991574659074)`);
            user = await  client.users.fetch(`388480087768563713`);//satyam
            dev.push(`[${user.username}](https://discord.com/users/789440187612397578)`);

            user = await client.users.fetch(`892443549591801907`);//dad
            supp.push(`[${user.username}](https://discord.com/users/892443549591801907)`);
            user = await client.users.fetch(`972568689691988020`);//leon
            supp.push(`[${user.username}](https://discord.com/users/972568689691988020)`);
            user = await client.users.fetch(`956437602016296990`);//clif
            supp.push(`[${user.username}](https://discord.com/users/956437602016296990)`);
            user = await client.users.fetch(`909837635000864778`);//pos
            supp.push(`[${user.username}](https://discord.com/users/909837635000864778)`);
            const statsEmbed = new Discord.MessageEmbed()
			        .setColor(client.color)
              .setAuthor(`${client.user.username} 's Information`, client.user.displayAvatarURL())
              .setThumbnail(message.guild.iconURL({dynamic: true}))
              .setDescription(`**Bot's Mention: <@${client.user.id}>\nBot's Tag: ${client.user.tag}\nTotal Servers: ${client.guilds.cache.size}\nTotal Users: ${client.guilds.cache.reduce((acc, guild) => acc + guild.memberCount, 0)}\nTotal Channels: ${client.channels.cache.size}**`)
              .addFields([
                {name: `**__Developers__**`, value: dev.join(`, `) },
                {name: `**__Supporters__**`, value: supp.join(`, `) }
              ])
            message.channel.send({embeds: [statsEmbed]});
        } catch (e) {
          const emesdf = new MessageEmbed()
    			.setColor(client.color)
		    	.setAuthor(`An Error Occurred`)
			    .setDescription(`\`\`\`${e.message}\`\`\``);
			    return message.channel.send({embeds: [emesdf]});
        }
    }
}