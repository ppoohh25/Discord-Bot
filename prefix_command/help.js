const {MessageEmbed} = require('discord.js')

const helpEmbed = new MessageEmbed()
        .setTitle('**Help**')
        .setColor('#FFEDAD')
        .setDescription(':robot:`!botinfo`'+'= About bot'
        +'\n'+'-------------------------------------------'
        +'\n'+'**Education**'
        +'\n'+':book:`!tcas65`'+'= About TCAS65'
        +'\n'+':book:`!gatpat`'+'= About GAT/PAT65'
        +'\n'+':book:`!saman`'+'= About วิชาสามัญ65'
        +'\n'+':book:`!tcas` `kmitl` `kmutt` `kmunb` `mu` `tu`'+ '\n= About University TCAS65'
        +'\n'+'-------------------------------------------'
        +'\n'+'**Fun**'
        +'\n'+':cat:`!cat`'+'= Some cute cat'
        +'\n'+':dog:`!dog`'+'= Some cute dog'
        +'\n'+':laughing:`!meme`'+'= Some funnythings'
        +'\n'+':flag_th:`!thai`'+'= ลองดูครับ'
        +'\n'+':yawning_face:`!bored`'+'= Try something new!'
        +'\n'+':comet:`!apod`'+'= Astronomy Picture of the Day'
        +'\n'+':laughing:`!quote`'+'= คำคมๆ'
        +'\n'+'-------------------------------------------'
        +'\n'+'**News**'
        +'\n'+':nauseated_face:`!covid`'+'= COVID-19 of Thailand'
        +'\n'+':newspaper:`!topnews`'+'= Top news'
        +'\n'+'-------------------------------------------'
        +'\n'+'**M.6/3**'
        +'\n'+':school:`!friend`'+'= About member of M.6/3'
        )

module.exports={
    name: 'help',
    execute(msg, args){
        msg.channel.send({embeds: [helpEmbed]})
    }
}