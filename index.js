const Discord = require('discord.js');
const client = new Discord.Client();
const config = require('./config.json');
const fs = require('fs');

client.on("ready", () => {
  console.log("Ativado.");
   let gameloop = require('./comando_dono/loop.js'); // Ativaidae de status!!!!!!!!!!
    gameloop.run(client);
})

client.on('message', message =>{
  if(message.content.includes("https://discord.gg/")){
  if (!message.member.hasPermission("ADMINISTRATOR")) return; 
    message.delete()
    message.channel.send(`${message.author}, não divulgue links de outros servidores!`)
  }
})


client.on('message', message =>{
  if(message.content.includes("https://discord.me/")){
  if (!message.member.hasPermission("ADMINISTRATOR")) return; 
    message.delete()
    message.channel.send(`${message.author}, não divulgue links de outros servidores!`)
  }
})

client.on('message', message =>{
  if(message.content.includes("https://youtu.be/")){
  if (!message.member.hasPermission("ADMINISTRATOR ")) return; 
    message.delete()
    message.channel.send(`${message.author}, não divulgue links de outros servidores!`)
  }
})

client.on('message', message =>{
  if(message.content.includes("https://youtube.com/")){
  if (!message.member.hasPermission("ADMINISTRATOR")) return; 
    message.delete()
    message.channel.send(`${message.author}, não divulgue links de outros servidores!`)
  }
})

client.on("guildMemberAdd", member => {
  const embed = new Discord.RichEmbed()
  .setTitle("**PT CUSTOMS**")
  .setColor("#4bf221")
  .setDescription("\n \nSeja bem-vindo ao servidor ${member}!\n \n`Esperamos que se divirta!\n\n:white_small_square: Leia as <#677307707082145792> para evitar ser punido! \n \n `Obrigado por entrar no servidor e espero que se divirta ! 😄\n\n<:ceta:493180007267696645> Agora temos **${member.guild.memberCount}** membros no Discord!`")

  .setTimestamp()
  .setFooter(`iDetect - BOT`, "https://cdn.discordapp.com/emojis/460264772869554176.gif")

member.send(embed)
});

client.on('message', message =>{
  if(message.content.includes("https://discord.gg/")){
  if (!message.member.hasPermission("ADMINISTRATOR")) return; 
    message.delete()
    message.channel.send(`${message.author}, não divulgue links de outros servidores!`)
  }
})


client.on('message', message =>{
  if(message.content.includes("https://discord.me/")){
  if (!message.member.hasPermission("ADMINISTRATOR")) return; 
    message.delete()
    message.channel.send(`${message.author}, não divulgue links de outros servidores!`)
  }
})

client.on('message', message =>{
  if(message.content.includes("https://youtu.be/")){
  if (!message.member.hasPermission("ADMINISTRATOR ")) return; 
    message.delete()
    message.channel.send(`${message.author}, não divulgue links de outros servidores!`)
  }
})

client.on('message', message =>{
  if(message.content.includes("https://youtube.com/")){
  if (!message.member.hasPermission("ADMINISTRATOR")) return; 
    message.delete()
    message.channel.send(`${message.author}, não divulgue links de outros servidores!`)
  }
})



    client.on("guildMemberAdd", member => {
      if(member.guild.id == "677278788979261440"){
          const channel = member.guild.channels.get("697977783208509490");
          channel.setName(`👤| Members: ${member.guild.memberCount - member.guild.members.filter(m=>m.user.bot).size}`)
      }
  });
  
  
  client.on("guildMemberRemove", member => {
      if(member.guild.id == "677278788979261440"){
          const channel = member.guild.channels.get("697977783208509490");
          channel.setName(`👤| Members: ${member.guild.memberCount - member.guild.members.filter(m=>m.user.bot).size}`)
      }
	  
	 
	  
  });
;

 
client.on("message", message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(config.prefix)) return;
 
  let command = message.content.split(" ")[0];
  command = command.slice(config.prefix.length);
 
  let args = message.content.split(" ").slice(1);
  // The list of if/else is replaced with those simple 2 lines:
 
  try {
    let commandFile = require(`./commands/${command}.js`);
    commandFile.run(client, message, args);
  } catch (err) {
    console.error(err);
  }
 
});
 
client.login(process.env.TOKEN_BOT)
