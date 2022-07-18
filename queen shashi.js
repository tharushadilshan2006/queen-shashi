

//═════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════//
//                                                                                                                                                     //
//                                                                 ＱＵＥＥＮ ＳＨＡＳＨＩ💃❤️                                                                    //
//                                                                                                                                                     //
//                                                                    Ｖ：１．０．１                                                                     //
//                                                                                                                                                     //
//                                                                                                                                                                                          //
//                                                                                                                                                     //
//═════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════//

//coded by Tharusha Dilshan 


const
	{
		WAConnection,
		MessageType,
		Presence,
		MessageOptions,
		Mimetype,
		WALocationMessage,
		WA_MESSAGE_STUB_TYPES,
		WA_DEFAULT_EPHEMERAL,
		ReconnectMode,
		ProxyAgent,
		GroupSettingChange,
		waChatKey,
		mentionedJid,
		processTime,
	} = require("@adiwajshing/baileys")
const fs = require("fs")          
const axios = require('axios')
const hx = require('hxz-api')
const os = require('os')
const speed = require("performance-now")
const util = require('util')
const crypto = require('crypto')
const request = require('request')
const { exec, spawn } = require('child_process')
const fetch = require('node-fetch')
const moment = require('moment-timezone')
const ffmpeg = require('fluent-ffmpeg')
const simple = require('./lib/simple.js')
const { EmojiAPI } = require("emoji-api")
const emoji = new EmojiAPI()
const ggs = require('google-it')
const googleImage = require('g-i-s')
const yts = require( 'yt-search')
const zee = require('api-alphabot')
const { removeBackgroundFromImageFile } = require('remove.bg')

//══════════[ Lib ]══════════//

const { fetchJosn, fetchText } = require('./lib/fetcher')
const { color, bgcolor } = require('./lib/color')
const { wait, getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, start, info, success, close } = require('./lib/functions')
const setting = JSON.parse(fs.readFileSync('./setting/setting.json'))
const apikey = JSON.parse(fs.readFileSync('./setting/apikey.json'))
const { lirikLagu } = require('./lib/lirik.js')
const { herolist } = require('./lib/herolist.js')
const { herodetails } = require('./lib/herodetail.js')
const { pinterest } = require('./lib/pinterest')
const { uploadimg, upload } = require('./lib/uploadimg')
const { uploadImages } = require('./lib/uploadimage')
const { mediafireDl } = require('./lib/mediafire.js')

//══════════[ Leveling and Rpg ]══════════//

let { isLimit, limitAdd, getLimit, giveLimit, addBalance, kurangBalance, getBalance} = require("./lib/limit");
let { checkPetualangUser, addInventori, addBesi, sellBesi, getBesi, addDm, sellDm, getDm, addEmas, sellEmas, getEmas, addFish, sellFish, getFish } = require("./lib/rpgfunction");
let { addLevelingId, addLevelingLevel, addLevelingXp, getLevelingId, getLevelingLevel, getLevelingXp } = require("./lib/lvlfunction");

//══════════[ Setting ]══════════//

menutemplate = ''
self = setting.self || process.env.WORK_TYPE
autoread = setting.autoread || process.env.AUTO_READ
nopref = setting.nopref 
multi = setting.multi
autotype = setting.autotype || process.env.AUTO_STICKER
autostic = setting.autosticker || process.env.AUTO_TYPE
autovn = setting.autovn || process.env.AUTO_VN
owner = setting.OwnerNumber || process.env.OWNER_NUMBER
botname = setting.BotName || process.env.BOT_NAME
ownername = setting.OwnerName || process.env.OWNER_NAME
gaya1 = setting.gaya1 || process.env.MENU_LOGO
gaya2 = setting.gaya2
const alfaimg = fs.readFileSync ('./queen-shashi.jpg')
const thumb = fs.readFileSync ('./queen-shashi.jpg')
const gitimg = fetchURL =('https://github.com/tharushadilshan2006/queen-shashi-jpg/blob/main/queen-shashi.jpg')




loc = true      //use 'true' on only one of these template
link = false    //use 'true' on only one of these template
pic = false     //use 'true' on only one of these template


