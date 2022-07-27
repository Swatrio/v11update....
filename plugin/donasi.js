let handler = async m => m.reply(`
╭─「 Donasi Gopay 」
│ •  [0882-1379-3536]
│ •  [0877-5691-0685]
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
