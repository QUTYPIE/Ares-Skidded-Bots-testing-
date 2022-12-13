<h2 style="font-size:2.5rem" align="center">djs-vanity</h2>

<h2 align="center"> A Simple & Easy Way To Change Your Discord Server Vantiy</h2>

<br>
<p align="center">
   <a href="https://www.npmjs.com/package/djs-vanity"><img src="https://img.shields.io/npm/v/djs-vanity.svg?style=flat-square" /></a><br>
   <a href="https://www.npmjs.com/package/djs-vanity"><img src="https://nodei.co/npm/djs-vanity.png?downloadRank=true&downloads=true&downloadRank=true&stars=true" /></a><br>
</p>

## 🖥️ <b>How to install ?

```
npm install djs-vanity
```

## Examples
```js
const { setVanity } = require('djs-vanity')

client.on('interactionCreate', async interaction => {
  if (!interaction.isCommand()) return;
  if (interaction.commandName === 'vanity') {
  await setVanity({ client: client, guild: interaction.guild.id, code: "vanity code" })
  }
});
```

## **Need Help ? Join the [Discord Server](https://discord.gg/astroz)**

 <h1>👥 Contact us | Support</h1>
 <p>
<a href="https://discord.gg/astroz"><img src="https://media.discordapp.net/attachments/950668582444990484/951804821399298118/5qjtcaQcR_1.png" /></a>
</p>