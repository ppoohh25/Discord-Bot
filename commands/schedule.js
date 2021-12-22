const {SlashCommandBuilder} = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js')

const scheduleEmbed = new MessageEmbed()
         .setColor('RANDOM')
         .setTitle('**ตารางสอน**')
         .setDescription('**เข้าเรียนกันด้วย**')
         .setImage('https://images-ext-1.discordapp.net/external/ZTDz1ylRa6KeZEBJLCJrrsVV709ytqMujIvrtZIB2eI/%3Fwidth%3D769%26height%3D490/https/media.discordapp.net/attachments/912032605845741578/914551150747979826/IMG_9866.png?width=692&height=441')
         .setFooter('จาก MVK');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('schedule')
		.setDescription('ดูตารางสอน'),
	async execute(interaction) {
		return interaction.reply({embeds:[scheduleEmbed]});
	},
};