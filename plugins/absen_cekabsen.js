
let handler = async (m, { conn, groupMetadata, usedPrefix }) => {
    let imgr = flaaa.getRandom()
    let id = m.chat
    conn.absen = conn.absen ? conn.absen : {}
    if (!(id in conn.absen)) await conn.sendButton(m.chat, bottime, `_*Tidak ada absen berlangsung digrup ini!*_\n\n*${usedPrefix}mulaiabsen* - untuk memulai absen`, `${imgr + 'Mulai Absen'}`, [
                ['MULAI ABSEN', `${usedPrefix}mulaiabsen`]
            ], m)
            
    let d = new Date
    let date = d.toLocaleDateString('id', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    })
    let absen = conn.absen[id][1]
    let list = absen.map((v, i) => `${dmenub} ${i + 1}.  @${v.split`@`[0]}`).join('\n')
            let caption = `*${htjava} TANGGAL ${htjava}*\n${date}
${conn.absen[id][2]}

*${htjava} SUDAH ABSEN ${htjava}*
*Total:* ${absen.length}

${dmenut}
${list}
${cmenua}
`
`
await conn.sendButton(m.chat, caption, author, `${imgr + 'List Absen'}`, [['HADIR', `${usedPrefix}absen`], ['MENU', `${usedPrefix}menu`]], m, { mentions: conn.parseMention(caption) })

}
handler.help = ['cekabsen']
handler.tags = ['absen']
handler.command = /^(cekabsen)$/i
handler.group = true
export default handler
