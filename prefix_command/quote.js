const axios = require('axios')

let getquotation = async()=>{
                let res = await axios.get('https://cheab-quote.herokuapp.com/')
                let quotation = res.data
                return quotation
            }

module.exports={
    name:'quote',
    async execute(msg, args){
        try{
        let num = Math.floor(Math.random() * 100)
        let quotationvalue = await getquotation()
        msg.reply(quotationvalue.quote[num])
        }catch(err){
            msg.reply('There is some error')
            return
        }
    }
}