let fs = require('fs')
let handler = async (m, { conn }) => {
let teks = 'Sewa'
let dana = global.dana
let pulsa = global.pulsa
let gopay = global.gopay
let numberowner = global.numberowner
let anu = `Hallo mypren ๐
โโโใ ฤฑll *Sewa Bot* llฤฑ ใโโ๊ฅ
โโโโโโโโโโโโโโโโโโโโ
โโโใ ฤฑll *HARGA* llฤฑ ใโโ๊ฅ
โฌก *1 BULAN:* *15.000*
โฌก *2 BULAN:* *25.000*
โฌก *1 BULAN 2/3 GRUP:* *20.000*
โฌก *lebih dari 3 tambah +5.000*
โโโโโโโโโโโโโโโโ๊ฅ
โโโโใ ฤฑll *PAYMENT* llฤฑ ใโโ๊ฅ
โฌก *DANA:* ${dana}
โฌก *GOPAY:* ${gopay}
โฌก *PULSA:* ${pulsa}
โโโโโโโโโโโโโโโโโโโ๊ฅ
โโโใ ฤฑll *RULES* llฤฑ ใโ๊ฅ
โฌก [โ] *Dana yang sudah masuk tidak bisa di kembalikan*
โโโโโโโโโโโ๊ฅ
Jika anda berminat hubungi nomor di bawah!!

โฉยป *jangan lupa donasi kak* ยซโจ
Terimakasih yang sudah mendonasikan untuk bot

Contact person Sewa Bot:
wa.me/${numberowner} (Owner)

*Follow Instagram ku juga kak๐ผ*`
  conn.send3ButtonImg(m.chat, fla + teks, anu, instagram, 'Donasi', '.donasi', 'Owner', '.owner', 'Menu', '.menu', m) 
}
handler.help = ['sewaoscar']
handler.tags = ['info']
handler.command = /^(sewa|sewaoscar|sewa|sewabot)$/i

module.exports = handler
