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

»𝐄𝐬𝐜𝐫𝐢𝐛𝐞 𝐥𝐚𝐬 𝐩𝐚𝐥𝐚𝐛𝐫𝐚𝐬/𝐟𝐫𝐚𝐬𝐞𝐬 𝐭𝐚𝐥 𝐜𝐨𝐦𝐨 𝐞𝐬𝐭á𝐧, 𝐧𝐨 𝐡𝐚𝐜𝐞 𝐟𝐚𝐥𝐭𝐚 𝐩𝐨𝐧𝐞𝐫 𝐧𝐢𝐧𝐠ú𝐧 𝐩𝐫𝐞𝐟𝐢𝐣𝐨 (#, ., *, 𝐞𝐭𝐜)«
»𝐀𝐪𝐮𝐢́ 𝐞𝐧𝐜𝐨𝐧𝐭𝐫𝐚𝐫𝐚́𝐬 𝐥𝐨𝐬 𝐝𝐢𝐬𝐭𝐢𝐧𝐭𝐨𝐬 𝐚𝐮𝐝𝐢𝐨𝐬/𝐟𝐫𝐚𝐬𝐞𝐬 𝐝𝐢𝐬𝐩𝐨𝐧𝐢𝐛𝐥𝐞𝐬«
╔════════════════╗
🔊𝐍𝐨𝐜𝐡𝐞 𝐝𝐞 𝐩𝐚𝐳
🔊𝐁𝐮𝐞𝐧𝐨𝐬 𝐝𝐢𝐚𝐬
🔊𝐀𝐮𝐝𝐢𝐨 𝐡𝐞𝐧𝐭𝐚𝐢
🔊𝐅𝐢𝐞𝐬𝐭𝐚 𝐝𝐞𝐥 𝐚𝐝𝐦𝐢𝐧
🔊𝐅𝐢𝐞𝐬𝐭𝐚 𝐝𝐞𝐥 𝐚𝐝𝐦𝐢𝐧 𝟐
🔊𝐕𝐢𝐞𝐫𝐧𝐞𝐬
🔊𝐂𝐡𝐢𝐜𝐚 𝐥𝐠𝐚𝐧𝐭𝐞
🔊𝐁𝐚𝐧𝐞𝐚𝐝𝐨
🔊𝐅𝐞𝐥𝐢𝐳 𝐧𝐚𝐯𝐢𝐝𝐚𝐝
🔊𝐀 𝐧𝐚𝐝𝐢𝐞 𝐥𝐞 𝐢𝐦𝐩𝐨𝐫𝐭𝐚
🔊𝐒𝐞𝐱𝐨
🔊𝐕𝐞𝐭𝐞 𝐚 𝐥𝐚 𝐯𝐫𝐠
🔊𝐇𝐨𝐥𝐚
🔊𝐔𝐧 𝐩𝐚𝐭𝐨
🔊𝐍𝐲𝐚𝐧𝐩𝐚𝐬𝐮
🔊𝐓𝐞 𝐚𝐦𝐨
🔊𝐘𝐚𝐦𝐞𝐭𝐞
🔊𝐓𝐞 𝐝𝐢𝐚𝐠𝐧𝐨𝐬𝐭𝐢𝐜𝐨 𝐜𝐨𝐧 𝐠𝐚𝐲
🔊𝐄𝐥 𝐫𝐚𝐩 𝐝𝐞 𝐅𝐞𝐫𝐧𝐚𝐧𝐟𝐥𝐨𝐨
🔊𝐚𝐥𝐚𝐧
🔊𝐀𝐥𝐚𝐧𝐙𝐳𝐳
🔊𝐐𝐮𝐢𝐞𝐧 𝐞𝐬 𝐭𝐮 𝐬𝐞𝐦𝐩𝐚𝐢 𝐛𝐨𝐭𝐬𝐢𝐭𝐨 𝟕𝐰𝟕
🔊𝐁𝐚ñ𝐚𝐭𝐞
🔊𝐕𝐢𝐯𝐚𝐧 𝐥𝐨𝐬 𝐧𝐨𝐯𝐢𝐨𝐬
🔊𝐌𝐚𝐫𝐢𝐜𝐚 𝐪𝐮𝐢𝐞𝐧
🔊𝐄𝐬 𝐩𝐮𝐭𝐨
🔊𝐋𝐚 𝐛𝐢𝐛𝐥𝐢𝐚
🔊𝐎𝐧𝐢𝐢𝐜𝐡𝐚𝐧
🔊𝐁𝐨𝐭 𝐩𝐮𝐭𝐨
🔊𝐅𝐞𝐥𝐢𝐳 𝐜𝐮𝐦𝐩𝐥𝐞𝐚ñ𝐨𝐬
🔊𝐒𝐡𝐚𝐝𝐨𝐰 𝐁𝐨𝐭
🔊𝐏𝐚𝐬𝐚 𝐩𝐚𝐜𝐤 𝐁𝐨𝐭
🔊𝐀𝐭𝐞𝐧𝐜𝐢ó𝐧 𝐠𝐫𝐮𝐩𝐨
🔊𝐎𝐡 𝐦𝐞 𝐯𝐞𝐧𝐠𝐨
🔊𝐌𝐮𝐫𝐢𝐨 𝐞𝐥 𝐠𝐫𝐮𝐩𝐨
🔊𝐒𝐢𝐮𝐮𝐮
🔊𝐑𝐚𝐰𝐫
🔊𝐔𝐰𝐔
🔊:𝐜
🔊𝐚
╚════════════════╝
»𝐂𝐎𝐌𝐀𝐍𝐃𝐎𝐒 𝐃𝐄 𝐀𝐔𝐃𝐈𝐎𝐒/𝐅𝐑𝐀𝐒𝐄𝐒 𝐏𝐀𝐑𝐀 𝐔𝐒𝐎 𝐆𝐄𝐍𝐄𝐑𝐀𝐋. 𝐏𝐎𝐑 𝐅𝐀𝐕𝐎𝐑 𝐄𝐕𝐈𝐓𝐀𝐑 𝐄𝐋 𝐒𝐏𝐀𝐌«
`.trim()
let mentionedJid = [who]
conn.send3ButtonImg(m.chat, pp, menu, '©𝐉𝐡𝐮𝐬𝐳ᙆ  ᷦ×͜×', '𝐌𝐞𝐧𝐮 𝐏𝐫𝐢𝐧𝐜𝐢𝐩𝐚𝐥', `#menu`, '𝐌𝐞𝐧𝐮 𝐏𝐫𝐨𝐠𝐫𝐚𝐦𝐚𝐜𝐢ó𝐧', `#programacionmenu`, '𝐈𝐧𝐬𝐭𝐚𝐠𝐫𝐚𝐦 🤳', `#igowner`, m, false, { contextInfo: { mentionedJid }})   
//await await await await await await conn.sendFile(m.chat, vn, 'mariana.mp3', null, m, true, {
//type: 'audioMessage', 
//ptt: true 
//})
}
handler.command = /^(audiosmenu|menuaudios|audiosm|am)$/i
handler.fail = null
module.exports = handler
