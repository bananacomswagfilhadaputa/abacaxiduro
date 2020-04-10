const Discord = require("discord.js");

module.exports.run = async (client) =>{


    const sleep = time => new Promise(resolve => {
        setTimeout(resolve, time)
    })
    var i;
    console.log("")
    console.log("Loop no status do BOT ativo!");
    console.log(" ");

    for (i=0; i<10;){
        
        client.user.setPresence({ game: { name: `@bigbotdp on IG`, url: "https://www.twitch.tv/bigbotdp", type: 1} });
        await sleep(60000)
        client.user.setPresence({ game: { name: "Jogando Custom Games", type: 0 } });
        await sleep(60000)
        client.user.setPresence({ game: { name: `Divirta-se me nosso discord!`, type: 3} });
        await sleep(60000)
        client.user.setPresence({ game: { name: `@robertoonlinear on IG`, url: "https://www.twitch.tv/BIGBOTDP", type: 2} });
        await sleep(60000)
        client.user.setPresence({ game: { name: `Esperamos que se divirta!`, url: "https://www.twitch.tv/BIGBOTDP", type: 3} });
       
    }
   

}
