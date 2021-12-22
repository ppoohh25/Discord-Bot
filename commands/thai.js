const { SlashCommandBuilder } = require('@discordjs/builders');
const axios = require('axios')

let getthai = async()=>{
                 let res = await axios.get('https://watasalim.vercel.app/api/quotes/random')
                 let thai = res.data
                 return thai
             }
             
             
            
             

module.exports = {
	data: new SlashCommandBuilder()
		.setName('thai')
		.setDescription('ลองดูครับ'),
	async execute(interaction) {
        let thaivalue = await getthai()
		return interaction.reply(`${thaivalue.quote.body}`);
	},
};