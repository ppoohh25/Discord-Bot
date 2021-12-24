const {Client, Intents, MessageEmbed, Collection} = require('discord.js');
const Discord = require('discord.js')
const prefix1 = "!"
const axios = require('axios')
const fs = require('fs');
const { title } = require('process');
const dotenv = require('dotenv')
dotenv.config()




 const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });
 client.commands = new Collection()


const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	client.commands.set(command.data.name, command);
}


const eventFiles = fs.readdirSync('./events').filter(file => file.endsWith('.js'));

for (const file of eventFiles) {
	const event = require(`./events/${file}`);
	if (event.once) {
		client.once(event.name, (...args) => event.execute(...args,client));
	} else {
		client.on(event.name, (...args) => event.execute(...args,client));
	}
}


client.on('interactionCreate', async interaction => {
	if (!interaction.isCommand()) return;

	const command = client.commands.get(interaction.commandName);

	if (!command) return;

	try {
		await command.execute(interaction);
	} catch (error) {
		console.error(error);
		await interaction.reply({ content: 'There was an error while executing this command!', ephemeral: true });
	}
});

client.prefix = new Collection()
const prefixFiles = fs.readdirSync('./prefix_command/').filter(file => file.endsWith('.js'))
for(const file of prefixFiles){
    const prefix = require(`./prefix_command/${file}`)

    client.prefix.set(prefix.name, prefix)
}

client.on('messageCreate', async (msg) =>{
    if(!msg.content.startsWith(prefix1) || msg.author.bot)return
    const args = msg.content.slice(prefix1.length).trim().split(/ +/)
    const prefix = args.shift().toLocaleLowerCase()

    if (prefix == 'ping'){
        client.prefix.get('ping').execute(msg, args)
    }
    if (prefix == 'help'){
        client.prefix.get('help').execute(msg, args)
    }
    if (prefix == 'botinfo'){
        client.prefix.get('botinfo').execute(msg, args)
    }
    if (prefix == 'tcas65'){
        client.prefix.get('tcas65').execute(msg, args)
    }
    if (prefix == 'gatpat'){
        client.prefix.get('gatpat').execute(msg, args)
    }
    if (prefix == 'saman'){
        client.prefix.get('saman').execute(msg, args)
    }
    if (prefix == 'cat'){
        client.prefix.get('cat').execute(msg, args)
    }
    if (prefix == 'dog'){
        client.prefix.get('dog').execute(msg, args)
    }
    if (prefix == 'meme'){
        client.prefix.get('meme').execute(msg, args)
    }
    if (prefix == 'thai'){
        client.prefix.get('thai').execute(msg, args)
    }
    if (prefix == 'covid'){
        client.prefix.get('covid').execute(msg, args)
    }
    if (prefix == 'topnews'){
        client.prefix.get('topnews').execute(msg, args)
    }
    if (prefix == 'bored'){
        client.prefix.get('bored').execute(msg, args)
    }
    if (prefix == 'apod'){
        client.prefix.get('apod').execute(msg, args)
    }
    if (prefix == 'tcas'){
        client.prefix.get('tcas').execute(msg, args)
    }
    if (prefix == 'friend'){
        client.prefix.get('friend').execute(msg, args)
    }
    if (prefix == 'quote'){
        client.prefix.get('quote').execute(msg, args)
    }
})

client.login(process.env.TOKEN)