const saixd = ['701643179212013568', '972076172684967947','336007991574659074']

module.exports = {
  name: "say",
  description: "Make the bot say your message",

  run: async (client, message, args) => {
      if(!saixd.includes(message.author.id)) return
         if (!saixd.includes(message.author.id))
    if (!args.join(" ")) {
      message.channel.send("Hey developer add some text for me to repeat");
    }
    message.channel.send(args.join(" "), {
      allowedMentions: { parse: ["users"] },
    });
    message.delete();
  },
};