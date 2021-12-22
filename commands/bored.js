const { SlashCommandBuilder } = require('@discordjs/builders');
const axios = require('axios')
const { MessageEmbed } = require('discord.js')

let getbored = async()=>{
                 let res = await axios.get('http://www.boredapi.com/api/activity/')
                 let bored = res.data
                 return bored
             }
             
             

             
             
            
             

module.exports = {
	data: new SlashCommandBuilder()
		.setName('bored')
		.setDescription('Try something new!'),
	async execute(interaction) {
        let boredvalue = await getbored()
        const boredEmbed = new MessageEmbed()
         .setColor('RANDOM')
         .setTitle(`${boredvalue.activity}`)
         .setURL(`${boredvalue.link}`)
         .setDescription(`**Type:** ${boredvalue.type}\n **Participants:** ${boredvalue.participants}\n **Accessibility:** ${boredvalue.accessibility}\n **Price:** ${boredvalue.price}`)
		return interaction.reply({embeds:[boredEmbed]});
	},
};