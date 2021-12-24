const axios = require('axios')

let getthai = async()=>{
                let res = await axios.get('https://watasalim.vercel.app/api/quotes/random')
                let thai = res.data
                return thai
            }


module.exports ={
    name:'thai',
    async execute(msg, args){
        let thaivalue = await getthai()
        msg.reply(`${thaivalue.quote.body}`)
    }
}