const {SlashCommandBuilder} = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js')

const samanEmbed = new MessageEmbed()
         .setColor('#1367FD')
         .setTitle(':book:**วิชาสามัญ 65**')
         .setURL('https://www.mytcas.com/news/announcement-61')
         .setDescription('**ตารางกำหนดการ วิชาสามัญ**')
         .setImage('https://cdn.discordapp.com/attachments/910079938936315978/910745114278768640/3f2e931178f60a5456fca1853f7ae5a2351a3bca-1000x1000.png')
         .setFooter('จาก myTCAS')

module.exports = {
	data: new SlashCommandBuilder()
		.setName('saman')
		.setDescription('Schedule about วิชาสามัญ 65'),
	async execute(interaction) {
		return interaction.reply({embeds:[samanEmbed]});
	},
};