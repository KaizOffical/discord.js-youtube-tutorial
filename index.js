const { Client, Collection } = require('discord.js')
const client = new Client()

const { prefix, token } = require('./config.json')

client.commands = new Collection();
client.aliases = new Collection();

require('./handler/command')(client);

client.on('ready', () => {
  console.log(`${client.user.tag} is ready`)
  //Set activity and status
  client.user.setPresence({ activity: { name: `${prefix}help` }, status: 'idle' })
  .then(console.log)
  .catch(console.error);
})

client.on('message', async message => {
  if(message.author.bot) return;
  if(!message.guild) return;
  if (!message.content.startsWith(prefix)) return;

  const args = message.content.slice(prefix.length).trim().split(/ +g/);
  const cmd = args.shift().toLowerCase();
  if(cmd.length === 0) return;
  let command = client.commands.get(cmd) || client.commands.get(client.aliases.get(cmd));
  if(command) command.run(client, message, args);
});

client.login(token);