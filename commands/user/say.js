module.exports = {
    name: "say",
    aliases: ['s'], //tên gọi khác của lệnh
    category: "user", //Lưu ý, trùng tên với folder nhé để sau này làm help command
    run: async (client, message, args) => {
        if(!args[0]) return message.channel.send({ content: "Bạn không nhập tin nhắn" })
        if(message.deletable) message.delete()
        message.channel.send({ content: args.join(' ')})
    }
}