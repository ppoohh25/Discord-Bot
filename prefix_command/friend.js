const axios = require('axios')
const {MessageEmbed} = require('discord.js')

module.exports={
    name:'friend',
    async execute(msg, args){
        try{
                    let url = 'https://mvk19-section3-api.herokuapp.com/'
                    let getfriend = async()=>{
                        let res = await axios.get(url)
                        let friend = res.data
                        return friend
                    }
                    let friendvalue = await getfriend()
                    if(args){
                        let name = eval(`friendvalue.${args}.name`)
                        let nickname = eval(`friendvalue.${args}.nickname`)
                        let ig = eval(`friendvalue.${args}.ig`)
                        let img = eval(`friendvalue.${args}.url_img`)
                        const friendEmbed = new MessageEmbed()
                        .setColor('RANDOM')
                        .setTitle(`${name}`)
                        .setDescription(`Nickname: ${nickname} \nIG: ${ig}`)
                        .setImage(img)
                        .setFooter('Thx : https://github.com/lnwtxn')
                        msg.channel.send({embeds: [friendEmbed]})
                    }
                }catch(err){
                    msg.reply('There is not that person. Plz give the proper name.')
                    return
                }
    }
}