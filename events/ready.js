const {channelId} = process.env
const cron = require('node-cron')
const{MessageEmbed} = require('discord.js')

module.exports = {
	name: 'ready',
	once: true,
	execute(client) {
		console.log(`Ready! Logged in as ${client.user.tag}`);
        client.user.setActivity('type "/" or !help | Christmas!', {type: 'PLAYING'})
        //=======================| Make auto alert |==================================
    const channel = client.channels.cache.get(channelId)
    //=======================| Monday |======================================
    cron.schedule('45 7 * * mon', async()=>{
        const Embed = new MessageEmbed()
                        .setColor('RANDOM')
                        .setTitle(':alarm_clock: Plz learn')
                        .setDescription(':clock12: **Time** : `7:45-8:30` '
                        +'\n\n:books: **Subject** : `คณิตหลัก`'
                        +'\n\n:teacher: **Teacher** : `Mr.Meeh`'
                        +'\n\n:link: **Link** : https://us02web.zoom.us/j/6365107396')
        await channel.send({embeds: [Embed]})
    },{
        scheduled: true,
        timezone: 'Asia/Bangkok'
    })
    
    cron.schedule('10 9 * * mon', async()=>{
        const Embed = new MessageEmbed()
                        .setColor('RANDOM')
                        .setTitle(':alarm_clock: Plz learn')
                        .setDescription(':clock12: **Time** : `9:10-10:50` '
                        +'\n\n:books: **Subject** : `เคมี`'
                        +'\n\n:teacher: **Teacher** : `ม.ธนากร`'
                        +'\n\n:link: **Link** : https://us02web.zoom.us/j/6365107396')
        await channel.send({embeds: [Embed]})
    },{
        scheduled: true,
        timezone: 'Asia/Bangkok'
    })

    cron.schedule('50 10 * * mon', async()=>{
        const Embed = new MessageEmbed()
                        .setColor('RANDOM')
                        .setTitle(':alarm_clock: Plz learn')
                        .setDescription(':clock12: **Time** : `10:50-12:30` '
                        +'\n\n:books: **Subject** : `แคล`'
                        +'\n\n:teacher: **Teacher** : `ครูสา`'
                        +'\n\n:link: **Link** : https://us02web.zoom.us/j/6365107396')
        await channel.send({embeds: [Embed]})
    },{
        scheduled: true,
        timezone: 'Asia/Bangkok'
    })

    cron.schedule('15 14 * * mon', async()=>{
        const Embed = new MessageEmbed()
                        .setColor('RANDOM')
                        .setTitle(':alarm_clock: Plz learn')
                        .setDescription(':clock12: **Time** : `14:15-15:00` '
                        +'\n\n:books: **Subject** : `ภาษาอังกฤษ`'
                        +'\n\n:teacher: **Teacher** : `ม.สหาย`'
                        +'\n\n:link: **Link** : ไม่แน่นอน')
        await channel.send({embeds: [Embed]})
    },{
        scheduled: true,
        timezone: 'Asia/Bangkok'
    })

    cron.schedule('25 15 * * mon', async()=>{
        const Embed = new MessageEmbed()
                        .setColor('RANDOM')
                        .setTitle(':alarm_clock: Plz learn')
                        .setDescription(':clock12: **Time** : `15:25-16:10` '
                        +'\n\n:books: **Subject** : `สังคม`'
                        +'\n\n:teacher: **Teacher** : `ครูหนึ่ง`'
                        +'\n\n:link: **Link** : https://us02web.zoom.us/j/6365107396?pwd=RFI0UmcrQ0xib1FRNzNIdXNyK2FmUT09')
        await channel.send({embeds: [Embed]})
    },{
        scheduled: true,
        timezone: 'Asia/Bangkok'
    })

    cron.schedule('10 16 * * mon', async ()=>{
        const Embed = new MessageEmbed()
                        .setColor('RANDOM')
                        .setTitle(':alarm_clock: Plz learn')
                        .setDescription(':clock12: **Time** : `16:10-17:00` '
                        +'\n\n:books: **Subject** : `Social`'
                        +'\n\n:teacher: **Teacher** : `Mrs. Soraya C. Chongkhophanawet`'
                        +'\n\n:link: **Link** : https://us02web.zoom.us/j/6365107396?pwd=RFI0UmcrQ0xib1FRNzNIdXNyK2FmUT09'
                        + "\n\n:bookmark: **Classroom** : https://classroom.google.com/c/Mzc2MDE3OTA5NTE5")
        await channel.send({embeds: [Embed]})
    },{
        scheduled: true,
        timezone: 'Asia/Bangkok'
    })

    //=======================| Tuesday |======================================

    cron.schedule('45 7 * * Tuesday', async()=>{
        const Embed = new MessageEmbed()
                        .setColor('RANDOM')
                        .setTitle(':alarm_clock: Plz learn')
                        .setDescription(':clock12: **Time** : `7:45-8:30` '
                        +'\n\n:books: **Subject** : `คณิตหลัก`'
                        +'\n\n:teacher: **Teacher** : `Mr.Meeh`'
                        +'\n\n:link: **Link** : https://us02web.zoom.us/j/6365107396')
        await channel.send({embeds: [Embed]})
    },{
        scheduled: true,
        timezone: 'Asia/Bangkok'
    })

    cron.schedule('10 9 * * Tuesday', async ()=>{
        const Embed = new MessageEmbed()
                        .setColor('RANDOM')
                        .setTitle(':alarm_clock: Plz learn')
                        .setDescription(':clock12: **Time** : `9:10-10:00` '
                                            +'\n\n:books: **Subject** : `Physics`'
                                            +'\n\n:teacher: **Teacher** : `Mr.Jubert P. Bela-o`'
                                            +'\n\n:link: **Link** : https://us02web.zoom.us/j/6365107396?pwd=RFI0UmcrQ0xib1FRNzNIdXNyK2FmUT09')
        await channel.send({embeds: [Embed]})
    },{
        scheduled: true,
        timezone: 'Asia/Bangkok'
    })

    cron.schedule('0 10 * * Tuesday', async ()=>{
        const Embed = new MessageEmbed()
                        .setColor('RANDOM')
                        .setTitle(':alarm_clock: Plz learn')
                        .setDescription(':clock12: **Time** : `10:00-10:50` '
                                            +'\n\n:books: **Subject** : `พละ`'
                                            +'\n\n:teacher: **Teacher** : `ม.เดช`'
                                            +'\n\n:link: **Link** : ไม่แน่นอน')
        await channel.send({embeds: [Embed]})
    },{
        scheduled: true,
        timezone: 'Asia/Bangkok'
    })

    cron.schedule('50 10 * * Tuesday', async ()=>{
        const Embed = new MessageEmbed()
                        .setColor('RANDOM')
                        .setTitle(':alarm_clock: Plz learn')
                        .setDescription(':clock12: **Time** : `10:50-12:00` '
                                            +'\n\n:books: **Subject** : `Chemistry`'
                                            +'\n\n:teacher: **Teacher** : `Miss Abel`'
                                            +'\n\n:link: **Link** : https://us02web.zoom.us/j/6365107396?pwd=RFI0UmcrQ0xib1FRNzNIdXNyK2FmUT09')
        await channel.send({embeds: [Embed]})
    },{
        scheduled: true,
        timezone: 'Asia/Bangkok'
    })

    cron.schedule('0 12 * * Tuesday', async ()=>{
        const Embed = new MessageEmbed()
                        .setColor('RANDOM')
                        .setTitle(':alarm_clock: Plz learn')
                        .setDescription(':clock12: **Time** : `12:00-12:30` '
                                            +'\n\n:books: **Subject** : `การงาน`'
                                            +'\n\n:teacher: **Teacher** : `ครูเบญจวรรน์`'
                                            +'\n\n:link: **Link** : https://us02web.zoom.us/j/6365107396?pwd=RFI0UmcrQ0xib1FRNzNIdXNyK2FmUT09')
        await channel.send({embeds: [Embed]})
    },{
        scheduled: true,
        timezone: 'Asia/Bangkok'
    })

    cron.schedule('30 13 * * Tuesday', async ()=>{
        const Embed = new MessageEmbed()
                        .setColor('RANDOM')
                        .setTitle(':alarm_clock: Plz learn')
                        .setDescription(':clock12: **Time** : `13:30-15:00` '
                                            +'\n\n:books: **Subject** : `ฟิสิกส์`'
                                            +'\n\n:teacher: **Teacher** : `ม.พี`'
                                            +'\n\n:link: **Link** : https://us02web.zoom.us/j/6365107396?pwd=RFI0UmcrQ0xib1FRNzNIdXNyK2FmUT09')
        await channel.send({embeds: [Embed]})
    },{
        scheduled: true,
        timezone: 'Asia/Bangkok'
    })

    cron.schedule('25 15 * * Tuesday', async ()=>{
        const Embed = new MessageEmbed()
                        .setColor('RANDOM')
                        .setTitle(':alarm_clock: Plz learn')
                        .setDescription(':clock12: **Time** : `15:25-17:00` '
                                            +'\n\n:books: **Subject** : `ปฏิบัติการทางดาราศาสตร์`'
                                            +'\n\n:teacher: **Teacher** : `ครูนริศรา`'
                                            +'\n\n:link: **Link** : https://us02web.zoom.us/j/6365107396'
                                            + "\n\n:bookmark: **Classroom** : https://classroom.google.com/u/0/c/MzcwMjgwODQ0Nzk1")
        await channel.send({embeds: [Embed]})
    },{
        scheduled: true,
        timezone: 'Asia/Bangkok'
    })

    //=======================| Wednesday |======================================

    cron.schedule('45 7 * * Wednesday', async ()=>{
        const Embed = new MessageEmbed()
                        .setColor('RANDOM')
                        .setTitle(':alarm_clock: Plz learn')
                        .setDescription(':clock12: **Time** : `7:45-8:30` '
                                            +'\n\n:books: **Subject** : `Chemistry`'
                                            +'\n\n:teacher: **Teacher** : `Miss Abel`'
                                            +'\n\n:link: **Link** : https://us02web.zoom.us/j/6365107396?pwd=RFI0UmcrQ0xib1FRNzNIdXNyK2FmUT09')
        await channel.send({embeds: [Embed]})
    },{
        scheduled: true,
        timezone: 'Asia/Bangkok'
    })

    cron.schedule('0 10 * * Wednesday', async ()=>{
        const Embed = new MessageEmbed()
                        .setColor('RANDOM')
                        .setTitle(':alarm_clock: Plz learn')
                        .setDescription(':clock12: **Time** : `10:00-10:50` '
                                            +'\n\n:books: **Subject** : `ประวัติศาสตร์`'
                                            +'\n\n:teacher: **Teacher** : `ม.ศักดิ์ดา`'
                                            +'\n\n:link: **Link** : https://us02web.zoom.us/j/6365107396')
        await channel.send({embeds: [Embed]})
    },{
        scheduled: true,
        timezone: 'Asia/Bangkok'
    })

    cron.schedule('50 10 * * Wednesday', async ()=>{
        const Embed = new MessageEmbed()
                        .setColor('RANDOM')
                        .setTitle(':alarm_clock: Plz learn')
                        .setDescription(':clock12: **Time** : `10:50-12:30` '
                                            +'\n\n:books: **Subject** : `ภาษาไทย`'
                                            +'\n\n:teacher: **Teacher** : `ม.ปอนด์`'
                                            +'\n\n:link: **Link** : https://us02web.zoom.us/j/6365107396')
        await channel.send({embeds: [Embed]})
    },{
        scheduled: true,
        timezone: 'Asia/Bangkok'
    })

    cron.schedule('15 14 * * Wednesday', async ()=>{
        const Embed = new MessageEmbed()
                        .setColor('RANDOM')
                        .setTitle(':alarm_clock: Plz learn')
                        .setDescription(':clock12: **Time** : `14:15-15:00` '
                                            +'\n\n:books: **Subject** : `English`'
                                            +'\n\n:teacher: **Teacher** : `Miss Lucia`'
                                            +'\n\n:link: **Link** : https://us02web.zoom.us/j/9504580269')
        await channel.send({embeds: [Embed]})
    },{
        scheduled: true,
        timezone: 'Asia/Bangkok'
    })

    cron.schedule('25 15 * * Wednesday', async ()=>{
        const Embed = new MessageEmbed()
                        .setColor('RANDOM')
                        .setTitle(':alarm_clock: Plz learn')
                        .setDescription(':clock12: **Time** : `15:25-16:10` '
                                            +'\n\n:books: **Subject** : `ภาษาอังกฤษ`'
                                            +'\n\n:teacher: **Teacher** : `ม.สหาย`'
                                            +'\n\n:link: **Link** : ไม่แน่นอน')
        await channel.send({embeds: [Embed]})
    },{
        scheduled: true,
        timezone: 'Asia/Bangkok'
    })

    cron.schedule('10 16 * * Wednesday', async ()=>{
        const Embed = new MessageEmbed()
                        .setColor('RANDOM')
                        .setTitle(':alarm_clock: Plz learn')
                        .setDescription(':clock12: **Time** : `16:10-17:00` '
                                            +'\n\n:books: **Subject** : `Math`'
                                            +'\n\n:teacher: **Teacher** : `Miss Ann`'
                                            +'\n\n:link: **Link** : https://us02web.zoom.us/j/2910068947')
        await channel.send({embeds: [Embed]})
    },{
        scheduled: true,
        timezone: 'Asia/Bangkok'
    })

    //=======================| Thursday |======================================
    cron.schedule('45 7 * * thu', async ()=>{
        const Embed = new MessageEmbed()
                        .setColor('RANDOM')
                        .setTitle(':alarm_clock: Plz learn')
                        .setDescription(':clock12: **Time** : `7:45-8:30` '
                        +'\n\n:books: **Subject** : `Social`'
                        +'\n\n:teacher: **Teacher** : `Mrs. Soraya C. Chongkhophanawet`'
                        +'\n\n:link: **Link** : https://us02web.zoom.us/j/6365107396?pwd=RFI0UmcrQ0xib1FRNzNIdXNyK2FmUT09'
                        + "\n\n:bookmark: **Classroom** : https://classroom.google.com/c/Mzc2MDE3OTA5NTE5")
        await channel.send({embeds: [Embed]})
    },{
        scheduled: true,
        timezone: 'Asia/Bangkok'
    })

    cron.schedule('10 9 * * thu', async ()=>{
        const Embed = new MessageEmbed()
                        .setColor('RANDOM')
                        .setTitle(':alarm_clock: Plz learn')
                        .setDescription(':clock12: **Time** : `9:10-10:00` '
                                            +'\n\n:books: **Subject** : `Physics`'
                                            +'\n\n:teacher: **Teacher** : `Mr.Jubert P. Bela-o`'
                                            +'\n\n:link: **Link** : https://us02web.zoom.us/j/6365107396?pwd=RFI0UmcrQ0xib1FRNzNIdXNyK2FmUT09')
        await channel.send({embeds: [Embed]})
    },{
        scheduled: true,
        timezone: 'Asia/Bangkok'
    })

    cron.schedule('0 10 * * thu', async ()=>{
        const Embed = new MessageEmbed()
                        .setColor('RANDOM')
                        .setTitle(':alarm_clock: Plz learn')
                        .setDescription(':clock12: **Time** : `10:00-10:50`'
                        +'\n\n:books: **Subject** : `ออกแบบและเทคโนโลยี`'
                        +'\n\n:teacher: **Teacher** : `คุณครูมนตรี โมลิสกุลมงคล`'
                        +'\n\n:link: **Link** : https://us02web.zoom.us/j/6365107396?pwd=RFI0UmcrQ0xib1FRNzNIdXNyK2FmUT09'
                        + "\n\n:bookmark: **Classroom** : https://classroom.google.com/c/NDM0MzczMTA3NjE4")
        await channel.send({embeds: [Embed]})
    },{
        scheduled: true,
        timezone: 'Asia/Bangkok'
    })

    cron.schedule('50 10 * * thu', async ()=>{
        const Embed = new MessageEmbed()
                        .setColor('RANDOM')
                        .setTitle(':alarm_clock: Plz learn')
                        .setDescription(':clock12: **Time** : `10:50-12:30`'
                        +'\n\n:books: **Subject** : `คณิตศาสตร์เพิ่มเติม`'
                        +'\n\n:teacher: **Teacher** : `คุณครูจีรนันท์ สีนอก`'
                        +'\n\n:link: **Link** : https://us02web.zoom.us/j/6365107396?pwd=RFI0UmcrQ0xib1FRNzNIdXNyK2FmUT09')
        await channel.send({embeds: [Embed]})
    },{
        scheduled: true,
        timezone: 'Asia/Bangkok'
    })

    cron.schedule('15 14 * * thu', async ()=>{
        const Embed = new MessageEmbed()
                        .setColor('RANDOM')
                        .setTitle(':alarm_clock: Plz learn')
                        .setDescription(':clock12: **Time** : `14:15-15:00`'
                        +'\n\n:books: **Subject** : `สังคม`'
                        +'\n\n:teacher: **Teacher** : `คุณครูหนึ่งฤทัย ทรัพย์พร้อม`'
                        +'\n\n:link: **Link** : https://us02web.zoom.us/j/6365107396?pwd=RFI0UmcrQ0xib1FRNzNIdXNyK2FmUT09')
        await channel.send({embeds: [Embed]})
    },{
        scheduled: true,
        timezone: 'Asia/Bangkok'
    })

    cron.schedule('25 15 * * thu', async ()=>{
        const Embed = new MessageEmbed()
                        .setColor('RANDOM')
                        .setTitle(':alarm_clock: Plz learn')
                        .setDescription(':clock12: **Time** : `15:25-17:00`'
                        +'\n\n:books: **Subject** : `เลือกเสรี`'
                        +'\n\n:teacher: **Teacher** : `คุณครูอดิศักดิ์ ศรีจันทร์`'
                        +'\n\n:link: **Link** : https://us02web.zoom.us/j/9504580269')
        await channel.send({embeds: [Embed]})
    },{
        scheduled: true,
        timezone: 'Asia/Bangkok'
    })

    //=======================| Friday |======================================

    cron.schedule('45 7 * * fri', async ()=>{
        const Embed = new MessageEmbed()
                        .setColor('RANDOM')
                        .setTitle(':alarm_clock: Plz learn')
                        .setDescription(':clock12: **Time** : `7:45-8:30`'
                        +'\n\n:books: **Subject** : `ดนตรี`'
                        +'\n\n:teacher: **Teacher** : `ม.ศิวนาท`'
                        +'\n\n:link: **Link** : ไม่แน่นอน')
        await channel.send({embeds: [Embed]})
    },{
        scheduled: true,
        timezone: 'Asia/Bangkok'
    })

    cron.schedule('0 10 * * fri', async ()=>{
        const Embed = new MessageEmbed()
                        .setColor('RANDOM')
                        .setTitle(':alarm_clock: Plz learn')
                        .setDescription(':clock12: **Time** : `10:00-10:50`'
                        +'\n\n:books: **Subject** : `วิทย์พื้นฐาน`'
                        +'\n\n:teacher: **Teacher** : `ม.โจม`'
                        +'\n\n:link: **Link** : https://us02web.zoom.us/j/6365107396')
        await channel.send({embeds: [Embed]})
    },{
        scheduled: true,
        timezone: 'Asia/Bangkok'
    })


    cron.schedule('50 10 * * fri', async ()=>{
        const Embed = new MessageEmbed()
                        .setColor('RANDOM')
                        .setTitle(':alarm_clock: Plz learn')
                        .setDescription(':clock12: **Time** : `10:50-12:30`'
                        +'\n\n:books: **Subject** : `ชีวะ`'
                        +'\n\n:teacher: **Teacher** : `ครูก้อย`'
                        +'\n\n:link: **Link** : https://us02web.zoom.us/j/6365107396')
         await channel.send({embeds: [Embed]})
    },{
        scheduled: true,
        timezone: 'Asia/Bangkok'
    })

    cron.schedule('30 13 * * fri', async ()=>{
        const Embed = new MessageEmbed()
                        .setColor('RANDOM')
                        .setTitle(':alarm_clock: Plz learn')
                        .setDescription(':clock12: **Time** : `13:30-14:15` '
                                            +'\n\n:books: **Subject** : `Math`'
                                            +'\n\n:teacher: **Teacher** : `Miss Ann`'
                                            +'\n\n:link: **Link** : https://us02web.zoom.us/j/2910068947')
        await channel.send({embeds: [Embed]})
    },{
        scheduled: true,
        timezone: 'Asia/Bangkok'
    })

    cron.schedule('15 14 * * fri', async ()=>{
        const Embed = new MessageEmbed()
                        .setColor('RANDOM')
                        .setTitle(':alarm_clock: Plz learn')
                        .setDescription(':clock12: **Time** : `14:15-15:00` '
                                            +'\n\n:books: **Subject** : `จีน`'
                                            +'\n\n:teacher: **Teacher** : `---------`'
                                            +'\n\n:link: **Link** : https://us02web.zoom.us/j/6365107396')
        await channel.send({embeds: [Embed]})
    },{
        scheduled: true,
        timezone: 'Asia/Bangkok'
    })

    cron.schedule('25 15 * * fri', async ()=>{
        const Embed = new MessageEmbed()
                        .setColor('RANDOM')
                        .setTitle(':alarm_clock: Plz learn')
                        .setDescription(':clock12: **Time** : `15:25-16:10`'
                        +'\n\n:books: **Subject** : `ออกแบบและเทคโนโลยี`'
                        +'\n\n:teacher: **Teacher** : `คุณครูมนตรี โมลิสกุลมงคล`'
                        +'\n\n:link: **Link** : https://us02web.zoom.us/j/6365107396?pwd=RFI0UmcrQ0xib1FRNzNIdXNyK2FmUT09'
                        + "\n\n:bookmark: **Classroom** : https://classroom.google.com/c/NDM0MzczMTA3NjE4")
        await channel.send({embeds: [Embed]})
    },{
        scheduled: true,
        timezone: 'Asia/Bangkok'
    })
// test
    // cron.schedule('0-59 * * * * *', async ()=>{
    //     await channel.send('Test')
    // },{
    //     scheduled: true,
    //     timezone: 'Asia/Bangkok'
    // })
// test

	},
};