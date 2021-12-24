const axios = require('axios')

let getapod = async()=>{
                let res = await axios.get('https://api.nasa.gov/planetary/apod?api_key=HYYeYY0P2jDc3nlciJZI9d3ajh95j1QuslcrW8mm')
                let apod = res.data
                return apod
            }


module.exports ={
    name:'apod',
    async execute(msg, args){
        let apodvalue = await getapod()
        msg.reply(`**By:** ${apodvalue.copyright}\n**Title:** ${apodvalue.title}\n**Image:** ${apodvalue.hdurl}`)
    }
}