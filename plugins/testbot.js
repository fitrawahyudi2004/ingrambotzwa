let handler = async (m, { conn }) => {
let info = `
*${htki} ONLINE ${htka}*
          
   📛Bot Online Nih:v
`
const sections = [
   {
    title: `✃ INFO`,
	rows: [
	    {title: "🗃️Menu", rowId: '.menu', description: 'Event INGRAM BOT' },
	
	]
    }, {
    title: `✃ INFO`,
	rows: [
	    {title: "🌸Sapa Bot", rowId: '.salken', description: 'Discount Pembayaran' },
	    ]
        },
]

const listMessage = {
  text: ' ',
  footer: info,
  title: null,
  buttonText: "INGRAM BOT🎐",
  sections
}
await conn.sendMessage(m.chat, listMessage, { quoted: m})
//conn.sendHydrated(m.chat, info, wm, null, sgc, "🌎 Group Official", null,null, [['Owner','.owner']], m)
}

handler.customPrefix = /^(bot)$/i
handler.command = new RegExp

export default handler