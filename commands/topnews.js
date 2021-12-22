const { SlashCommandBuilder } = require('@discordjs/builders');
const axios = require('axios')
const { MessageEmbed } = require('discord.js')

let getnews = async()=>{
                 let res = await axios.get('https://newsapi.org/v2/top-headlines?' +'country=th&' +'apiKey=51f3010cf47e4532a21322457bd1acd9')
                 let news = res.data
                 return news
             }
             
             

             
             
            
             

module.exports = {
	data: new SlashCommandBuilder()
		.setName('topnews')
		.setDescription('ข่าวเด่นประจำวัน'),
	async execute(interaction) {
        let newsvalue = await getnews()
        const topnewsEmbed = new MessageEmbed()
         .setColor('RANDOM')
         .setTitle('**ข่าวเด่นประจำวัน**')
         .setDescription(`${newsvalue.articles[0].title}`)
         .setURL(`${newsvalue.articles[0].url}`)
         .setFooter(`${newsvalue.articles[0].publishedAt}`)
		return interaction.reply({embeds:[topnewsEmbed]});
	},
};