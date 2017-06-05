# Hanasaku Discord Bot
Hanasaku Public Release Coded in Discord.js ! Basic commands in embed. Music is not available yet for Public Release Hanasaku! Only Private Hanasaku.

# Make your Own Bot!
To start off here, we need you to make your own discord bot!
To do that, create a discord application by going [here](https://discordapp.com/developers/applications/me/create)
Once you've created your own application, click the button ```Create a Bot User``` and get your bot token and you're done!

## Installation
### Windows Version
**Make a folder name it anything you want, i named mine hanasaku. Once you made your folder, open up your Terminal A.K.A CMD and type `cd/path/to/your/discordbot/folder` . Now that you did that, install Python 2.7. by typing on the Terminal A.K.A CMD `npm install --save discord.js`. ( The Bot Folder Location )  Now that you installed both Python And Visual Studio and Discord.js you're ready to go! Type on your CMD ( The Bot Folder Location ) `git clone git@github.com:bouleytator/hanasaku.git` . Once you've done that, you will see a file called " app.js " and " config.json ". You can change some stuff on the app.js like the Help Command, but make sure you give us a shoutout :) . Now on the file " config.json " . You will see there 3 settings, Token , Prefix and OwnerID. Here's how the setup is. WARNING: DON'T CLOSE YOUR CMD!

```javascript
{
  "token": "Place_Your_Bot_Token_Here",
  "prefix": "Place_Your_Bot_Token_Here",
  "ownerID": "Place_Your_ID_Here" 
}
```
Here's a guide on how to make your own Bot User! ------> [Click Me!](https://github.com/reactiflux/discord-irc/wiki/Creating-a-discord-bot-&-getting-a-token) <------
Now that you're all set up, go back to your CMD and type `node app.js` or `node app` . And it will start your Bot!
Take Note: Music is Not Available for Hanasaku Public Release! If you want to have Music, go and support us [here!](https://www.patreon.com/hanasaku) and join our [Discord Chat](https://discord.gg/gk2dJA)**

### Linux
**Actually, it's almost the same :/ **

# Commands

## Make your own Command!
### Single Command
**Since we already have a prefix on config.prefix we will show you a much easier way to do it!
Let's say you want a fun command like a reply command! Here's an example.**
```javascript
  if (message.content.startsWith(config.prefix + 'hello')) {
    message.channel.send('Hi!');
  }
});
```
### Double Commands
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

# Information and Tips

## Take note that 
**`client.on('message', (message) => {` must only be at the beggining of the commands. At the top. Like the example there, if you want to add more commands just remove ` } }); ` and change it to ` } else ` and you can add ` } });` to the last part of the command that you added.**

## Information
**Take not that when you're going to use `${}` eg: `${bot.ping}` use Backticks ``` ` ```**
 
## Updates
**Renamed mybot.js to app.js!**
**Changed `const client = new Discord.Client();` to `const bot = new Discord.Client();`**
**Removed Mention when users leave!**

## Features
**Fast Response Bot.**
**Supporting Discord.js**

## Versions
**Finished Version 1.0
Finished Version 1.1
Finished Version 1.2**
__**Currently at Version 2.0**__

## Next Version
**Next Version will be 2.1**

## Contacts
***Join our Discord Support Chat*** [**HERE**](https://discord.gg/PszJr6p)
