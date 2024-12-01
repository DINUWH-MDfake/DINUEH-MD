const {cmd , commands} = require('../command')
const fg = require('api-dylux')
const yts =require('yt-search')


cmd({
    pattern: "song",
    desc: "download songs",
    category: "download",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
if(!q) return reply("please give me url or text")
const search = await yts(q)
const data = search.videos[0];
const url = data.url

let desc =`
> *🌟DINU-EH-MD SONG DOWNLOADER🌟*

title: ${data.title}
description: ${data.discription}
time: ${data.timestamp}
ago: ${data.ago}
views: ${data.views}

*MADE BY DINUWH-MD & POWERD BY DINUH👻*
`
await conn.sendMessage(frome,{image:{url: data.thumbnail},caption:desc},{quoted:mek});
timevideo16:24ප්‍රබාත්කුමාර
  }catch(e){
  console.log(e)
  reply(`${e}`)
}
})
  
