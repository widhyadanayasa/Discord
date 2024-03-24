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
    .setApplicationId('1205700396430139393')
    .setType('PLAYING')
    .setURL('https://youtu.be/xvFZjo5PgG0?si=c8akPNtCj_52JNs8') //Must be a youtube video link 
    .setState('Playing Single Player')
    .setName('Grand Theft Auto VI')
    .setDetails(`Welcome To Vice City!`)
    .setStartTimestamp(Date.now())
 .setAssetsLargeImage('https://cdn.discordapp.com/attachments/1205721991685083166/1221271245459423363/images.png?ex=6611f87b&is=65ff837b&hm=6374d372d6d43211d51c06604e75ba60a416730c525f6599621865428a22164d&') //You can put links in tenor or discord and etc.
    .setAssetsLargeText('Grand Theft Auto VI') //Text when you hover the Large image
    .addButton('WhatsApp', 'https://chat.whatsapp.com/K6UduLp6GHqEY9x6m8lRiS')
    .addButton('YouTube', 'https://youtu.be/UieWIZvxLS4?si=v7LWULC7AgvYleYB');

  client.user.setActivity(r);
  client.user.setPresence({ status: "dnd" }); //dnd, online, idle, offline

  let prevTime = null;
  setInterval(() => {
    const newTime = formatTime();
    if (newTime !== prevTime) {
      const newDetails = `Welcome To Vice City!`;
      r.setDetails(newDetails);
      client.user.setActivity(r);
      prevTime = newTime;
    }
  }, 1000); // Update every second
});

const mySecret = process.env['TOKEN'];
client.login(mySecret);
