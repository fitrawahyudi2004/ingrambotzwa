/*import fs from 'fs';
import crypto from 'crypto'
import { youtubeSearch } from '@bochilteam/scraper'

let handler = async (m, { conn, text, usedPrefix, command }) => {
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let pp = await conn.profilePictureUrl(who).catch(_ => hwaifu.getRandom())
let name = await conn.getName(who)

   if (!text) throw `*ᴛʜɪs ᴄᴏᴍᴍᴀɴᴅ ᴛᴏ ʀᴇᴛʀɪᴇᴠᴇ ᴀᴜᴅɪᴏ ᴏʀ ᴠɪᴅᴇᴏ ғʀᴏᴍ ʏᴏᴜᴛᴜʙᴇ sᴇʀᴠᴇʀ.* 
  
 =========================== 
 ★ ᴜsᴀɢᴇ: 
 ${usedPrefix + command} <name/url> 
  
 ★ ᴇxᴀᴍᴩʟᴇ: 
 ${usedPrefix + command} bolenath ji` 
   let vid = (await youtubeSearch(text)).video[0] 
   if (!vid) throw 'ᴀᴜᴅɪᴏ ᴏʀ ᴠɪᴅᴇᴏ ɴᴏᴛ ғᴏᴜɴᴅ﹗' 
   let { title, description, thumbnail, videoId, durationH, viewH, publishedTime } = vid 
   const url = 'https://www.youtube.com/watch?v=' + videoId 

    let sewa = `🔖 ᴛɪᴛʟᴇ: ${title} 
 📃 ᴅᴇsᴄʀɪᴩᴛɪᴏɴ: ${description} 
 📡 ᴩᴜʙʟɪsʜᴇᴅ: ${publishedTime} 
 ⌛ ᴅᴜʀᴀᴛɪᴏɴ: ${durationH} 
 👀️ ᴠɪᴇᴡs: ${viewH} 
`

    let img1 = fs.readFileSync('./img/atas.png');
    let img2 = fs.readFileSync('./img/bawah.png');
    return conn.sendButton(m.chat, hiasan, sewa, img1, [["menu", usedPrefix + "menu"], ["profile", usedPrefix + "profile"]], m, {
        contextInfo: {
            externalAdReply: {
                mediaUrl: "https://instagram.com/aguzfamilia",
                mediaType: "VIDEO",
                title: hiasan,
                body: bottime,
                previewType: 0,
                thumbnail: img1
            }
        }
    })
}
handler.help = ["gini"]
handler.tags = ["main"]
handler.command = /^gini$/i
export default handler
*/