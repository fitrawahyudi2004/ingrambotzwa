import { promises } from 'fs'
import { join } from 'path'
import { xpRange } from '../lib/levelling.js'
import moment from 'moment-timezone'
import os from 'os'
import fs from 'fs'
import fetch from 'node-fetch'
let handler = async (m, { conn, args, command }) => {
let imgr = flaaa.getRandom()
let totalf = Object.values(global.plugins).filter(
    (v) => v.help && v.tags
  ).length;
 await conn.sendButton(m.chat, `𝙏𝙃𝘼𝙉𝙆𝙎 𝙏𝙊\n\n◐ Allah SWT\n◐ Ayah\n◐ Mamak\n◐ Abang\n\n© https://instagram.com/fitra_wahyudi_
 `,dmenuf + '\n\n' + cmenua, `${imgr + 'Thanks To'}`, [['THNKS F.W.D','Ok']], m, {
contextInfo: { externalAdReply :{
                        mediaUrl: '',
                        mediaType: 2,
                        description: 'anu',
                        title: bottime,
                        body: 'Contributor F.W.D',          previewType: 0,
                        jpegThumbnail: await (await fetch(thumbdoc)).buffer(),
                        sourceUrl: swb
                      }}
})
}


handler.help = ['tqto', 'contributor']
handler.tags = ['info','main']
handler.command = /^(tqto|thanksto|contributor)$/i
handler.private = false

export default handler