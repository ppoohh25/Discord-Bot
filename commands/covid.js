const { SlashCommandBuilder } = require('@discordjs/builders');
const axios = require('axios')
const { MessageEmbed } = require('discord.js')

let getcovid = async()=>{
                 let res = await axios.get('https://covid19.ddc.moph.go.th/api/Cases/today-cases-all')
                 let covid = res.data
                 return covid
             }
             

             
             
            
             

module.exports = {
	data: new SlashCommandBuilder()
		.setName('covid')
		.setDescription('Covid in Thailand'),
	async execute(interaction) {
        let covidvalue = await getcovid()
        let covidEmbed = new MessageEmbed()
            .setColor('#FD3B0F')
            .setTitle(':nauseated_face: **COVID-19 Thailand**')
            .setURL('https://ddc.moph.go.th/viralpneumonia/')
            .addFields(
                {name: 'Date', value: `${covidvalue[0].update_date}` },
                {name:':hospital: New Case',value:`${covidvalue[0].new_case}`,inline: false},
                {name:':skull_crossbones: New Death',value:`${covidvalue[0].new_death}`,inline: true},
                {name:':pill: New Recovered',value:`${covidvalue[0].new_recovered}`,inline: false},
             )
            .setFooter('กรมควบคุมโรค')
		return interaction.reply({embeds:[covidEmbed]});
	},
};