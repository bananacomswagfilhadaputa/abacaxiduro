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

client.on('guildMemberAdd', member => {
  const randomColor = "#000000".replace(/0/g, function () { return (~~(Math.random() * 16)).toString(16); });

  let canal = member.guild.channels.find(r => r.name === '👋🏻welcome');
  if (!canal) return;

  var embed = new Discord.RichEmbed()
  .setColor(`#36393F`)
  .setDescription(`Seja bem-vindo ao servidor ${member}!\nEsperamos que se divirta!\n\n:white_small_square: Leia as <#493144191673565195> para evitar ser punido!\n:white_small_square: Visite o chat <#677464821041725441> para interagir com os membros.\n\n<:ceta:493180007267696645> Agora temos **${member.guild.memberCount}** membros no Discord!`)
  .setThumbnail(member.user.avatarURL)
  .setTimestamp()
  canal.send({embed : embed})
  message.react("❤")
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
