let handler = async m => m.reply(`
            .✵.GRUP DITYABOTZ.✵.

            https://chat.whatsapp.com/Ej8JuTdjGnA4XxLGbwlpMP
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler