import fetch from 'node-fetch'

let handler = async(m, { conn, usedPrefix, text, args, command }) => {

if (!text) throw `Contoh penggunaan ${usedPrefix}${command} query`
conn.sendButton(m.chat, `Random *${command}*`, author, `https://api.lolhuman.xyz/api/random/nsfw/${text}?apikey=${global.lolkey}`, [['🔄 Next 🔄', `/${command}`]], m)

}
handler.command = /^(dlrandom)$/i

export default handler