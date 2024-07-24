const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_15_11_07_24_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTIwLFxuICAgICAgICA4NCxcbiAgICAgICAgMTE5LFxuICAgICAgICAwLFxuICAgICAgICAxNTUsXG4gICAgICAgIDE4NyxcbiAgICAgICAgNDIsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTkxLFxuICAgICAgICAxNTUsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTg4LFxuICAgICAgICAxMzksXG4gICAgICAgIDczLFxuICAgICAgICAyMDIsXG4gICAgICAgIDE2NSxcbiAgICAgICAgNTMsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTQ1LFxuICAgICAgICAyNixcbiAgICAgICAgMTI2LFxuICAgICAgICAxOTIsXG4gICAgICAgIDc0LFxuICAgICAgICAyMDgsXG4gICAgICAgIDExMyxcbiAgICAgICAgNjgsXG4gICAgICAgIDI0OCxcbiAgICAgICAgOTMsXG4gICAgICAgIDksXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTcwLFxuICAgICAgICAxMTdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjIsXG4gICAgICAgIDE5NixcbiAgICAgICAgMjA4LFxuICAgICAgICAxMzEsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTAwLFxuICAgICAgICAyLFxuICAgICAgICAyMTksXG4gICAgICAgIDc2LFxuICAgICAgICA4OSxcbiAgICAgICAgNTQsXG4gICAgICAgIDY4LFxuICAgICAgICAxNixcbiAgICAgICAgMjA5LFxuICAgICAgICAyMzksXG4gICAgICAgIDYwLFxuICAgICAgICAxMDYsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTA1LFxuICAgICAgICAxNjcsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTk4LFxuICAgICAgICA4OCxcbiAgICAgICAgODMsXG4gICAgICAgIDIzMSxcbiAgICAgICAgNTEsXG4gICAgICAgIDc5LFxuICAgICAgICAyNDgsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTc1LFxuICAgICAgICAxODQsXG4gICAgICAgIDExNFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjA4LFxuICAgICAgICAyMjEsXG4gICAgICAgIDQzLFxuICAgICAgICAxMDMsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTU4LFxuICAgICAgICAyMzYsXG4gICAgICAgIDEyLFxuICAgICAgICAxOTksXG4gICAgICAgIDIyOSxcbiAgICAgICAgOTIsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMjAzLFxuICAgICAgICAzNCxcbiAgICAgICAgMTkxLFxuICAgICAgICAxNjksXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxLFxuICAgICAgICA0MyxcbiAgICAgICAgMzgsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMzIsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTUwLFxuICAgICAgICA2NSxcbiAgICAgICAgNjAsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMjI1LFxuICAgICAgICAxNjcsXG4gICAgICAgIDE3LFxuICAgICAgICAxMDhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjE1LFxuICAgICAgICA5MyxcbiAgICAgICAgMTkwLFxuICAgICAgICAxMjksXG4gICAgICAgIDI0MixcbiAgICAgICAgMjQ4LFxuICAgICAgICA3NixcbiAgICAgICAgMTYsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMjEsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTAsXG4gICAgICAgIDYwLFxuICAgICAgICAyMzcsXG4gICAgICAgIDcsXG4gICAgICAgIDE3NixcbiAgICAgICAgMjA3LFxuICAgICAgICAyMzAsXG4gICAgICAgIDQzLFxuICAgICAgICA1LFxuICAgICAgICAyMTksXG4gICAgICAgIDgsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMjUyLFxuICAgICAgICAxMjgsXG4gICAgICAgIDM0LFxuICAgICAgICA0MCxcbiAgICAgICAgNTIsXG4gICAgICAgIDEzLFxuICAgICAgICAxOTEsXG4gICAgICAgIDY5LFxuICAgICAgICAxMjBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDk2LFxuICAgICAgICAxOCxcbiAgICAgICAgODAsXG4gICAgICAgIDUxLFxuICAgICAgICAxNTQsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTUxLFxuICAgICAgICAzNSxcbiAgICAgICAgMTMwLFxuICAgICAgICAxNTksXG4gICAgICAgIDE0MixcbiAgICAgICAgMTk0LFxuICAgICAgICAyMzMsXG4gICAgICAgIDE1LFxuICAgICAgICAxNDEsXG4gICAgICAgIDIwNixcbiAgICAgICAgMjI3LFxuICAgICAgICAxNyxcbiAgICAgICAgNTEsXG4gICAgICAgIDE4NixcbiAgICAgICAgNjQsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMjQ0LFxuICAgICAgICA5OSxcbiAgICAgICAgNTcsXG4gICAgICAgIDQ3LFxuICAgICAgICAzMCxcbiAgICAgICAgMTI1LFxuICAgICAgICAyMzIsXG4gICAgICAgIDQxLFxuICAgICAgICAxMCxcbiAgICAgICAgNzRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjcsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTk2LFxuICAgICAgICAyMTksXG4gICAgICAgIDEyLFxuICAgICAgICA0MSxcbiAgICAgICAgMTI2LFxuICAgICAgICA5NCxcbiAgICAgICAgMjA1LFxuICAgICAgICA0MSxcbiAgICAgICAgMTgzLFxuICAgICAgICAyNSxcbiAgICAgICAgODQsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMjMxLFxuICAgICAgICAyOSxcbiAgICAgICAgODEsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTEzLFxuICAgICAgICAyMzAsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTgzLFxuICAgICAgICAxNDksXG4gICAgICAgIDc0LFxuICAgICAgICAyMTUsXG4gICAgICAgIDUyLFxuICAgICAgICAxMixcbiAgICAgICAgMTUxLFxuICAgICAgICAxMzIsXG4gICAgICAgIDIxNixcbiAgICAgICAgNzMsXG4gICAgICAgIDMxXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE3NixcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAxNSxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDYsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICA5NVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA0OSxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDcsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICAyMCxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgNDhcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxODcsXG4gICAgICAgIDY5LFxuICAgICAgICA0NyxcbiAgICAgICAgMTYzLFxuICAgICAgICA4NCxcbiAgICAgICAgMTIxLFxuICAgICAgICAxNDcsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTIwLFxuICAgICAgICA5MCxcbiAgICAgICAgNjAsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTM4LFxuICAgICAgICAxMjksXG4gICAgICAgIDExNSxcbiAgICAgICAgMjA1LFxuICAgICAgICAxOTQsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMjQzLFxuICAgICAgICAxNDEsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTcyLFxuICAgICAgICAxMTgsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMyxcbiAgICAgICAgMTEsXG4gICAgICAgIDM1LFxuICAgICAgICAyMjMsXG4gICAgICAgIDE0NyxcbiAgICAgICAgOTEsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTU5LFxuICAgICAgICAyMjQsXG4gICAgICAgIDExMixcbiAgICAgICAgOCxcbiAgICAgICAgMTg2LFxuICAgICAgICAyOSxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxNDIsXG4gICAgICAgIDEyLFxuICAgICAgICAxODEsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMjQyLFxuICAgICAgICAyMTAsXG4gICAgICAgIDExNyxcbiAgICAgICAgMjE4LFxuICAgICAgICAxNDIsXG4gICAgICAgIDUxLFxuICAgICAgICAyNDAsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMjA5LFxuICAgICAgICAxNTMsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTUwLFxuICAgICAgICAxMCxcbiAgICAgICAgNDIsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMjUwLFxuICAgICAgICAxMTUsXG4gICAgICAgIDQ2LFxuICAgICAgICAyMSxcbiAgICAgICAgOTAsXG4gICAgICAgIDAsXG4gICAgICAgIDFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDE1MCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJ4ODFuTURHUkprZU9FUmpHbFFHZjRLVHRUdlJUVEJ2cEdheURpVVA1cTVnPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjIzNDcwMTA5MTE5OTlAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjNGMTM3NENGMzlGRTlFQTVCNEE1NTEyMTg3QzI1QzIzXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyMTgzMzg1OFxuICAgIH0sXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjIzNDcwMTA5MTE5OTlAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjNFNDUyNjk5RkJBODgwRDBCMEMxRENCODdGOUE1Nzc5XCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyMTgzMzg1OFxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJGeVNtSXdoaFNKR0J0ZUtiYkNhU1BBXCIsXG4gIFwicGhvbmVJZFwiOiBcImJiMTlmMjcwLWE2NGItNGI2Ny1iMzBkLWVlMzUyMDBkODQ2NVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNzMsXG4gICAgICAyMDAsXG4gICAgICAxNixcbiAgICAgIDE3NyxcbiAgICAgIDIxNixcbiAgICAgIDM2LFxuICAgICAgMjEzLFxuICAgICAgMixcbiAgICAgIDE5MSxcbiAgICAgIDc4LFxuICAgICAgMjA3LFxuICAgICAgMjE3LFxuICAgICAgOTUsXG4gICAgICA4NyxcbiAgICAgIDE2OSxcbiAgICAgIDcsXG4gICAgICAyMTUsXG4gICAgICAyMixcbiAgICAgIDI1MSxcbiAgICAgIDE0N1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMDMsXG4gICAgICAxMjYsXG4gICAgICAxOTMsXG4gICAgICAyMyxcbiAgICAgIDE1MixcbiAgICAgIDE0NCxcbiAgICAgIDE3MCxcbiAgICAgIDE4NCxcbiAgICAgIDE1NyxcbiAgICAgIDE1MSxcbiAgICAgIDU4LFxuICAgICAgMjQxLFxuICAgICAgNDksXG4gICAgICAxMDgsXG4gICAgICAyMDIsXG4gICAgICAxMDAsXG4gICAgICAxMDQsXG4gICAgICA1OCxcbiAgICAgIDg0LFxuICAgICAgMjJcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiTjhONEJaTkZcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDcwMTA5MTE5OTk6MUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiNjIzNDE5NTM2NjMxNzc6MUBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNNeWczSzBDRVB1eWhMVUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIllWNng0V0VyZHE4OWViaVRLZEZsRXJFdEZFRXZoOElBSXBZM1ZDencvMjQ9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiQWtZaEhvVnVrYlRnelRvSXJCd2Jnb3ZZYVRRZVZFQ2pZZUR0b05LcWR0aVM4SzJOVGNmWWFrSmZpNTNPcEVrenkwQUh6Zno2cW9Vd0FSdDZCR0ZIRHc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiRERQTlQ2YnJnaFpUVGVrdW9PUGxON3FwV2RSOGpHamtpWG9NTHpTcktUVGM0M1F4b0g4R0tWRDFpMmdUNUsrSkhIQ01rOFQwZmhza0M4SVUrZ3c4QlE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0NzAxMDkxMTk5OToxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICA0MyxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAxMTBcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMTgzMzg1NSxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUxqaVwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBTGppLmpzb24iOiAie1wia2V5RGF0YVwiOlwibTJnTTljTGIrQ2tlSlRKMTg4WGtQMTBza0k3ajU0TUw5OXFBNzMxS01jST1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo2MzI3NTQyNTIsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTcyMTgzMzg2Mjg5NVwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
