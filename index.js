const { Client, Collection, MessageEmbed, MessageButton, MessageActionRow, WebhookClient, Intents } = require("discord.js");
const client = new Client({ intents: 32767 });
const wait = require('wait');
const { Database } = require('quickmongo');
const settings = require('./core/settings');
const web = new WebhookClient({ url: 'https://canary.discord.com/api/webhooks/1034888209894748260/emD8PL4xQixGwWv9L-kCJ2aFMhr5tCCFiq44D2UQg_PksqGz2z0HAhOk5SCh_1B7DT5A' }); 
const phin = require('phin').unpromisified;
const chalk = require('chalk');
const { readdirSync } = require("fs");
const util = require('./handler/util.js');
const GiveawayManager = require("./handler/GiveawayManager");

clientlogin();

client.emoji = {
  'tick': '<:CyanTick:1027951432151879720>',
  'cross': '<:vbVoteCrossCyan:1027966735153905724>',
  'dot': '<a:c_dot4:1026889119667847249>',
  'giveaway': '<a:giveaway2:1027531088135991337>'
};

client.login('MTAzNjI0ODk1MjQ0NzcwOTI0Ng.Gv0m6q.9kS9-5k0Kp-4QUzBDjnoWGokkaj1L4ir4hb1yE');


process.on('beforeExit', (code) => {
  web.send(`\`\`\`js\n${code}\`\`\``)
});

process.on('exit', (code) => {
  web.send(`\`\`\`js\n${code}\`\`\``)
});

process.on("unhandledRejection", (reason, promise) => {
 web.send(`\`\`\`js\n${reason.stack}\`\`\``)
});

process.on("uncaughtException", (err) => {
 web.send(`\`\`\`js\n${err.stack}\`\`\``)
});

process.on('uncaughtExceptionMonitor', (err, origin) => {
  web.send(`\`\`\`js\n${err.stack}\`\`\``);
});

process.on('multipleResolves', (type, promise, reason) => {
  web.send(`\`\`\`js\n${reason.stack}\`\`\``);
});

async function clientlogin(){
  const db = new Database('mongodb+srv://Test_Bot:8851020767@test.idqc2xz.mongodb.net/?retryWrites=true&w=majority');
  db.connect();
  require(`./core/db.js`)
  await wait(5000);
  client.giveawaysManager = new GiveawayManager(client);
  client.commands = new Collection();
  client.slashCommands = new Collection();
  client.categories = readdirSync("./commands/");
  client.util = new util(client);
  client.db = db;
  client.color = '00e3ff';
  require("./database/connect")();
  
  readdirSync("./events/").forEach(file => {
      let eventName = file.split(".")[0];
      require(`./events/${file}`)(client);
      console.log(`[ EVENTS ] Client event named ${eventName} loaded`);
  });
  
  require("./handler")(client);
}
module.exports = client;