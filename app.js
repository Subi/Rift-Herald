const Discord = require('discord.js');
const bot  = new Discord.Client();
bot.login('NTM5Mjg4NTU0NDUxMjM4OTIz.DzAMXg.l8mZFH8hJh_bI2nafWaCd9lUYaE');


bot.on('ready', () => {
    console.log('I am running');
});

bot.on('message', message => {
    if (!message.guild) return;
    if (message.content.startsWith('!kick')) {
        const user = message.mentions.users.first();
        if (user) {
            const member = message.guild.member(user);
            if (member) {
                member.kick().then(() => {
                    message.reply(`${member}, has been removed`);
                }).catch(err => {
                    message.reply('Unable to kick the member!');
                    console.error(err);
                });
            } else {
                message.reply('That user isn\'t in this guild ');
            }
        } else {
            message.reply('Please mention a correct user  to kick!');
        }
    }
}); 


bot.on('message', msg => {
    let prefix = '!',
    addrole = 'addrole',
    removerole = 'removerole';

    if(msg.content.toLowerCase().startsWith(prefix + addrole)) {
        let args = msg.content.split(" ");
        if(args.length < 2 || args.length > 2) {
            msg.channel.send("Please request an available role");
        }
        if(args[1] === 'adc' || args[1] === 'mid' || args[1] === 'support' || args[1] === 'jungle' || args[1] === 'top') {
            let role = msg.guild.roles.find(role => role.name === args[1].toUpperCase());
            msg.member.addRole(role)
            msg.channel.send(`${role} role has been succesfully added`)
        }
    } else if(msg.content.toLowerCase().startsWith(prefix + removerole)) {
        let args = msg.content.split(" ");
        if(args.length < 2 || args.length > 2) {
            msg.channel.send("Please request an available role");
        }
        if(args[1] === 'adc' || args[1] === 'mid' || args[1] === 'support' || args[1] === 'jungle' || args[1] === 'top') {
            let role = msg.guild.roles.find(role => role.name === args[1].toUpperCase());
            msg.member.removeRole(role)
            msg.channel.send(`${role} role has been succesfully removed`);
        }
    }
});




bot.on('guildMemberAdd', member => {
    const memberRole = member.guild.roles.find(role => role.name === 'Summoner');
    const channel = member.guild.channels.find(ch => ch.name === 'welcome');
    if(!channel) return;
        channel.send(`Welcome to the server, ${member}`);
    member.addRole(memberRole);
});




    

