const axios = require('axios')
const {MessageEmbed} = require('discord.js')


module.exports={
    name:'tcas',
    async execute(msg, args){
        try{
                            let url = 'https://api-tcas.herokuapp.com/'
                            let gettcas = async()=>{
                                let res = await axios.get(url)
                                let tcas = res.data
                                return tcas
                            }
                            let tcasvalue = await gettcas()
                            if(args){
                                let name = eval(`tcasvalue.${args}.name`)
                                let url = eval(`tcasvalue.${args}.url`)
                                let img = eval(`tcasvalue.${args}.url_img`)
                                const tcasEmbed = new MessageEmbed()
                                .setColor('RANDOM')
                                .setTitle(name)
                                .setURL(url)
                                .setImage(img)
                                msg.channel.send({embeds:[tcasEmbed]})
                            }
                        }catch(err){
                            msg.reply('Worng name or there is not that name')
                            return
                        }
    }
}