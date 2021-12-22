const { SlashCommandBuilder } = require('@discordjs/builders');
const axios = require('axios')

let getdog = async()=>{
                 let res = await axios.get('https://dog.ceo/api/breeds/image/random')
                 let dog = res.data
                 return dog
             }
            
             

module.exports = {
	data: new SlashCommandBuilder()
		.setName('dog')
		.setDescription('Cute dog!'),
	async execute(interaction) {
        let dogvalue = await getdog()
		return interaction.reply(`${dogvalue.message}`);
	},
};