const { Client, Collection } = require('discord.js')
const client = new Client()

const { prefix, token } = require('./config.json')

client.commands = new Collection()

client.on('ready', () => {
  console.log(`${client.user.tag} is ready`)
  //Set activity and status
  client.user.setPresence({ activity: { name: `${prefix}help` }, status: 'idle' })
  .then(console.log)
  .catch(console.error);
})

//when user send a message in guild have a bot with async function
client.on('message', async message => {
  if(message.author.bot) return; // if author of command is a bot, your bot will return
  if(!message.guild) return; // if message or command in DM, return
  if (!message.content.startsWith(prefix)) return; // if message do not start with prefix, return

  switch(message.content.toLowerCase()) {
    case `${prefix}ping`:
      message.channel.send(`Pong! **\`${client.ws.ping}ms\`**`)
      break;
  }
});

client.login(token);