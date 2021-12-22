const {SlashCommandBuilder} = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js')

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

module.exports = {
	data: new SlashCommandBuilder()
		.setName('botinfo')
		.setDescription('Give you this bot information'),
	async execute(interaction) {
		return interaction.reply({embeds:[botinfoEmbed]});
	},
};