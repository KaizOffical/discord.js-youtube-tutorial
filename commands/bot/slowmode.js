const { MessageEmbed } = require('discord.js');

module.exports = {
    name: 'slowmode',
    aliases: ['slow'], 
    category: 'bot', 
    run: async (client, message, args) => {
        const time = args[0]
        if(!message.member.permissions.has("MANAGE_CHANNELS")) return message.channel.send({ content: 'Bạn không có quyền để dùng được lệnh này! `MANAGE_CHANNELS`'})
        if(!time) return message.channel.send({ content: 'Vui lòng nhập thời gian của chế độ chậm (giây)'})
        if(isNaN(time)) return message.channel.send({ content: time + ' không phải là số'})
        t=parseInt(time)
        if(t>21600) return message.channel.send({ content: 'Bạn không thể để chế độ chậm lớn hơn 6 giờ' })
        message.channel.setRateLimitPerUser(t)
        const embed = new MessageEmbed()
        .setTitle('Cập nhật kênh văn bản')
        .setColor("#00ffff")
        .setDescription(`Chỉnh sửa chế độ chậm thành: \`${time}\` giây`)
        message.channel.send({ embeds: [embed] })
    }
}