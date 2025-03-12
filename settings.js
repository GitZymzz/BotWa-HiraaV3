/*

  !- Credits By Skyzopedia
  
  Recode by xyzhiraa
  https://wa.me/6285692195658
  
*/

const fs = require('fs');
const chalk = require('chalk');
const { version } = require("./package.json")

//~~~~~~~~~~~ Settings Bot ~~~~~~~~~~~//
global.owner = '6283853787611'
global.versi = version
global.namaOwner = "𝒁𝒚𝒎𝒛𝒛"
global.packname = 'Bot WhatsApp'
global.botname = '𝘽𝙤𝙩𝙕'
global.botname2 = '𝘽𝙤𝙩𝙕'

//~~~~~~~~~~~ Settings Link ~~~~~~~~~~//
global.linkOwner = "https://wa.me/6283853787611"
global.linkGrup = "https://chat.whatsapp.com/Jv5SIEQV3jNGpIvWy2lmSC"

//~~~~~~~~~~~ Settings Jeda ~~~~~~~~~~//
global.delayJpm = 1500
global.delayPushkontak = 6000

//~~~~~~~~~~ Settings Saluran ~~~~~~~~~//
global.linkSaluran = "https://whatsapp.com/channel/0029VakakCcLI8YV5UInP61u"
global.idSaluran = "120363300298271061@newsletter"
global.namaSaluran = "ZymzZZ"

//~~~~~~~~~ Settings Orderkuota ~~~~~~~~//
global.merchantIdOrderKuota = "OK2000300"
global.apiOrderKuota = "503037817337498462000300OKCTE710F6DB6C0525EF47135143AF15B565"
global.qrisOrderKuota = "00020101021126670016COM.NOBUBANK.WWW01189360050300000879140214526072661395590303UMI51440014ID.CO.QRIS.WWW0215ID20243611425300303UMI5204541153033605802ID5921LYLIA STORE OK20003006006BEKASI61051711162070703A016304B08B"


//~~~~~~~~~~ Settings Apikey ~~~~~~~~~~//
global.apiDigitalOcean = ""
global.apiSimpleBot = "simplebotz85"

//~~~~~~~~~ Settings Payment ~~~~~~~~~//
global.dana = "6283853787611"
global.ovo = "6283853787611"
global.gopay = "6283853787611"

//~~~~~~~~~~ Settings Image ~~~~~~~~~~//
global.image = {
menu: "https://files.catbox.moe/6pknvb.jpg", 
reply: "https://files.catbox.moe/6pknvb.jpg", 
logo: "https://files.catbox.moe/6pknvb.jpg", 
qris: "https://files.catbox.moe/bb3hfw.jpg"
}

// Settings Api Panel Pterodactyl
global.egg = "15" // Egg ID
global.nestid = "5" // nest ID
global.loc = "1" // Location ID
global.domain = "https://hirakyami.xyzpanel.biz.id"
global.apikey = "ptla_RaMFwetzA7du89rcni3gu2LsyW9KbEDx3NRVIrrmq8v" //ptla
global.capikey = "ptlc_XqeSKs66uEvOw7PRxh38YywdLgBcwMbCnYt4WUFvhig" //ptlc

// Settings Api Panel Pterodactyl Server 2
global.eggV2 = "15" // Egg ID
global.nestidV2 = "5" // nest ID
global.locV2 = "1" // Location ID
global.domainV2 = "https://luxz-privat.pannelku.web.id"
global.apikeyV2 = "ptla_KFZ4xtJ1Uqmn2L6cr9cFFlu1ClsY2FyavuNXuIOuG0u" //ptla
global.capikeyV2 = "ptlc_KZkgmFaZuNr73J6S1wrF7eDSrSD2MxK5wYohO1i6n9E" //ptlc

//~~~~~~~ Settings Api Subdomain ~~~~~~~//
global.subdomain = {
"xyzpanel.biz.id": {
"zone": "c93b80618a93cad3230b9404594b9496", 
"apitoken": "luOcKcR4vO9IWeBZYuFPrIH_YwgfVz_zM7qno_Jv"
}, 
"privatserver.my.id": {
"zone": "699bb9eb65046a886399c91daacb1968", 
"apitoken": "CrQMyDn2fhchlGne2ogAw7PvJLsg4x8vasBv__6D"
}, 
"panelwebsite.biz.id": {
"zone": "2d6aab40136299392d66eed44a7b1122", 
"apitoken": "cj17Lzg9otqwkYIVzgL0pcVA4GfcXqePHAOhCqa_"
}, 
"mypanelstore.web.id": {
"zone": "c61c442d70392500611499c5af816532", 
"apitoken": "N_VhWv2ZK6UJxLdCnxMfZx9PtzAdmPGM3HmOjZR4"
}, 
"pteroserver.us.kg": {
"zone": "f693559a94aebc553a68c27a3ffe3b55", 
"apitoken": "qRxwgS3Kl_ziCXti2p4BHbWTvGUYzAuYmVM28ZEp"
}, 
"digitalserver.us.kg": {
"zone": "df13e6e4faa4de9edaeb8e1f05cf1a36", 
"apitoken": "sH60tbg10UH8gpNrlYpf3UMse1CNJ01EKJ69YVqb"
}, 
"shopserver.us.kg": {
"zone": "54ca38e266bfdf2dcdb7f51fd79c2db5", 
"apitoken": "GRe4rg-vhb4c8iSjKCALHJC0LaxkzNPgmmgcDGpm"
}
}

//~~~~~~~~~~ Settings Message ~~~~~~~~//
global.mess = {
	owner: "*[ Akses Ditolak ]*\nFitur ini hanya untuk owner bot!",
	admin: "*[ Akses Ditolak ]*\nFitur ini hanya untuk admin grup!",
	botAdmin: "*[ Akses Ditolak ]*\nFitur ini hanya untuk ketika bot menjadi admin!",
	group: "*[ Akses Ditolak ]*\nFitur ini hanya untuk dalam grup!",
	private: "*[ Akses Ditolak ]*\nFitur ini hanya untuk dalam private chat!",
	prem: "*[ Akses Ditolak ]*\nFitur ini hanya untuk user premium!",
	wait: 'Loading...',
	error: 'Error!',
	done: 'Done'
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})
