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

//download audio

let down = await fg.yta(url)
let downloadUrl = down.dl_url

//send audio message
await conn.sendMessage(from,{audio: {downloadUrl},mimetype:"audio/mpeg"},{quoted:mek})
  




}catch(e){
  console.log(e)
  reply(`${e}`)
}
})

//============vidro-dl============

cmd({
    pattern: "video",
    desc: "download videos",
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
> *🌟DINU-EH-MD VIDEO DOWNLOADER🌟*

title: ${data.title}
description: ${data.discription}
time: ${data.timestamp}
ago: ${data.ago}
views: ${data.views}

*MADE BY DINUWH-MD & POWERD BY DINUH👻*
`
await conn.sendMessage(frome,{image:{url: data.thumbnail},caption:desc},{quoted:mek});

//download video

let down = await fg.ytv(url)
let downloadUrl = down.dl_url

//send video message
await conn.sendMessage(from,{video: {downloadUrl},mimetype:"video/mp4"},{quoted:mek})
  




}catch(e){
  console.log(e)
  reply(`${e}`)
}
})
  

