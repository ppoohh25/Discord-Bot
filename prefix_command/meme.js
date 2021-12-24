const axios = require('axios')

let getmeme = async()=>{
                let res = await axios.get('https://meme-api.herokuapp.com/gimme')
                let meme = res.data
                return meme
            }


module.exports ={
    name:'meme',
    async execute(msg, args){
        let memevalue = await getmeme()
        msg.reply(`${memevalue.url}`)
    }
}