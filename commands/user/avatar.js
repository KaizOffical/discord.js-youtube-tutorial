const { MessageEmbed } = require('discord.js');

module.exports = {
    name: "avatar",
    aliases: ['avt'], //tên gọi khác của lệnh
    category: "user", //Lưu ý, trùng tên với folder nhé để sau này làm help command
    run: async (client, message, args) => {
        const member = message.mentions.members.first() || message.member
        const url = member.user.displayAvatarURL({ format: 'png', size: 1024 })
        const avtEmbed = new MessageEmbed()
            .setTitle('Nhấn để tải ảnh')
            .setDescription(`Avatar của ${member.user.tag}`)
            .setURL(url)
            .setImage(url)
        message.channel.send({ embeds: [avtEmbed]})
    }
}