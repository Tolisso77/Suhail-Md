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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_13_51_07_12_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMCxcbiAgICAgICAgMTMsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTk0LFxuICAgICAgICA4NixcbiAgICAgICAgMTIwLFxuICAgICAgICA1NixcbiAgICAgICAgMyxcbiAgICAgICAgMTI0LFxuICAgICAgICAxNTQsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTA2LFxuICAgICAgICAxNzcsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMjM2LFxuICAgICAgICAyLFxuICAgICAgICA5NixcbiAgICAgICAgNDMsXG4gICAgICAgIDE5MixcbiAgICAgICAgMjA3LFxuICAgICAgICAyNixcbiAgICAgICAgMTA4LFxuICAgICAgICAxMjIsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTg0LFxuICAgICAgICAyMjcsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTgzLFxuICAgICAgICAxOSxcbiAgICAgICAgMjcsXG4gICAgICAgIDczLFxuICAgICAgICA4OVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAzMSxcbiAgICAgICAgMTU1LFxuICAgICAgICAyMDYsXG4gICAgICAgIDIwMixcbiAgICAgICAgMzksXG4gICAgICAgIDE3NixcbiAgICAgICAgMjYsXG4gICAgICAgIDIzNixcbiAgICAgICAgNDUsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTg0LFxuICAgICAgICAyMzcsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTQzLFxuICAgICAgICAyMDIsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTEsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTAwLFxuICAgICAgICAxMzQsXG4gICAgICAgIDUzLFxuICAgICAgICA1NCxcbiAgICAgICAgMTk0LFxuICAgICAgICA0LFxuICAgICAgICAxODQsXG4gICAgICAgIDQsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMjAsXG4gICAgICAgIDE3MCxcbiAgICAgICAgOTksXG4gICAgICAgIDI1MSxcbiAgICAgICAgOTJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDgsXG4gICAgICAgIDExLFxuICAgICAgICA5MCxcbiAgICAgICAgOTAsXG4gICAgICAgIDEyLFxuICAgICAgICA4NCxcbiAgICAgICAgMTExLFxuICAgICAgICAyMSxcbiAgICAgICAgMTg5LFxuICAgICAgICA5NixcbiAgICAgICAgODgsXG4gICAgICAgIDM3LFxuICAgICAgICA0MyxcbiAgICAgICAgMTUzLFxuICAgICAgICAyMjEsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMjM3LFxuICAgICAgICAzNyxcbiAgICAgICAgMjIzLFxuICAgICAgICAxMzgsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMzksXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTksXG4gICAgICAgIDQxLFxuICAgICAgICAxMDcsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTIxLFxuICAgICAgICA4NixcbiAgICAgICAgNjksXG4gICAgICAgIDc4LFxuICAgICAgICAxMjVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTgzLFxuICAgICAgICAxNjksXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTMzLFxuICAgICAgICAzNCxcbiAgICAgICAgMTk1LFxuICAgICAgICAyMjUsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTAzLFxuICAgICAgICAxNzQsXG4gICAgICAgIDE1NixcbiAgICAgICAgMjE1LFxuICAgICAgICAxOTUsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTE4LFxuICAgICAgICAyOCxcbiAgICAgICAgMTIsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMjcsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMjMsXG4gICAgICAgIDIyNCxcbiAgICAgICAgNDcsXG4gICAgICAgIDgyLFxuICAgICAgICAxOTMsXG4gICAgICAgIDQ0LFxuICAgICAgICAyMTAsXG4gICAgICAgIDEzMixcbiAgICAgICAgMixcbiAgICAgICAgMTkxLFxuICAgICAgICAxOTMsXG4gICAgICAgIDc0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNDQsXG4gICAgICAgIDcwLFxuICAgICAgICAxMSxcbiAgICAgICAgMTk4LFxuICAgICAgICAyNDEsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMjAxLFxuICAgICAgICAxMDksXG4gICAgICAgIDQzLFxuICAgICAgICAzNSxcbiAgICAgICAgMzEsXG4gICAgICAgIDEyNCxcbiAgICAgICAgNjEsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTk4LFxuICAgICAgICAyMjEsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTE4LFxuICAgICAgICAyMSxcbiAgICAgICAgODIsXG4gICAgICAgIDk0LFxuICAgICAgICA4MixcbiAgICAgICAgMTQxLFxuICAgICAgICAxMDMsXG4gICAgICAgIDEyLFxuICAgICAgICAyMzUsXG4gICAgICAgIDI2LFxuICAgICAgICAxNjksXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTM3LFxuICAgICAgICAyMzMsXG4gICAgICAgIDExNFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAzNyxcbiAgICAgICAgMTgsXG4gICAgICAgIDc5LFxuICAgICAgICAzMixcbiAgICAgICAgODMsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTIyLFxuICAgICAgICAxNDMsXG4gICAgICAgIDEzNixcbiAgICAgICAgMjA4LFxuICAgICAgICAxMjIsXG4gICAgICAgIDMsXG4gICAgICAgIDI0OCxcbiAgICAgICAgOTYsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTM1LFxuICAgICAgICA2MCxcbiAgICAgICAgMjQzLFxuICAgICAgICA5NyxcbiAgICAgICAgMTEyLFxuICAgICAgICAxODcsXG4gICAgICAgIDcwLFxuICAgICAgICAxOTksXG4gICAgICAgIDEzMyxcbiAgICAgICAgNTEsXG4gICAgICAgIDE2NixcbiAgICAgICAgODUsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTQ2LFxuICAgICAgICAzMCxcbiAgICAgICAgMjgsXG4gICAgICAgIDc5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDg4LFxuICAgICAgICAgIDYsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAyNixcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICA0NixcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMTIwXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICA0MixcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICA0NixcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgMFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDkxLFxuICAgICAgICAyMTIsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMjM0LFxuICAgICAgICAyNTUsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMjI5LFxuICAgICAgICAxNjEsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMjEyLFxuICAgICAgICA5NixcbiAgICAgICAgMTEyLFxuICAgICAgICAxNjgsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTc0LFxuICAgICAgICAxODcsXG4gICAgICAgIDIwMixcbiAgICAgICAgOTMsXG4gICAgICAgIDc4LFxuICAgICAgICA3OSxcbiAgICAgICAgMixcbiAgICAgICAgMjUwLFxuICAgICAgICAxODAsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMjA1LFxuICAgICAgICAxMzcsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxNzQsXG4gICAgICAgIDg5LFxuICAgICAgICAxOTEsXG4gICAgICAgIDkxLFxuICAgICAgICA1MyxcbiAgICAgICAgMjQ1LFxuICAgICAgICA5OSxcbiAgICAgICAgMTEwLFxuICAgICAgICAxNDEsXG4gICAgICAgIDgwLFxuICAgICAgICAyMTcsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMjE2LFxuICAgICAgICAxMjMsXG4gICAgICAgIDEwLFxuICAgICAgICA0OCxcbiAgICAgICAgMTAxLFxuICAgICAgICA4NyxcbiAgICAgICAgMTMyLFxuICAgICAgICAyMTIsXG4gICAgICAgIDExNyxcbiAgICAgICAgODUsXG4gICAgICAgIDQyLFxuICAgICAgICAyNDYsXG4gICAgICAgIDcsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTU1LFxuICAgICAgICAyLFxuICAgICAgICAxMyxcbiAgICAgICAgMTQyLFxuICAgICAgICAxLFxuICAgICAgICA3MCxcbiAgICAgICAgMzQsXG4gICAgICAgIDEwLFxuICAgICAgICAxNTAsXG4gICAgICAgIDEzN1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTIsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiZHhFdFIvc3BNYXlGaXdaOTZ0YkZsVlFGZExFMmtkZWl5b29oMjN6Z2lBbz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyMzQ5MTM0MjE0MzgxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCJCODkyOTgzMzE3MzU5QTJEMjM5RDhFNjk4OTMzQUQ1MVwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjA3OTIzMDlcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDYxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDYxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiczBOcE9RNjNSNkNQeEh6VHRFWU5hZ1wiLFxuICBcInBob25lSWRcIjogXCJkYTJjZDgxMy00OWI4LTQ5NDUtOTYwNi1lYmViNjg0YjZkNWFcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTY4LFxuICAgICAgMTE5LFxuICAgICAgMjI0LFxuICAgICAgNzEsXG4gICAgICAxNzksXG4gICAgICAxNTksXG4gICAgICAxNDAsXG4gICAgICAxMTYsXG4gICAgICAxMDQsXG4gICAgICAxMDAsXG4gICAgICAxMzYsXG4gICAgICAxMjAsXG4gICAgICAzMixcbiAgICAgIDE1OSxcbiAgICAgIDQzLFxuICAgICAgNzgsXG4gICAgICA2OCxcbiAgICAgIDEzNCxcbiAgICAgIDI0MyxcbiAgICAgIDY3XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE5MSxcbiAgICAgIDYxLFxuICAgICAgODQsXG4gICAgICAyMjMsXG4gICAgICAyMTQsXG4gICAgICAxMzAsXG4gICAgICAyMjksXG4gICAgICA1OSxcbiAgICAgIDIxMixcbiAgICAgIDIzOSxcbiAgICAgIDcxLFxuICAgICAgMTQwLFxuICAgICAgMTA4LFxuICAgICAgMjQ0LFxuICAgICAgMjA2LFxuICAgICAgMjksXG4gICAgICA4LFxuICAgICAgMjMwLFxuICAgICAgNDYsXG4gICAgICA0MVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCI4TlBGTVEyM1wiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0OTEzNDIxNDM4MTo3MEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIlRvdHRpIH5odXMgbG95IHJlc3B+XCIsXG4gICAgXCJsaWRcIjogXCI3MjIwMzAxNDAyOTMzMDo3MEBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNKM0RtN2NGRU83cHhMUUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIkNsUW9xY3l4QXN2bXlDUWxiMG1lcnAyNE9haENvd25HYXFJU2pMWDljeDg9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwia3BveUpRdzQvdzRqbTB6KzY4QW10ZzJPMlFqb3U4UFZCZWs1SWxlSk82OHVwa005MnZLbGx6UnVmaTUvSnNQOVphK1U5NFBsZGpJUmJ5Y0RMRVMyRFE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiTU5peUp5dnJiaWsySVk5NmRjYUc4YzVUdlpOcEdYUUdhQ2tkQWN3YVE5ZVlyL3FCaERCTHJhNDF4S1h5UEpMYnVjRmRtVE5EUjBGc1RjT2tSVUZYZ0E9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0OTEzNDIxNDM4MTo3MEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDIsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDksXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDMxXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjA3OTIzMDUsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFEM0tcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUQzSy5qc29uIjogIntcImtleURhdGFcIjpcIjlGWkxUTG5Hby9nc2F2RVFnSXQwSGZteUpOakFXRHhBZzg0bWVaNGMrWEE9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTQ1Nzk3MTYxMyxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzIwNzkyMzA5Mjk0XCJ9Igp9"  // PUT your SESSION_ID 


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
