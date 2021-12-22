const {SlashCommandBuilder} = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js')

const gatpatEmbed = new MessageEmbed()
         .setColor('#F065FF')
         .setTitle(':book:**GAT/PAT 65**')
         .setURL('https://www.mytcas.com/news/announcement-61')
         .setDescription('**ตารางกำหนดการ GAT/PAT**')
         .setImage('https://cdn.discordapp.com/attachments/910079938936315978/910743740036034610/15a04b9aff1feaca082d6e645621b9f0d14453d7-960x960.png')
         .setFooter('จาก myTCAS')

module.exports = {
	data: new SlashCommandBuilder()
		.setName('gatpat')
		.setDescription('Schedule about GAT/PAT65'),
	async execute(interaction) {
		return interaction.reply({embeds:[gatpatEmbed]});
	},
};