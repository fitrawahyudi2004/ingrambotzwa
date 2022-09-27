import fs from 'fs';
import crypto from 'crypto'
let handler = async (m, { conn, text, usedPrefix }) => {

    let sewa = `
  〔 llı OWNER ${namebot} ıll 〕
    
Nama: Fitra Wahyudi
Umur: 18
Asal: Medan, Sumatra Utara
Pacar: Ga ada

Nomor: ${nomorowner}

${botdate}
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
handler.help = ['owner']
handler.tags = ['Bot']

handler.command = /^(owner|creator)$/i

export default handler
