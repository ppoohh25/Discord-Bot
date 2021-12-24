const axios = require('axios')

let getcat = async()=>{
                let res = await axios.get('https://api.thecatapi.com/v1/images/search')
                let cat = res.data[0]
                return cat
            }

module.exports ={
    name:'cat',
    async execute(msg, args){
        let catvalue = await getcat()
        msg.reply(`${catvalue.url}`)
    }
}