/*
Thanks to Botcahx
Thanks to Betabotz
Thanks to DyLux-FG
Thanks to Subscriber
*/

import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk'
import { fileURLToPath } from 'url'

global.owner = [
  ['212605784394', 'BOBIZ', true],
  ['212605784394']
] // Nomor Owner

global.mods = ['212605784394'] 
global.prems = ['212605784394', '212605784394']

// apikey
global.lann = 'apikeylu'
// apikeylu di ganti menggunakan apikey yang di dapatkan di website https://api.betabotz.org. contohnya global.lann = 'nans' (contoh). cara mendapatkan apikey. masuk website > scroll ke bawah dan cari harga yang kamu mau ada juga yang free dan tekan > otomatis akan di arahkan untuk registrasi, isi data diri email dll. > kalo sudah klik profil dan di situ akan muncul apikey mu. terima kasih.

global.APIKeys = { // APIKey Here
  // 'https://website': 'apikey'
  'https://api-fgmods.ddns.net': 'mhdAnan',
  'https://api.betabotz.org': 'apikeylu'
}

global.APIs = { // API Prefix
  // name: 'https://website'
  nrtm: 'https://fg-nrtm.ddns.net',
  fgmods: 'https://api-fgmods.ddns.net',
  lann: 'https://api.betabotz.org'
}

// Watermark
global.nama = 'MY-PROF-BOT' // nama owner
global.nomor = '212605784394' // nomor owner
global.nans = 'MY-PROF-BOT' // nama bot 
global.thumb = 'https://i.ibb.co/m9YqsDr/neromdv3-2.jpg' // thumbnail bot ( foto menu )
global.dygp = 'https://chat.whatsapp.com' // link group yang ada di menu

// Sticker wm
global.packname = 'MY-PROF-BOT' 
global.author = '@noureddine_ouafy' 
global.fgig = 'https://www.instagram.com/noureddine_ouafy' // bebas tapi jangan kosong 
global.fgsc = 'https://github.com/nanzone' // bebas tapi jangan kosong
global.fgyt = 'https://nansoffc.my.id/' // bebas tapi jangan kosong
global.fgpyp = 'https://nansoffc.my.id' // bebas tapi jangan kosong
global.fglog = 'https://i.ibb.co/kXw4XhL/nansoffc-logo.jpg'

// Other
global.dana = '212605784394'
global.qris = 'https://i.ibb.co/xGC5Y7j/20230712-173348.jpg'
global.web = 'https://nansoffc.my.id'
global.email = 'nansoffc@gmail.com'
global.lastm = 'MY-PROF-BOT BY NOUREDDINE OUAFY'

global.wait = 'جاري تلبية طلبكم تابع صاحب البوت في حسابه....\ninstagram.com/noureddine_ouafy'
global.rwait = '⌛'
global.dmoji = '🤭'
global.done = '✅'
global.error = '❌' 
global.xmoji = '🔥' 

global.multiplier = 69 
global.maxwarn = '2' // Peringatan maksimum

let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})
