const Discord = require('discord.js');
const music = require('discord.js-music-v11');
const client = new Discord.Client();
const config = require('./config.json');


client.on('ready', () => {
    client.user.setGame(`!help for help commands. Currently in ${client.guilds.size} Guilds! | ${client.guilds.reduce((p, c) => p + c.memberCount, 0)} Users`)
    setInterval(function(){client.user.setGame(`?help for help commands. Currently in ${client.guilds.size} Guilds! | ${client.guilds.reduce((p, c) => p + c.memberCount, 0)} Users`)}, 300000);
});

client.on('ready', () => {
  console.log('Logged in as ${client.user.username}! I am ready to use now :) Do ?help okay?');
});

client.on('guildMemberAdd', (member) => {
  console.log(`New User '${member.user.username}' has joined '${member.guild.name}'` );
  member.guild.defaultChannel.send(`**${member} has joined ${member.guild.name} ! Hope you have a great time here! :smile: :heart:**`);
});

client.on('guildMemberRemove', member => {
let guild = member.guild;

guild.defaultChannel.send(`**Farewell ${member.user} ! You just left ${member.guild.name}. :wave: Hope you had fun! :heart:** `)
console.log(`${member.user.username} has left`);
});

client.on('message', message => {
        var args = message.content.split(/[ ]+/);
        
if(message.content.startsWith(config.prefix + 'embed')) {
     if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply('**You Are Missing The Permissions Manage Messages! :no_entry_sign:**');
    if (message.author == client.user) return;
message.channel.sendEmbed({ color: 3447003,
  description: args.join(" ").substring(6) });
}
});

client.on('message', (message) => {
  // Exit and stop if it's not there
  if (!message.content.startsWith(config.prefix)) return;

  if (message.content.startsWith(config.prefix + 'ping')) {
    message.channel.send({embed: {
   color: 1978521,
   description: `Pong! :ping_pong: Took ${Math.floor(client.ping)} ms to reply.`
}});
  } else
  if (message.content.startsWith(config.prefix + 'donate')) {
    message.channel.send({embed: {
   color: 1978521,
   description: `**If you want to support Hanasaku Bot Click [me!](httpS://paypal.me/OmegaLGD) By donating it will help us get more commands and maybe music installed! :heart:**`
}});
  } else
  if (message.content.startsWith(config.prefix + 'invite')) {
    message.author.sendMessage('**My invite is: https://discordapp.com/oauth2/authorize?client_id=318739301573591041&scope=bot&permissions=536083519**');
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
      name: client.user.username,
      icon_url: client.user.avatarURL
    },
    title: 'Our Discord Support Server',
    url: 'https://discord.gg/PszJr6p',
    description: 'Hanasaku is in development for more commands! :heart:',
    fields: [{
        name: 'yourprefixhelp',
        value: 'Shows this message'
      },
      {
        name: 'yourprefixinvite',
        value: 'Send the [invite](https://discordapp.com/oauth2/authorize?client_id=318739301573591041&scope=bot&permissions=536083519) for Hanasaku.'
      },
      {
        name: 'yourprefixping',
        value: 'Pong!'
      },
      {
        name: 'yourprefixpermshelp',
        value: 'Shows the help message for the commands that includes permissions.'
      },
      {
        name: 'yourprefixdonate',
        value: 'Support Hanasaku Bot.'
      },
      {
        name: 'yourprefixmusichelp',
        value: 'Shows the help message for music.'
      }
    ],
    timestamp: new Date(),
    footer: {
      icon_url: client.user.avatarURL,
      text: '© Hanasaku Discord Bot'
    }
  }
});
  } else
if (message.content.startsWith(config.prefix + 'permshelp')) {
message.author.sendMessage({embed: {
    color: 3447003,
    author: {
      name: client.user.username,
      icon_url: client.user.avatarURL
    },
    title: 'Our Discord Support Server',
    url: 'https://discord.gg/PszJr6p',
    description: 'Hanasaku is in development for more commands! :heart:',
    fields: [{
        name: 'yourprefixpermshelp',
        value: 'Shows this message'
      },
      {
        name: 'yourprefixban',
        value: 'Bans the user mentioned! Usage: ?ban @user reason'
      },
      {
        name: 'yourprefixkick',
        value: 'Kick the user mentioned! Usage: ?kick @user reason'
      },
      {
        name: 'yourprefixembed',
        value: 'Makes the message in embed!'
     }
    ],
    timestamp: new Date(),
    footer: {
      icon_url: client.user.avatarURL,
      text: '© Hanasaku Discord Bot'
    }
  }
});
  } else
if (message.content.startsWith(config.prefix + 'musichelp')) {
message.author.sendMessage({embed: {
    color: 3447003,
    author: {
      name: client.user.username,
      icon_url: client.user.avatarURL
    },
    title: 'Our Discord Support Server',
    url: 'https://discord.gg/PszJr6p',
    description: 'Hanasaku is in development for more commands! :heart: Default Music Prefix: `!` ',
    fields: [{
        name: '!play',
        value: 'Play a video/music. It can take a URL from various services '
      },
      {
        name: '!skip',
        value: 'Skip some number of songs. Will skip 1 song if a number is not specified.'
      },
      {
        name: '!queue',
        value: 'Display the current queue.'
      },
      {
        name: '!pause',
        value: 'Pauses the song the song that is playing.'
      },
      {
        name: '!resume',
        value: 'Resumes the song you paused.'
      },
      {
        name: '!volume',
        value: 'Adjusts the volume from 1 to 200'
      },
      {
        name: '!leave',
        value: 'Clears the song queue and leaves the channel.'
      },
      {
        name: '!clearqueue',
        value: 'Clears the song queue'
     }
    ],
    timestamp: new Date(),
    footer: {
      icon_url: client.user.avatarURL,
      text: '© Hanasaku Discord Bot'
    }
  }
});
  } else
if (message.content.startsWith(config.prefix + 'shutdown')) {
if(message.author.id != "209586491024867329") return;
message.channel.send(`**Finally some rest! Thanks ${message.author.username} for shutting me down. :smile: :wave:**`).then(() => process.exit(42)) 
  } else
if(message.content.startsWith(config.prefix + "rename")) {
if(message.author.id != "209586491024867329") return;
    var username = message.content.split(" ").slice(1).join("_");
    client.user.setUsername(username);
    message.channel.sendMessage(`Renamed myself to **${username}** commanded by ${message.author.username}.`).catch(console.error);
    message.delete().catch(console.error);
}
});
music(client);
client.login(config.token);

