const {Client, Intents, MessageEmbed, Collection} = require('discord.js');
const Discord = require('discord.js')
const prefix = "!"
//const config = require("./config.json")
const axios = require('axios')
const fs = require('fs');
const { title } = require('process');
const dotenv = require('dotenv')
dotenv.config()
const { token } = require('./config.json');


 const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });
client.commands = new Collection()

const commands = [];
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	client.commands.set(command.data.name, command);
}
// client.commands = new Collection()
// const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
// const commands = [];

// for (const file of commandFiles) {
// 	const command = require(`./commands/${file}`);
// 	commands.push(command.data.toJSON());
// }

client.on('ready', ()=>{
    console.log('Your bot is ready')
    client.user.setActivity('type "/" | Christmas!', {type: 'PLAYING'})
})

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

client.on('messageCreate', async (msg) =>{
    if(!msg.content.startsWith(prefix) || msg.author.bot)return
    const args = msg.content.slice(prefix.length).trim().split(/ +/)
    const command = args.shift().toLocaleLowerCase()
    if(command == 'args'){
        msg.channel.send(`command name: ${command}\nArguments: ${args}`)
    }
    if(command == 'help'){
        const helpEmbed = new MessageEmbed()
        .setTitle('**Help**')
        .setColor('#FFEDAD')
        .setDescription(':robot:`!botinfo`'+'= About bot'
        +'\n'+'-------------------------------------------'
        +'\n'+'**Education**'
        +'\n'+':book:`!tcas65`'+'= About TCAS65'
        +'\n'+':book:`!gatpat`'+'= About GAT/PAT65'
        +'\n'+':book:`!saman`'+'= About วิชาสามัญ65'
        +'\n'+':book:`!tcas` `kmitl` `kmutt` `kmunb` `mu` `tu`'+ '\n= About University TCAS65'
        +'\n'+'-------------------------------------------'
        +'\n'+'**Fun**'
        +'\n'+':cat:`!cat`'+'= Some cute cat'
        +'\n'+':dog:`!dog`'+'= Some cute dog'
        +'\n'+':laughing:`!meme`'+'= Some funnythings'
        +'\n'+':flag_th:`!thai`'+'= ลองดูครับ'
        +'\n'+':yawning_face:`!bored`'+'= Try something new!'
        +'\n'+':comet:`!apod`'+'= Astronomy Picture of the Day'
        +'\n'+':laughing:`!quote`'+'= คำคมๆ'
        +'\n'+'-------------------------------------------'
        +'\n'+'**News**'
        +'\n'+':nauseated_face:`!covid`'+'= COVID-19 of Thailand'
        +'\n'+':newspaper:`!topnews`'+'= Top news'
        +'\n'+'-------------------------------------------'
        +'\n'+'**M.6/3**'
        +'\n'+':school:`!friend`'+'= About member of M.6/3'
        )
        msg.channel.send({embeds: [helpEmbed]})
    
    } 
    if(command == 'botinfo'){
        const botinfoEmbed = new MessageEmbed()
        .setColor('#EB3333')
        .setTitle(':robot:** Bot Info**')
        .setDescription('**Just a test bot that Developed by Sadayu**'+
                        '\n'+'**Contact**'+
                        '\n'+':link:FB :'+
                        '\n'+'https://bit.ly/3FqkREL'+
                        '\n'+':link:IG :'+
                        '\n'+'https://bit.ly/3HAgx7J'+
                        '\n'+':link:Github :'+
                        '\n'+'https://gist.github.com/ppoohh25'
                        )
        msg.channel.send({ embeds: [botinfoEmbed] });
    }
    if(command == 'tcas65'){
        const tcas65Embed = new MessageEmbed()
        .setColor('#5EFFB9')
        .setTitle(':book:**TCAS 65**')
        .setURL('https://www.mytcas.com/news/announcement-61')
        .setDescription('**ตารางกำหนดการ TCAS65**')
        .setImage('https://cdn.discordapp.com/attachments/910079938936315978/910740077959848006/7e53dbab028122c8c92868f8334de845ae0ec1d6-4583x2558.png')
        .setFooter('จาก myTCAS');
        msg.channel.send({ embeds: [tcas65Embed] });
    }
    if(command == 'gatpat'){
        const gatpatEmbed = new MessageEmbed()
        .setColor('#F065FF')
        .setTitle(':book:**GAT/PAT 65**')
        .setURL('https://www.mytcas.com/news/announcement-61')
        .setDescription('**ตารางกำหนดการ GAT/PAT**')
        .setImage('https://cdn.discordapp.com/attachments/910079938936315978/910743740036034610/15a04b9aff1feaca082d6e645621b9f0d14453d7-960x960.png')
        .setFooter('จาก myTCAS')
        msg.channel.send({embeds: [gatpatEmbed]});
    }
    if(command == 'saman'){
        const samanEmbed = new MessageEmbed()
        .setColor('#1367FD')
        .setTitle(':book:**วิชาสามัญ 65**')
        .setURL('https://www.mytcas.com/news/announcement-61')
        .setDescription('**ตารางกำหนดการ วิชาสามัญ**')
        .setImage('https://cdn.discordapp.com/attachments/910079938936315978/910745114278768640/3f2e931178f60a5456fca1853f7ae5a2351a3bca-1000x1000.png')
        .setFooter('จาก myTCAS')
        msg.channel.send({embeds: [samanEmbed]});
    }
    if(command == 'cat'){
        let getcat = async()=>{
            let res = await axios.get('https://api.thecatapi.com/v1/images/search')
            let cat = res.data[0]
            return cat
        }
        let catvalue = await getcat()
        msg.reply(`${catvalue.url}`)
    }
    if(command == 'dog'){
        let getdog = async()=>{
            let res = await axios.get('https://dog.ceo/api/breeds/image/random')
            let dog = res.data
            return dog
        }
        let dogvalue = await getdog()
        msg.reply(`${dogvalue.message}`)
    }
    if(command == 'meme'){
        let getmeme = async()=>{
            let res = await axios.get('https://meme-api.herokuapp.com/gimme')
            let meme = res.data
            return meme
        }
        let memevalue = await getmeme()
        msg.reply(`${memevalue.url}`)
    }
    if(msg.content == prefix + "randomnum."){
        let num = Math.floor(Math.random() * 10).toString()
        msg.reply(num)
    }
    if(command == 'thai'){
        let getthai = async()=>{
            let res = await axios.get('https://watasalim.vercel.app/api/quotes/random')
            let thai = res.data
            return thai
        }
        let thaivalue = await getthai()
        msg.reply(`${thaivalue.quote.body}`)
    }
    if(command == 'covid'){
        let getcovid = async()=>{
            let res = await axios.get('https://covid19.ddc.moph.go.th/api/Cases/today-cases-all')
            let covid = res.data
            return covid
        }
        let covidvalue = await getcovid()
        const covidEmbed = new MessageEmbed()
        .setColor('#FD3B0F')
        .setTitle(':nauseated_face: **COVID-19 Thailand**')
        .setURL('https://ddc.moph.go.th/viralpneumonia/')
        .addFields(
            {name: 'Date', value: `${covidvalue[0].update_date}` },
            {name:':hospital: New Case',value:`${covidvalue[0].new_case}`,inline: false},
            {name:':skull_crossbones: New Death',value:`${covidvalue[0].new_death}`,inline: true},
            {name:':pill: New Recovered',value:`${covidvalue[0].new_recovered}`,inline: false},
        )
        .setFooter('กรมควบคุมโรค')
        msg.channel.send({embeds: [covidEmbed]});
    }
    if(command == 'topnews'){
        let getnews = async()=>{
            let res = await axios.get('https://newsapi.org/v2/top-headlines?' +'country=th&' +'apiKey=51f3010cf47e4532a21322457bd1acd9')
            let news = res.data
            return news
        }
        let newsvalue = await getnews()
        const topnewsEmbed = new MessageEmbed()
        .setColor('RANDOM')
        .setTitle('**ข่าวเด่นประจำวัน**')
        .setDescription(`${newsvalue.articles[0].title}`)
        .setURL(`${newsvalue.articles[0].url}`)
        .setImage(`${newsvalue.articles[0].urlToImage}`)
        .setFooter(`${newsvalue.articles[0].publishedAt}`)
        msg.channel.send({embeds: [topnewsEmbed]});
    }
    if(command == 'bored'){
        let getbored = async()=>{
            let res = await axios.get('http://www.boredapi.com/api/activity/')
            let bored = res.data
            return bored
        }
        let boredvalue = await getbored()
        const boredEmbed = new MessageEmbed()
        .setColor('RANDOM')
        .setTitle(`${boredvalue.activity}`)
        .setURL(`${boredvalue.link}`)
        .setDescription(`**Type:** ${boredvalue.type}\n **Participants:** ${boredvalue.participants}\n **Accessibility:** ${boredvalue.accessibility}\n **Price:** ${boredvalue.price}`)
        msg.channel.send({embeds:[boredEmbed]})
    }
    if(command == 'apod'){
        let getapod = async()=>{
            let res = await axios.get('https://api.nasa.gov/planetary/apod?api_key=HYYeYY0P2jDc3nlciJZI9d3ajh95j1QuslcrW8mm')
            let apod = res.data
            return apod
        }
        let apodvalue = await getapod()
        msg.reply(`**By:** ${apodvalue.copyright}\n**Title:** ${apodvalue.title}\n**Image:** ${apodvalue.hdurl}`)
    }
    if(msg.content === 'Taiwan is a country'){
        msg.reply('Social credit - 9999999999999')
    }
    if(command == 'tcas'){
            try{
                let url = 'https://api-tcas.herokuapp.com/'
                let gettcas = async()=>{
                    let res = await axios.get(url)
                    let tcas = res.data
                    return tcas
                }
                let tcasvalue = await gettcas()
                if(args){
                    let name = eval(`tcasvalue.${args}.name`)
                    let url = eval(`tcasvalue.${args}.url`)
                    let img = eval(`tcasvalue.${args}.url_img`)
                    const tcasEmbed = new MessageEmbed()
                    .setColor('RANDOM')
                    .setTitle(name)
                    .setURL(url)
                    .setImage(img)
                    msg.channel.send({embeds:[tcasEmbed]})
                }
            }catch(err){
                msg.reply('Worng name or there is not that name')
                return
            }
    }
    if(command === 'friend'){
        try{
        let url = 'https://mvk19-section3-api.herokuapp.com/'
        let getfriend = async()=>{
            let res = await axios.get(url)
            let friend = res.data
            return friend
        }
        let friendvalue = await getfriend()
        if(args){
            let name = eval(`friendvalue.${args}.name`)
            let nickname = eval(`friendvalue.${args}.nickname`)
            let ig = eval(`friendvalue.${args}.ig`)
            let img = eval(`friendvalue.${args}.url_img`)
            const friendEmbed = new MessageEmbed()
            .setColor('RANDOM')
            .setTitle(`${name}`)
            .setDescription(`Nickname: ${nickname} \nIG: ${ig}`)
            .setImage(img)
            .setFooter('Thx : https://github.com/lnwtxn')
            msg.channel.send({embeds: [friendEmbed]})
        }
    }catch(err){
        msg.reply('There is not that person. Plz give the proper name.')
        return
    }
    }
    if(command == 'quote'){
        let getquotation = async()=>{
            let res = await axios.get('https://cheab-quote.herokuapp.com/')
            let quotation = res.data
            return quotation
        }
        let num = Math.floor(Math.random() * 100)
        let quotationvalue = await getquotation()
        msg.reply(quotationvalue.quote[num])
    }
}
)

client.login(process.env.TOKEN)