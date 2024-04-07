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
    .setState('Solo Leveling')
    .setName('Watching Solo Leveling')
    .setDetails(`Bstation`)
    .setStartTimestamp(Date.now())
 .setAssetsLargeImage('https://cdn.discordapp.com/attachments/1205721991685083166/1222338515199721473/nug7F0n-jWMpAWLaU7Qi1kuTIYjrAtUJmZd5FW4mEyspYR7-zGa-3_fwnYkPgyzHozE3.png?ex=6615da73&is=66036573&hm=4d8f2fcee2c84952bc8f6619b0799e5e8c953563fb7c3242dfa761597bb9c2b7&') //You can put links in tenor or discord and etc.
    .setAssetsLargeText('Solo Leveling') //Text when you hover the Large image
    .addButton('WhatsApp', 'https://chat.whatsapp.com/K6UduLp6GHqEY9x6m8lRiS')
    .addButton('YouTube', 'https://youtu.be/UieWIZvxLS4?si=v7LWULC7AgvYleYB');

  client.user.setActivity(r);
  client.user.setPresence({ status: "dnd" }); //dnd, online, idle, offline

  let prevTime = null;
  setInterval(() => {
    const newTime = formatTime();
    if (newTime !== prevTime) {
      const newDetails = `Bstation`;
      r.setDetails(newDetails);
      client.user.setActivity(r);
      prevTime = newTime;
    }
  }, 1000); // Update every second
});

const mySecret = process.env['TOKEN'];
client.login(mySecret);
