const discord = require("discord.js");
const bot = new discord.Client({ discordEveryone: true });
const fs = require("fs");
const { create } = require("domain");
const { version } = require("os");
const token = ""
const {vd} = "1.5" 

bot.on("ready", async () => {
    console.log('     ')
    console.log('     ')
    console.log('-------------------------------------------')
    console.log('         Discord bot is online');
    console.log(`         by SMLkaiellis08#0922`)

console.log('   ')
console.log(`  bot ID = ${bot.user.id}`)
console.log(`  bot version = 1.5`)
console.log(`  github link = https://github.com/SMLkaiellis08/discordbot`)
console.log(`  pc version = ${version}`)
console.log('   ')
})


bot.on('message', msg => {

    //login codes

if (msg.content === "7534") {
    msg.delete();
    msg.reply('thank you for logging in')
    msg.member.roles.add(`750430729636282440`);
}
if (msg.content === "7462") {
    msg.delete();
    msg.reply('thank you for logging in')
    msg.member.roles.add(`750430729636282440`);
}

    //commands

if (msg.content === "!!author") {
    msg.channel.send('author of this bot is named **SMLkaiellis08#0922**')
    }
if (msg.content === "!!info") {
    msg.channel.send('bot verson = 1.5')
    }
if (msg.content === "!!test") {
    msg.reply('if you can read this the bot is working')
    }
if (msg.content === "!!website") {
    msg.reply('https://bejewled-even-plane.glitch.me')
    
    }
if (msg.content === "!!versions") {
    msg.reply('*0.2')
    msg.reply('*0.5')
    msg.reply('*1.0')
    msg.reply('*1.2')
    msg.reply('1.5 version of this bot (open source)')
    }
if (msg.content === "!!bots") {
    msg.channel.send('bots maded by **SML**')
    msg.channel.send('steveDJ (music bot version 2.4)')
    msg.channel.send('mod-bot(a modbot for discord servers 1.5 beta)')
    msg.channel.send('server stats (0.1 alpha)')
    }
    if (msg.content === "!!TDF") {
        msg.channel.send(`${discord.TeamMember}`)
    }
    if (msg.content === "!!invite") {
        msg.channel.send('https://discord.com/api/oauth2/authorize?client_id=749998248235630632&permissions=0&redirect_uri=https%3A%2F%2Fdiscord.com%2Finvite%2FpD2Ubb2&response_type=code&scope=bot%20guilds%20guilds.join')
    }
        if (msg.content === "!!help") {
            msg.channel.send('commands are what work at this point of time are !!help,!!info,!!versions,!!update,and more')
        }
    }
)

module.exports.run = async (bot, message, args) => {
    if (message.member.hasPermission("ADMINISTRATOR")) {    //requires admin-privilige
        let messagecount = parseInt(args[0]);
        message.channel.fetchMessages({limit: 1}).then(messages => message.channel.bulkDelete(1));
        }

}
module.exports.help = {
name: "purge"
}

    module.exports.run = async (bot, message, args) => {
        if(!message.member.hasPermission("ADMINISTRATOR") )
                    return message.reply("sorry you do not have **role** ADMINISTRATOR to use that command");
    
                //check if there is a member and whether we can kick him
                // message.mentions.members is a collection of people that have been mentioned, as GuildMembers.
                let member = message.mentions.members.first();
                if(!member)
                return message.reply("");
                if(!member.kickable)
                return message.reply("");
    
                // slice(2) dismisses Command und @mention
                let reason = args.slice(2).join(' ');
                if(!reason)
              return message.reply("");
    
            await member.send(` ${message.author.tag} kicked ${user} for: ${reason}`);
    
            //and now we kick...
            member.kick(reason)
              .catch(error => message.reply(`Sorry ${message.author} konnte nicht kicken weil : ${error}`));
            message.reply(`${member.user.tag} wurde von ${message.author.tag} gekickt. Grund: ${reason}`);
    
    }
    module.exports.help = {
        name: "kick"
}
bot.login(token)