const {MessageEmbed} = require('discord.js')

const tcas65Embed = new MessageEmbed()
        .setColor('#5EFFB9')
        .setTitle(':book:**TCAS 65**')
        .setURL('https://www.mytcas.com/news/announcement-61')
        .setDescription('**ตารางกำหนดการ TCAS65**')
        .setImage('https://cdn.discordapp.com/attachments/910079938936315978/910740077959848006/7e53dbab028122c8c92868f8334de845ae0ec1d6-4583x2558.png')
        .setFooter('จาก myTCAS');

module.exports = {
    name:'tcas65',
    execute(msg, args){
        msg.channel.send({ embeds: [tcas65Embed] })
    }
}