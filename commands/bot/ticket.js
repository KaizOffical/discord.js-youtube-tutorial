// const { KCommandsTicketSystem } = require('kcommands')

// package này đang hỗ trợ cho discord.js v12 nên tạm thời bỏ nhé

// module.exports = {
//     name: "openticket",
//     category: "bot",
//     aliases: ['open', 'ticket', 'newticket'],
//     run: async (client, message, args) => {
//         const ticket = new KCommandsTicketSystem({
//             channelmsg: "Ticket của bạn đã được tạo: {channelMentions}",
//             ticketmsg: "Chào {userMentions}, chúng tôi có thể giúp gì cho bạn?",
//             ticketname: `ticket-${message.author.tag}`,
//             lock: "🔒",
//             delete: "⛔",
//             transcript: true, // nếu bằng true thì sẽ gửi bản sao của cuộc hội thoại khi khóa ticket nhé
//             transcriptchannelid: "864473036143722536", // id của kênh sẽ gửi bản sao của cuộc hội thoại xóa ticket
//         })
//         ticket.openTicket(client, message)
//     }
// }