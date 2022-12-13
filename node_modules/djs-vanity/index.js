const { default: axios } = require('axios')

async function setVanity({ client: client, guild: guild, code: code }) {
    if (!client) throw Error('You need to define client')
    if (!guild) throw Error('You need to provide guild id')
    if (!code) throw Error('You need to provide vanity code')
    const { data, status, statusText } = await axios(
        {
            url: `https://discord.com/api/v9/guilds/${guild}/vanity-url`,
            method: "put",
            headers: { "Authorization": `Bot ${client.token}` },
            data: { "code": code }
        }
    )
    if (data.code === 50020 && data.message === "Invite code is either invalid or taken.") throw Error('Provided vanity is already used!')
    if (data.code === 50001 && data.message === "Missing Access") throw Error('Provided server not have vanity feature!')
    if (data.code === 200) throw new Error(`Vanity changed: ${code}`)
}

module.exports.setVanity = setVanity

