const axios = require('axios')

let getdog = async()=>{
                let res = await axios.get('https://dog.ceo/api/breeds/image/random')
                let dog = res.data
                return dog
            }

module.exports ={
    name:'dog',
    async execute(msg, args){
        let dogvalue = await getdog()
        msg.reply(`${dogvalue.message}`)
    }
}