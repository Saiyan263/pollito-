let fs = require('fs')
let fetch = require('node-fetch')
let moment = require('moment-timezone')
let path = require('path')
let util = require('util')
let handler = async (m, { conn, usedPrefix }) => {
let pp = './Menu2.jpg'
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let username = conn.getName(who)
//let vn = './media/mariana.mp3'
let menu =`
*✨𝗛ola, ${username}!!*

»𝐀𝐪𝐮𝐢́ 𝐞𝐧𝐜𝐨𝐧𝐭𝐫𝐚𝐫𝐚́𝐬 𝐥𝐨𝐬 𝐝𝐢𝐬𝐭𝐢𝐧𝐭𝐨𝐬 𝐜𝐨𝐦𝐚𝐧𝐝𝐨𝐬 𝐝𝐢𝐬𝐩𝐨𝐧𝐢𝐛𝐥𝐞𝐬«
╔════════════════╗
🐱‍👤.𝐛𝐨𝐨𝐬𝐭
🐱‍👤.𝐫𝐞𝐬𝐭𝐚𝐫𝐭
🐱‍👤.𝐛𝐚𝐧𝐥𝐢𝐬𝐭
🐱‍👤.𝐯𝐢𝐫𝐭𝐞𝐱𝐭𝟏
🐱‍👤.𝐨𝐰𝐧𝐞𝐫𝐛𝐚𝐧
🐱‍👤.𝐚𝐜𝐭𝐮𝐚𝐥𝐢𝐳𝐚𝐫
🐱‍👤.𝐂𝐚𝐣𝐚𝐅𝐮𝐞𝐫𝐭𝐞
🐱‍👤.𝐮𝐧𝐛𝐚𝐧𝐜𝐡𝐚𝐭𝟐
🐱‍👤.𝐛𝐜 𝐭𝐞𝐱𝐭𝐨
🐱‍👤.𝐛𝐜𝐠𝐜 𝐭𝐞𝐱𝐭𝐨
🐱‍👤.𝐛𝐜𝐛𝐨𝐭 𝐭𝐞𝐱𝐭𝐨
🐱‍👤.𝐬𝐞𝐭𝐛𝐲𝐞 @𝐭𝐚𝐠
🐱‍👤.𝐛𝐚𝐧𝐮𝐬𝐞𝐫 @𝐭𝐚𝐠
🐱‍👤.𝐞𝐧𝐚𝐛𝐥𝐞 𝐩𝐮𝐛𝐥𝐢𝐜
🐱‍👤.𝐝𝐢𝐬𝐚𝐛𝐥𝐞 𝐩𝐮𝐛𝐥𝐢𝐜
🐱‍👤.𝐮𝐧𝐛𝐚𝐧𝐮𝐬𝐞𝐫 @𝐭𝐚𝐠
🐱‍👤.𝐥𝐢𝐬𝐭𝐠𝐫𝐨𝐮𝐩 @𝐭𝐚𝐠
🐱‍👤.𝐞𝐧𝐚𝐛𝐥𝐞 𝐫𝐞𝐬𝐭𝐫𝐢𝐜𝐭
🐱‍👤.𝐞𝐧𝐚𝐛𝐥𝐞 𝐚𝐮𝐭𝐨𝐫𝐞𝐚𝐝
🐱‍👤.𝐬𝐞𝐭𝐰𝐞𝐥𝐜𝐨𝐦𝐞 @𝐭𝐚𝐠
🐱‍👤.𝐞𝐧𝐚𝐛𝐥𝐞 𝐚𝐮𝐭𝐨𝐫𝐞𝐚𝐝
🐱‍👤.𝐝𝐢𝐬𝐚𝐛𝐥𝐞 𝐚𝐮𝐭𝐨𝐫𝐞𝐚𝐝
🐱‍👤.𝐥𝐞𝐚𝐯𝐞𝐠𝐜
🐱‍👤.𝐬𝐞𝐭𝐛𝐨𝐭𝐛𝐢𝐨
🐱‍👤.𝐬𝐞𝐭𝐛𝐨𝐭𝐧𝐚𝐦𝐞
🐱‍👤.𝐬𝐞𝐭𝐛𝐨𝐭𝐩𝐩
🐱‍👤.𝐢𝐧𝐬𝐩𝐞𝐜𝐭
🐱‍👤.𝐬𝐢𝐦𝐮𝐥𝐚𝐭𝐞
╚════════════════╝
»𝐂𝐎𝐌𝐀𝐍𝐃𝐎𝐒 𝐔𝐍𝐈𝐂𝐀𝐌𝐄𝐍𝐓𝐄 𝐏𝐀𝐑𝐀 𝐄𝐋 𝐎𝐖𝐍𝐄𝐑 𝐃𝐄𝐋 𝐁𝐎𝐓«

`.trim()
let mentionedJid = [who]
conn.send3ButtonImg(m.chat, pp, menu, '©𝐉𝐡𝐮𝐬𝐳ᙆ  ᷦ×͜×', '𝐌𝐞𝐧𝐮 𝐏𝐫𝐢𝐧𝐜𝐢𝐩𝐚𝐥', `#menu`, '𝐌𝐞𝐧𝐮 𝐀𝐮𝐝𝐢𝐨𝐬', `#menuaudios`, '𝐈𝐧𝐬𝐭𝐚𝐠𝐫𝐚𝐦 🤳', `#igowner`, m, false, { contextInfo: { mentionedJid }})   
//await await await await await await conn.sendFile(m.chat, vn, 'mariana.mp3', null, m, true, {
//type: 'audioMessage', 
//ptt: true 
//})
}
handler.command = /^(ownermenu|menuowner|ownerm|om)$/i
handler.fail = null
module.exports = handler
