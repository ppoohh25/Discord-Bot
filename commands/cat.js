const { SlashCommandBuilder } = require('@discordjs/builders');
const axios = require('axios')

let getcat = async()=>{
                 let res = await axios.get('https://api.thecatapi.com/v1/images/search')
                 let cat = res.data[0]
                 return cat
             }
             

module.exports = {
	data: new SlashCommandBuilder()
		.setName('cat')
		.setDescription('Cute cat!'),
	async execute(interaction) {
        let catvalue = await getcat()
		return interaction.reply(`${catvalue.url}`);
	},
};