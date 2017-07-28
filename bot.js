var RiveScript = require('rivescript');
var Telegram = require('./platform/telegram');

var Bot = function(platform){
  this.platform = platform;
};

Bot.prototype.start = function(){
  var _self = this;
  var rs = new RiveScript();
  rs.loadDirectory('./brain', function(){
    rs.sortReplies();

    if(_self.platform == 'telegram'){
      var telegram = new Telegram();
      telegram.startBot(rs);
    }
    else{
      console.error("Unknown Platform.")
      exit(255);
    }
  });
}

module.exports = Bot;
