const axios = require('axios')
const {MessageEmbed} = require('discord.js')

let getnews = async()=>{
                let res = await axios.get('https://newsapi.org/v2/top-headlines?' +'country=th&' +'apiKey=51f3010cf47e4532a21322457bd1acd9')
                let news = res.data
                return news
            }

module.exports ={
    name:'topnews',
    async execute(msg, args){
        let newsvalue = await getnews()
        const topnewsEmbed = new MessageEmbed()
        .setColor('RANDOM')
        .setTitle('**ข่าวเด่นประจำวัน**')
        .setDescription(`${newsvalue.articles[0].title}`)
        .setURL(`${newsvalue.articles[0].url}`)
        .setImage(`${newsvalue.articles[0].urlToImage}`)
        .setFooter(`${newsvalue.articles[0].publishedAt}`)
        msg.channel.send({embeds: [topnewsEmbed]})
    }
}