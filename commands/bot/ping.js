module.exports = {
    name: "ping",
    aliases: ['p'], //tên gọi khác của lệnh
    category: "bot", //Lưu ý, trùng tên với folder nhé để sau này làm help command
    run: async (client, message, args) => {
        message.channel.send({ content: `Pong! **\`${client.ws.ping}ms\`**` })
    }
}