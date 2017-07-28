var Telegraf = require('telegraf');

var Telegram = function(){};

Telegram.prototype.startBot = function(rs){
  var bot = new Telegraf(process.env.BOT_TOKEN);
  bot.on('message', function(ctx){
    console.log("message", ctx.message.text);
    var reply = rs.reply(ctx.from.id, ctx.message.text);
    console.log("replay", reply);
    ctx.reply(reply);
  });
  bot.startPolling();
}

module.exports = Telegram;
