const Discord = require('discord.js');
const bot = new Discord.Client();

const token = "<token>";

bot.on('ready', () =>{
    console.log('The Machine Spirit is online!');
});

bot.on('message', msg =>{
    if(msg.content === "HELLO"){
        msg.reply('HELLO FRIEND!');
    }
})

bot.login(token);