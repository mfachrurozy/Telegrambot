const fs = require("fs");
const {
   indonesia
} = require("./language");

// Website Api (jgn di ganti biar gk eror)
global.APIs = {
   alfa: 'https://api.zeeoneofc.my.id', //apabila link api eror, segera laporkan ke owner
}

//buy apikey premium 0887435047326
// Free apikey (silahkan login terus ganti Your Key dgn apikey lu)
global.APIKeys = {
   'https://api.zeeoneofc.my.id': 'Your Key', // 👉 login https://api.zeeoneofc.my.id to get apikey
}

//language 
global.language = indonesia //change indonesia to english if you don't understand the language used by the bot

global.BOT_TOKEN = "6941412341:AAGNeLLGajYxx9F-TdOMO5rK7s7-z4sdhso" //create bot here https://t.me/BotFather and get the bot token
global.BOT_NAME = "misskakros_bot" //your bot name
global.OWNER_NAME = "kulorozy" //your name
global.OWNER_NUMBER = "6285731423812" //your telegram number
global.OWNER = ["https://t.me/zeeoneofc", "https://t.me/zeeone_ofc"] // pastikan username sudah sesuai agar fitur khusus owner bisa di pakai
global.THUMBNAIL = "./image/lol.jpg" // ini lol.jpg adalah nama foto di folder image. untuk foto bot
global.DONASI = "./image/donasi.jpg" // foto donasi di folder image
global.lang = language //don't change
