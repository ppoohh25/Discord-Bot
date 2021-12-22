const {SlashCommandBuilder} = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js')

const tcas65Embed = new MessageEmbed()
         .setColor('#5EFFB9')
         .setTitle(':book:**TCAS 65**')
         .setURL('https://www.mytcas.com/news/announcement-61')
         .setDescription('**ตารางกำหนดการ TCAS65**')
         .setImage('https://cdn.discordapp.com/attachments/910079938936315978/910740077959848006/7e53dbab028122c8c92868f8334de845ae0ec1d6-4583x2558.png')
         .setFooter('จาก myTCAS');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('tcas65')
		.setDescription('Schedule about TCAS65'),
	async execute(interaction) {
		return interaction.reply({embeds:[tcas65Embed]});
	},
};