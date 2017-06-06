// All Rights Reserved  © 2017 - 2018 - No Claiming it's yours!
const Discord = require('discord.js');
const bot = new Discord.Client();
const config = require('./config.json');


bot.on('ready', () => {
    bot.user.setGame(`${config.prefix}help for a list of commands | Currently in ${bot.guilds.size} Guilds! | ${bot.guilds.reduce((p, c) => p + c.memberCount, 0)} Users Connected!` , 'https://twitch.tv/boujeeyt'),
    setInterval(function(){bot.user.setGame(`${config.prefix}help for a list of commands | Currently in ${bot.guilds.size} Guilds! | ${bot.guilds.reduce((p, c) => p + c.memberCount, 0)} Users Connected!`, 'https://twitch.tv/boujeeyt')}, 1000);
});

bot.on('ready', () => {
  console.log(`Logged in as ${bot.user.username}! I am ready to use now :) Do ?help okay? Currently in ${bot.guilds.size} Guilds!`);
});

bot.on('guildMemberAdd', (member) => {
  console.log(`New User '${member.user.username}' has joined '${member.guild.name}'` );
  member.guild.defaultChannel.send(`**${member} has joined ${member.guild.name} ! Hope you have a great time here! :smile: :heart:**`);
});

bot.on('guildMemberRemove', member => {
let guild = member.guild;

guild.defaultChannel.send(`**Farewell ${member.user.username} ! You just left ${member.guild.name}. :wave: Hope you had fun! :heart:** `)
console.log(`${member.user.username} has left`);
});


bot.on('message', message => {
        var args = message.content.split(/[ ]+/);
        
if(message.content.startsWith(config.prefix + 'embed')) {
     if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply('**You Are Missing The Permissions Manage Messages! :no_entry_sign:**');
    if (message.author == bot.user) return;
message.channel.sendEmbed({ color: 3447003,
  description: args.join(" ").substring(6) });
}
});

bot.on('message', (message) => {
  // Exit and stop if it's not there
  if (!message.content.startsWith(config.prefix)) return;

  if (message.content.startsWith(config.prefix + 'ping')) {
    message.channel.send({embed: {
   color: 1978521,
   description: `Pong! :ping_pong: Took ${bot.ping} ms to reply.`
}});
  } else
  if (message.content.startsWith(config.prefix + 'donate')) {
    message.channel.send({embed: {
   color: 1978521,
   description: `**If you want to support Hanasaku Bot Click [me!](https://www.patreon.com/hanasaku) By donating it will help us get more commands and maybe music installed! :heart:**`
}});
  } else
  if (message.content.startsWith(config.prefix + 'invite')) {
    message.author.sendMessage('**My invite is: https://discordapp.com/oauth2/authorize?bot_id=318739301573591041&scope=bot&permissions=536083519**');
  } else
   if(message.content.startsWith(config.prefix + 'kick')) {
     if(message.author.bot) return;
    var user = message.mentions.users.first();
	var member = message.guild.member(user);
	var reason = message.content.split(' ').slice(2).join(' ');
	  let role = message.member.hasPermission('KICK_MEMBERS');
		if (!message.member.hasPermission('KICK_MEMBERS'))
		return message.channel.sendMessage("You don't have the permission Kick Members !");
	       if (!user)
		return message.channel.sendMessage('Who is the person that you will kick?');
	       if (!reason)
		return message.channel.sendMessage(`Why are you gonna kick ${user.username}`);
	       message.channel.sendMessage(`**${user.username}** got kicked by **${message.author.username}** for **${reason}**.`)
member.ban()
  } else
   if(message.content.startsWith(config.prefix + 'ban')) {
     if(message.author.bot) return;
    var user = message.mentions.users.first();
	var member = message.guild.member(user);
	var reason = message.content.split(' ').slice(2).join(' ');
	  let role = message.member.hasPermission('BAN_MEMBERS');
		if (!message.member.hasPermission('BAN_MEMBERS'))
		return message.channel.sendMessage("You don't have the permission Ban Members !");
	       if (!user)
		return message.channel.sendMessage('Who is the person that you will ban?');
	       if (!reason)
		return message.channel.sendMessage(`Why are you gonna ban ${user.username}`);
	       message.channel.sendMessage(`**${user.username}** got banned by **${message.author.username}** for **${reason}**.`)
member.ban()
}
if (message.content.startsWith(config.prefix + 'help')) {
message.channel.send({embed: {
    color: 3447003,
    author: {
      name: bot.user.username,
      icon_url: bot.user.avatarURL
    },
    title: 'Our Discord Support Server',
    url: 'https://discord.gg/PszJr6p',
    description: 'Hanasaku is in development for more commands! :heart:',
    fields: [{
        name: `${config.prefix}help`,
        value: 'Shows this message'
      },
      {
        name: `${config.prefix}invite`,
        value: 'Send the [invite](https://discordapp.com/oauth2/authorize?bot_id=318739301573591041&scope=bot&permissions=536083519) for Hanasaku.'
      },
      {
        name: `${config.prefix}ping`,
        value: 'Pong!'
      },
      {
        name: `${config.prefix}permshelp`,
        value: 'Shows the help message for the commands that includes permissions.'
      },
      {
        name: `${config.prefix}donate`,
        value: 'Support Hanasaku Bot.'
      }
    ],
    timestamp: new Date(),
    footer: {
      icon_url: bot.user.avatarURL,
      text: '© Hanasaku Discord Bot'
    }
  }
});
  } else
if (message.content.startsWith(config.prefix + 'permshelp')) {
message.channel.send({embed: {
    color: 3447003,
    author: {
      name: bot.user.username,
      icon_url: bot.user.avatarURL
    },
    title: 'Our Discord Support Server',
    url: 'https://discord.gg/PszJr6p',
    description: 'Hanasaku is in development for more commands! :heart:',
    fields: [{
        name: `${config.prefix}permshelp`,
        value: 'Shows this message'
      },
      {
        name: `${config.prefix}ban`,
        value: 'Bans the user mentioned! Usage: ?ban @user reason'
      },
      {
        name: `${config.prefix}kick`,
        value: 'Kick the user mentioned! Usage: ?kick @user reason'
      },
      {
        name: `${config.prefix}embed`,
        value: 'Makes the message in embed!'
     }
    ],
    timestamp: new Date(),
    footer: {
      icon_url: bot.user.avatarURL,
      text: '© Hanasaku Discord Bot'
    }
  }
});
  } else
if (message.content.startsWith(config.prefix + 'shutdown')) {
if(message.author.id != "YOUR ID") return;
message.channel.send(`**Finally some rest! Thanks ${message.author.username} for shutting me down. :smile: :wave:**`).then(() => process.exit(42)) 
  } else
if(message.content.startsWith(config.prefix + "rename")) {
if(message.author.id != "YOUR ID") return;
    var username = message.content.split(" ").slice(1).join("_");
    bot.user.setUsername(username);
    message.channel.sendMessage(`Renamed myself to **${username}** commanded by ${message.author.username}.`).catch(console.error);
    message.delete().catch(console.error);
}
});
bot.login(config.token);

// Made by 보지 | Boujee#6164
