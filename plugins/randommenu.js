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
👾.𝐟𝐮𝐭𝐛𝐨𝐥
👾.𝐌𝐞𝐬𝐬𝐢
👾.𝐚𝐧𝐢𝐦𝐚𝐥
👾.𝐦𝐞𝐦𝐞
👾.𝐦𝐞𝐦𝐞𝟐
👾.𝐦𝐞𝐦𝐞𝟑
👾.𝐜𝐚𝐭
👾.𝐝𝐨𝐠
👾.𝐩𝐢𝐤𝐚𝐜𝐡𝐮
👾.𝐛𝐥𝐚𝐜𝐤𝐩𝐢𝐧𝐤
👾.𝐫𝐞𝐭𝐨
👾.𝐯𝐞𝐫𝐝𝐚𝐝
👾.𝐢𝐦𝐚𝐠𝐞𝐧𝐫𝐚𝐧𝐝𝐨𝐦
👾.𝐧𝐞𝐤𝐨
👾.𝐢𝐪𝐭𝐞𝐬𝐭
👾.𝐤𝐩𝐨𝐩𝐢𝐭𝐳𝐲
👾.𝐧𝐚𝐯𝐢𝐝𝐚𝐝
👾.𝐠𝐚𝐰𝐫𝐠𝐮𝐫𝐚
👾.𝐦𝐢𝐤𝐮
👾.𝐧𝐲𝐚𝐧
👾.𝐩𝐚𝐭
👾.𝐢𝐭𝐚𝐜𝐡𝐢
👾.𝐬𝐥𝐚𝐩
👾️.𝐩𝐚𝐭
👾.𝐩𝐞𝐫𝐟𝐢𝐥
👾.𝐬𝐜𝐚𝐧
👾.𝐤𝐩𝐨𝐩
👾.𝐪𝐫 *𝐭𝐞𝐱𝐭𝐨*
👾.𝐚𝐟𝐤 *𝐦𝐨𝐭𝐢𝐯𝐨*
👾.𝐂𝐫𝐢𝐬𝐭𝐢𝐚𝐧𝐨𝐑𝐨𝐧𝐚𝐥𝐝𝐨
👾.𝐩𝐫𝐞𝐠𝐮𝐧𝐭𝐚 *𝐩𝐫𝐞𝐠𝐮𝐧𝐭𝐚*
👾.𝐦𝐞𝐧𝐭𝐢𝐨𝐧 *𝐭𝐞𝐱𝐭𝐨*
👾.𝐬𝐩𝐚𝐦𝐜𝐡𝐚𝐭 *𝐭𝐞𝐱𝐭𝐨*
👾.𝐭𝐫𝐚𝐝𝐮𝐜𝐢𝐫 𝐞𝐬 *𝐭𝐞𝐱𝐭𝐨*
👾.𝐳𝐨𝐝𝐢𝐚𝐜 *𝐀𝐀𝐀𝐀 𝐌𝐌 𝐃𝐃*
👾.𝐫𝐞𝐚𝐝𝐦𝐨𝐫𝐞 *𝐭𝐞𝐱𝐭𝐨𝟏| 𝐭𝐞𝐱𝐭𝐨𝟐*
👾.𝐜𝐚𝐥𝐜 *𝐞𝐱𝐩𝐫𝐞𝐬𝐢ó𝐧 𝐦𝐚𝐭𝐞𝐦á𝐭𝐢𝐜𝐚*
👾.𝐬𝐩𝐚𝐦𝐰𝐚 *𝐧𝐮𝐦𝐞𝐫𝐨|𝐭𝐞𝐱𝐭𝐨|𝐜𝐚𝐧𝐭𝐢𝐝𝐚𝐝*
👾.𝐫𝐞𝐚𝐝𝐪𝐫 *𝐫𝐞𝐬𝐩𝐨𝐧𝐝𝐞 𝐚 𝐮𝐧 𝐜ó𝐝𝐢𝐠𝐨 𝐐𝐑*
👾.𝐚𝐧𝐢𝐦𝐞 *𝐫𝐚𝐧𝐝𝐨𝐦 / 𝐰𝐚𝐢𝐟𝐮 / 𝐡𝐮𝐬𝐛𝐮 /𝐧𝐞𝐤𝐨*
👾.𝐬𝐮𝐛𝐢𝐫𝐞𝐬𝐭𝐚𝐝𝐨 *𝐭𝐞𝐱𝐭𝐨 / 𝐫𝐞𝐬𝐩𝐨𝐧𝐝𝐞𝐫 𝐯𝐢𝐝𝐞𝐨, 𝐢𝐦𝐚𝐠𝐞𝐧 𝐨 𝐠𝐢𝐟*
╚════════════════╝
»𝐂𝐎𝐌𝐀𝐍𝐃𝐎𝐒 𝐃𝐄 𝐂𝐑𝐄𝐀𝐂𝐈𝐎𝐍𝐄𝐒 𝐑𝐀𝐍𝐃𝐎𝐌𝐒 𝐏𝐀𝐑𝐀 𝐔𝐒𝐎 𝐆𝐄𝐍𝐄𝐑𝐀𝐋. 𝐏𝐎𝐑 𝐅𝐀𝐕𝐎𝐑 𝐄𝐕𝐈𝐓𝐀𝐑 𝐄𝐋 𝐒𝐏𝐀𝐌«
`.trim()
let mentionedJid = [who]
conn.send3ButtonImg(m.chat, pp, menu, '©𝐉𝐡𝐮𝐬𝐳ᙆ  ᷦ×͜×', '𝐌𝐞𝐧𝐮 𝐏𝐫𝐢𝐧𝐜𝐢𝐩𝐚𝐥', `#menu`, '𝐌𝐞𝐧𝐮 𝐀𝐮𝐝𝐢𝐨𝐬', `#menuaudios`, '𝐈𝐧𝐬𝐭𝐚𝐠𝐫𝐚𝐦 🤳', `#igowner`, m, false, { contextInfo: { mentionedJid }})   
//await await await await await await conn.sendFile(m.chat, vn, 'mariana.mp3', null, m, true, {
//type: 'audioMessage', 
//ptt: true 
//})
}
handler.command = /^(randommenu|menurandom|randomm|rm)$/i
handler.fail = null
module.exports = handler