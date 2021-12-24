const {MessageEmbed} = require('discord.js')

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
    name:'botinfo',
    execute(msg, args){
        msg.channel.send({ embeds: [botinfoEmbed] })
    }
}