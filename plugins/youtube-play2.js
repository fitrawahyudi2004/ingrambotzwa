import fs from 'fs'
import fetch from 'node-fetch'
let handler = async (m, {command, conn, text}) => {
if (!text) throw `[❗INFO❗] Masukan Nama Lagu Yang Ingin Di Cari\n\n*—◉ Contoh:\n#play.1 Good Feeling - Flo Rida*`
try {
if (command == 'play.1') {
conn.reply(m.chat, `*_⏳Wait.._⏳*`, m, {
contextInfo: { externalAdReply :{ mediaUrl: sig, mediaType: 1, description: null, 
title: 'AUDIO',
body: global.wm,         
previewType: 0, thumbnail: fs.readFileSync("./thumbnail.jpg"),
sourceUrl: sgh}}})
let res = await fetch(`https://api.dhamzxploit.my.id/api/ytplaymp3?text=${text}`)
let json = await res.json()
conn.sendFile(m.chat, json.result.url, 'error.mp3', wm, m, null, adReply)
}
if (command == 'play.2') {
conn.reply(m.chat, `*_⏳ Wait..⏳_*`, m, {
contextInfo: { externalAdReply :{ mediaUrl: sig, mediaType: 1, description: null, 
title: 'VIDEO',
body: global.wm,         
previewType: 0, thumbnail: fs.readFileSync("./thumbnail.jpg"),
sourceUrl: `https://github.com/AyGemuy`}}})
let res = await fetch(`https://api.dhamzxploit.my.id/api/ytplaymp4?text=${text}`)
let json = await res.json()
conn.sendButtonVid(m.chat, json.result.url, `*R E S U L T*`, author, 'To mp3', '.tomp3', fpayment, adReply)
}
}catch(e){
m.reply('*[❗INFO❗] ERROR,TIDAK DAPAT MENCARI LAGU TERSEBUT*')
console.log(e)
}}
handler.help = ['play.1' , 'play.2'].map(v => v + ' <texto>')
handler.tags = ['downloader']
handler.command = ['play.1', 'play.2']
export default handler