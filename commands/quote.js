const { SlashCommandBuilder } = require('@discordjs/builders');
const axios = require('axios')
const { MessageEmbed } = require('discord.js')

let getquotation = async()=>{
                 let res = await axios.get('https://cheab-quote.herokuapp.com/')
                 let quotation = res.data
                 return quotation
             }
             
             

             
             
            
             

module.exports = {
	data: new SlashCommandBuilder()
		.setName('quote')
		.setDescription('คำคมๆ'),
	async execute(interaction) {
        let quotationvalue = await getquotation()
        let num = Math.floor(Math.random() * 100)
		return interaction.reply(quotationvalue.quote[num]);
	},
};