const {MessageEmbed, MessageActionRow, MessageButton} = require('discord.js')

const botinfoEmbed = new MessageEmbed()
        .setColor('#EB3333')
        .setTitle(':robot:** Bot Info**')
        .setDescription('**A lovely bot that Developed by Sadayu**'+
                        '\n'+'**Contact**'+
                        '\n'+':link:FB :'+
                        '\n'+'https://bit.ly/3FqkREL'+
                        '\n'+':link:IG :'+
                        '\n'+'https://bit.ly/3HAgx7J'+
                        '\n'+':link:Github :'+
                        '\n'+'https://gist.github.com/ppoohh25'
                        )

const row = new MessageActionRow()
    .addComponents(
    new MessageButton()
    .setURL('https://bit.ly/3FqkREL')
    .setLabel('Facebook')
    .setStyle('LINK')
    )
    .addComponents(
        new MessageButton()
        .setURL('https://bit.ly/3HAgx7J')
        .setLabel('Instagram')
        .setStyle('LINK')
    )
    .addComponents(
        new MessageButton()
        .setURL('https://gist.github.com/ppoohh25')
        .setLabel('Github')
        .setStyle('LINK')
    )

module.exports = {
    name:'botinfo',
    execute(msg, args){
        msg.channel.send({ embeds: [botinfoEmbed] , components:[row]})
    }
}