const { Message, Client, MessageEmbed } = require("discord.js");
const db = require("../../modules/economy");

module.exports = {
    name: "teste",
    aliases: ["t"],
    /**
    * @param {Client} client
    * @param {String[]} args
    * @param {Message} message
    */
    run: async (client, message, args) => {
        let data = await db.findOne({ guildId: message.guild.id, userId: message.author.id });
        if (!data) {
            await db.create({ guildId: message.guild.id, userId: message.author.id });
        } else {
            await db.findOneAndUpdate({ guildId: message.guild.id, userId: message.author.id }, {
                money: data.money + 1
            });
        }
        let newdata =  await db.findOne({ guildId: message.guild.id, userId: message.author.id });
        const embed = new MessageEmbed()
            .setTitle("Test")
            .setDescription(`Ban da lam viec va nhan duoc them 1 coin, gio ban dang co ${newdata.money} coin`)
        message.channel.send({ embeds: [embed] });
    },
};