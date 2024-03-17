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
    timeZone: 'America/New_York', //https://www.zeitverschiebung.net/en/ and find your city and enter here
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
    .setDetails(`THE NAME IT SHOWS YOUR STREAMING [${formatTime()}]`)
    .setStartTimestamp(Date.now())
 .setAssetsLargeImage('https://cdn.discordapp.com/attachments/1204064214520561734/1205704013488857198/IMG_20240210_093659.jpg?ex=65d9565d&is=65c6e15d&hm=a5410ae34d8797a23351b44e656a7e33ee8d559ca61f3d82bf22807e039b8e19&') //You can put links in tenor or discord and etc.
    .setAssetsLargeText('Large Text') //Text when you hover the Large image
    .setAssetsSmallImage('https://cdn.discordapp.com/attachments/1118637575964471347/1165315477002784768/gta-v-cover-wallpaper-screenshot.jpg?ex=6546679c&is=6533f29c&hm=4c0b1e0a37d76094ab8fec65eef74f56fd50f35b025feb1a8b98a2c88d1bf3f2&') //You can put links in tenor or discord and etc.
    .setAssetsSmallText('Small Text') //Text when you hover the Small image
    .addButton('WhatsApp', 'https://chat.whatsapp.com/K6UduLp6GHqEY9x6m8lRiS')
    .addButton('Discord', 'https://chat.whatsapp.com/K6UduLp6GHqEY9x6m8lRiS');

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