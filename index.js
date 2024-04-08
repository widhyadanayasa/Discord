const Discord = require('discord.js-selfbot-v13');
const client = new Discord.Client({
  readyStatus: false,
  checkUpdate: false
});

const keepAlive = require('./server.js');
keepAlive();

function formatTime() { //Credits to himika#0001 and never#0001
  const date = new Date();
  const options = {
    timeZone: 'Asia/Jakarta', //https://www.zeitverschiebung.net/en/ and find your city and enter here
    hour12: true,
    hour: 'numeric',
    minute: 'numeric'
  };
  return new Intl.DateTimeFormat('en-US', options).format(date);
}

client.on('ready', async () => {
  console.clear();
  console.log(`${client.user.tag} - rich presence started!`);

  const r = new Discord.RichPresence()
    .setApplicationId('1118827992983031898')
    .setType('PLAYING')
    .setURL('https://youtu.be/xvFZjo5PgG0?si=c8akPNtCj_52JNs8') //Must be a youtube video link 
    .setState('Comedy, Romance')
    .setName('Tokidoki Bosotto Russia-go de Dereru Tonari no Alya-san')
    .setDetails(`Summer 2024`)
    .setStartTimestamp(Date.now())
 .setAssetsLargeImage('https://media.discordapp.net/attachments/1205721991685083166/1226559996943401171/Tokidoki_Bosotto_Russia-go_de_Dereru_Tonari_no_Alya-san.jpg?ex=66253603&is=6612c103&hm=024f406062f5a6ca9c08650e6175c2d72f60375fa168f31164da041638fdf0d2&=&format=webp') //You can put links in tenor or discord and etc.
    .setAssetsLargeText('Tokidoki Bosotto Russia-go de Dereru Tonari no Alya-san') //Text when you hover the Large image
    .addButton('MyAnimeList', 'https://myanimelist.net/anime/54744/Tokidoki_Bosotto_Russia-go_de_Dereru_Tonari_no_Alya-san')
    .addButton('LightNovel', 'https://zerokaito.blogspot.com/2021/03/tokidoki-bosotto-roshia-go-de-dereru.html');

  client.user.setActivity(r);
  client.user.setPresence({ status: "dnd" }); //dnd, online, idle, offline

  let prevTime = null;
  setInterval(() => {
    const newTime = formatTime();
    if (newTime !== prevTime) {
      const newDetails = `Summer 2024`;
      r.setDetails(newDetails);
      client.user.setActivity(r);
      prevTime = newTime;
    }
  }, 1000); // Update every second
});

const mySecret = process.env['TOKEN'];
client.login(mySecret);
