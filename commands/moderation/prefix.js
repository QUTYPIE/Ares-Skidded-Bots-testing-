const { Message, Client, MessageEmbed } = require("discord.js");
module.exports = {
  name: "prefix",
  aliases: ['setprefix'],
  category: 'mod',
  /**
    *
    * @param {Client} client
    * @param {Message} message
    * @param {String[]} args
  */
  
  run: async (client, message, args) => {
    if (!message.member.permissions.has("ADMINISTRATOR")) {
      return message.reply("You must have `Administration` perms to change the prefix of this server.");
    }
    if(!args[0]){
      return message.reply({embeds: [new MessageEmbed().setColor(`00e3ff`).setDescription(`You didn't provided the new prefix.`)]})
    }
    if (args[1]) {
       const embed = new MessageEmbed()
        .setDescription("You can not set prefix a double argument")
        .setColor('00e3ff')
      return message.channel.send({ embeds: [embed] });
    }
    if (args[0].length > 3) {
       const embed = new MessageEmbed()
        .setDescription("You can not send prefix more than 3 characters")
        .setColor('00e3ff')
      return message.channel.send({ embeds: [embed] });
    }
    if (args.join("") === "-") {
      client.db.delete(`prefix_${message.guild.id}`);
      const embed = new MessageEmbed()
        .setDescription("Reseted Prefix")
        .setColor('00e3ff')
      return await message.channel.send({ embeds: [embed] });
    }

    client.db.set(`prefix_${message.guild.id}`, args[0]);
    const embed = new MessageEmbed()
       .setDescription(`New Prefix For This Server Is ${args[0]}`)
       .setColor('00e3ff')
    await message.channel.send({ embeds: [embed] });
  }
}