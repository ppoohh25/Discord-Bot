const { SlashCommandBuilder } = require('@discordjs/builders');
const axios = require('axios')

let getmeme = async()=>{
                 let res = await axios.get('https://meme-api.herokuapp.com/gimme')
                 let meme = res.data
                 return meme
             }
             
            
             

module.exports = {
	data: new SlashCommandBuilder()
		.setName('meme')
		.setDescription('Funny meme'),
	async execute(interaction) {
        let memevalue = await getmeme()
		return interaction.reply(`${memevalue.url}`);
	},
};