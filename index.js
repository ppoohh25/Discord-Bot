const {Client, Intents, MessageEmbed} = require('discord.js');
const prefix = "!"
const config = require("./config.json")
const axios = require('axios')

const client = new Client(
    {
        intents:[
            Intents.FLAGS.GUILDS,
            Intents.FLAGS.GUILD_MESSAGES
        ]
    }
)

client.on('ready', ()=>{
    console.log('Your bot is ready')
})

client.on('messageCreate', async (msg) =>{
    if(msg.content == prefix +'help'){
        const helpEmbed = new MessageEmbed()
        .setTitle('**Help**')
        .setColor('#FFEDAD')
        .setDescription('`!arknights` '+'= About Arknights'
        +'\n'+'`!botinfo`'+'= About bot'
        +'\n'+'`!tcas65`'+'= About TCAS65'
        +'\n'+'`!gatpat`'+'= About GAT/PAT65'
        +'\n'+'`!saman`'+'= About วิชาสามัญ65'
        +'\n'+':cat:`!cat`'+'= Some cute cat'
        +'\n'+':dog:`!dog`'+'= Some cute dog'
        +'\n'+':laughing:`!meme`'+'= Some funnythings')
        msg.channel.send({embeds: [helpEmbed]})
    
    } 
    if(msg.content == prefix +'arknights'){
        const arknightsEmbed = new MessageEmbed()
        .setColor('#000000')
        .setTitle('Arknights')
        .setURL('https://twitter.com/arknightsen')
        .setAuthor('Arknights_EN', 'https://cdn.discordapp.com/attachments/910079938936315978/910465001079332905/zjjzBeIs_400x400.png')
        .setDescription('**Good game**'+'\n'+'Guide: '+'\n'+'https://www.youtube.com/c/KyoStinV00')
        .setImage('https://cdn.discordapp.com/attachments/910079938936315978/910735300878282792/3B2aW4Nka4xiq35ywcD5b5Rqb6IJw0ffm_QFlHM_rV9ex7wKtb0ddFOX8LJPxkemb78.png')
        .setTimestamp()
        .setFooter('Not rabbit but Donke');
        msg.channel.send({ embeds: [arknightsEmbed] });
    }
    if(msg.content == prefix + 'botinfo'){
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
    if(msg.content == prefix + 'tcas65'){
        const tcas65Embed = new MessageEmbed()
        .setColor('#5EFFB9')
        .setTitle(':book:**TCAS 65**')
        .setURL('https://www.mytcas.com/news/announcement-61')
        .setDescription('**ตารางกำหนดการ TCAS65**')
        .setImage('https://cdn.discordapp.com/attachments/910079938936315978/910740077959848006/7e53dbab028122c8c92868f8334de845ae0ec1d6-4583x2558.png')
        .setFooter('จาก myTCAS');
        msg.channel.send({ embeds: [tcas65Embed] });
    }
    if(msg.content == prefix + 'gatpat'){
        const gatpatEmbed = new MessageEmbed()
        .setColor('#F065FF')
        .setTitle(':book:**GAT/PAT 65**')
        .setURL('https://www.mytcas.com/news/announcement-61')
        .setDescription('**ตารางกำหนดการ GAT/PAT**')
        .setImage('https://cdn.discordapp.com/attachments/910079938936315978/910743740036034610/15a04b9aff1feaca082d6e645621b9f0d14453d7-960x960.png')
        .setFooter('จาก myTCAS')
        msg.channel.send({embeds: [gatpatEmbed]});
    }
    if(msg.content == prefix + 'saman'){
        const samanEmbed = new MessageEmbed()
        .setColor('#1367FD')
        .setTitle(':book:**วิชาสามัญ 65**')
        .setURL('https://www.mytcas.com/news/announcement-61')
        .setDescription('**ตารางกำหนดการ วิชาสามัญ**')
        .setImage('https://cdn.discordapp.com/attachments/910079938936315978/910745114278768640/3f2e931178f60a5456fca1853f7ae5a2351a3bca-1000x1000.png')
        .setFooter('จาก myTCAS')
        msg.channel.send({embeds: [samanEmbed]});
    }
    if(msg.content == prefix +'arknight'){
        msg.reply('arknights have S fix it :bangbang:')
        const arknightsEmbed = new MessageEmbed()
        .setColor('#000000')
        .setTitle('Arknights')
        .setURL('https://twitter.com/arknightsen')
        .setAuthor('Arknights_EN', 'https://cdn.discordapp.com/attachments/910079938936315978/910465001079332905/zjjzBeIs_400x400.png')
        .setDescription('**Good game**'+'\n'+'Guide: '+'\n'+'https://www.youtube.com/c/KyoStinV00')
        .setImage('https://cdn.discordapp.com/attachments/910079938936315978/910735300878282792/3B2aW4Nka4xiq35ywcD5b5Rqb6IJw0ffm_QFlHM_rV9ex7wKtb0ddFOX8LJPxkemb78.png')
        .setTimestamp()
        .setFooter('Not rabbit but Donke');
        msg.channel.send({ embeds: [arknightsEmbed] });
    }
    if(msg.content == prefix+'cat'){
        let getcat = async()=>{
            let res = await axios.get('https://api.thecatapi.com/v1/images/search')
            let cat = res.data[0]
            return cat
        }
        let catvalue = await getcat()
        //console.log(catvalue.url)
        msg.reply(`${catvalue.url}`)
    }
    if(msg.content == prefix+'dog'){
        let getdog = async()=>{
            let res = await axios.get('https://dog.ceo/api/breeds/image/random')
            let dog = res.data
            return dog
        }
        let dogvalue = await getdog()
        //console.log(dogvalue.message)
        msg.reply(`${dogvalue.message}`)
    }
    if(msg.content == prefix+'meme'){
        let getmeme = async()=>{
            let res = await axios.get('https://meme-api.herokuapp.com/gimme')
            let meme = res.data
            return meme
        }
        let memevalue = await getmeme()
        //console.log(memevalue.url)
        msg.reply(`${memevalue.url}`)
    }
    // if(msg.content == prefix + "randomnum."){
    //     let num = Math.floor(Math.random() * 10).toString()
    //     msg.reply(num)
    //}
    if(msg.content == prefix+'anime'){
        
    }
    
})

client.login(config.token)