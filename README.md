# Hanasaku Discord Bot
Hanasaku Public Release Coded in Discord.js ! Basic commands in embed. Even Music!

## Make your Own Bot!
To start off here, we need you to make your own discord bot!
To do that, create a discord application by going [here](https://discordapp.com/developers/applications/me/create)
Once you've created your own application, click the button ```Create a Bot User``` and get your bot token and you're done!

## Installation
Linux is the only installation.
Available Version: CentOS 7 64 bit

On your Linux VPS do ```mkdir mybot && cd mybot``` after that you'll be in a folder called mybot.
After doing that install discord.js by typing ```npm install discord.js```
For sound support add ```npm install opusscript``` (ez mode) or ```npm install node-opus``` (better performance but requires ```python 2.7.x and build-essential)```. BOTH these options require ffmpeg to run on your system, installed through ```sudo apt-get install ffmpeg```
Install the bot to the folder by doing ```git clone git@github.com:bouleytator/hanasaku.git```

Once you've done that you can finally install discord.js music by typing ```npm install discord.js-music-v11```
Now you can clone the bot to your vps!
After that you're all set.
You can now run her by typing ```node mybot``` or ```node mybot.js``` . Thank you for installing Hanasaku!
Also the default prefix for music is ```!``` if you want a tutorial on how to change it please join our Discord Group Chat by click [me!](https://discord.gg/PszJr6p) . And you must be a donator. Minimum donation amount is $2.50 so i can tell you how to improve your bot! Thank you :)
You can donate [here](https://paypal.me/agarcellsthegame) .


## Make your own Command!
**Since we already have a prefix on config.prefix we will show you a much easier way to do it!
Let's say you want a fun command like a reply command! Here's an example.**
```javascript
  if (message.content.startsWith(config.prefix + 'hello')) {
    message.channel.send('Hi!');
  }
});
```
**If you want to make 2 commands with it, add } else. Here's an example.**
```javascript
client.on('message', (message) => {
  if (!message.content.startsWith(config.prefix) || message.author.bot) return;

  if (message.content.startsWith(config.prefix + 'hello')) {
    message.channel.send('Hi!');
  } else
  if (message.content.startsWith(config.prefix + 'sup')) {
    message.channel.send('Sup!');
  }
});
```
**And so you're all set! Thank you :)**

**Take note that `client.on('message', (message) => {` must only be at the beggining of the commands. At the top. Like the example there, if you want to add more commands just remove ` } }); ` and change it to ` } else ` and you can add ` } });` to the last part of the command that you added.**

## Updates
**No Updates yet to be Announced!**

## Features
**Our bot mentions users even if they leave/join !**
**Supporting Discord.js**

## Versions
**Currently at Version 1.1**

## Contacts
***Join our Discord Support Chat*** [**HERE**](https://discord.gg/PszJr6p)
