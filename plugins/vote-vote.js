
let handler = async (m, { conn, groupMetadata, usedPrefix, command }) => {
    let id = m.chat
    conn.vote = conn.vote ? conn.vote : {}
    if (!(id in conn.vote)) await conn.sendButton(m.chat, `Tidak ada voting digrup ini!`, author, null, [
    ['vote', `${usedPrefix}+vote`],
    ['venu', `${usedPrefix}menu`]
], m)
    let isVote = conn.vote[id][1].concat(conn.vote[id][2])
    const wasVote = isVote.includes(m.sender)
    if (wasVote) throw 'Kamu sudah vote!'
    if (/up/i.test(command)) {
        conn.vote[id][1].push(m.sender)
    } else if (/de/i.test(command)) {
        conn.vote[id][2].push(m.sender)
    }
    
    let [reason, upvote, devote] = conn.vote[id]
    let caption = `*${htjava} DAFTAR VOTE ${htjava}*
*Alasan:* ${reason}

*${htjava} UPVOTE ${htjava}*
*Total:* ${upvote.length}
${dmenut}
${upvote.map((v, i) => `${dmenub} ${i + 1}.  @${v.split`@`[0]}`).join('\n')}
${dmenuf}

*${htjava} DEVOTE ${htjava}*
*Total:* ${devote.length}
${dmenut}
${devote.map((v, i) => `${dmenub} ${i + 1}.  @${v.split`@`[0]}`).join('\n')}
${dmenuf}
`.trim()
await conn.sendButton(m.chat, caption, author, null, [
        ['upvote', `${usedPrefix}upvote`],
        ['devote', `${usedPrefix}devote`]
    ], m, { mentions: conn.parseMention(caption) })
}
handler.help = ['upvote', 'devote']
handler.tags = ['vote']
handler.command = /^(up|de)vote$/i

handler.group = true

export default handler
