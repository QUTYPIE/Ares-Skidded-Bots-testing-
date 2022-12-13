const prefix = process.env.prefix || '-'
const status = `${prefix}help`;


module.exports = {
  bot: {
    info: {
      prefix: process.env.prefix || '-',
      token: process.env.token,
      invLink: 'https://dsc.gg/ares-support',
    },
    options: {
      founders: ['954815434828431451'],
      privateMode: false,
    },
    presence: {
      name: process.env.statusText || status,
      type: 'STREAMING',
      url: 'https://twitch.tv/pewdiepie'
    },
    credits: {
      developerId: '954815434828431451',
      developer: 'SAI_xD 69#8377',
    }
  }
}