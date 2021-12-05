const fs = global.nodemodule["fs-extra"];
module.exports.config = {
  name: "goibot",
  version: "1.0.1",
  hasPermssion: 0,
  credits: "....",
  description: "goibot",
  commandCategory: "Noprefix",
  usages: "noprefix",
  cooldowns: 5,
};
module.exports.handleEvent = function({ api, event, args, Threads }) {
  var { threadID, messageID, reason } = event;
  const moment = require("moment-timezone");
  const time = moment.tz("Asia/Ho_Chi_minh").format("HH:MM:ss L");
  var idgr = `${event.threadID}`;

  var tl = ["Ch ngu người bạn tôi là bot", "Bạn kêu tôi có việc gì?", "Tôi yêu bạn vai lon", "Yêu em <3", "Hi, chào con vợ bé:3", "Vợ gọi có việc gì không?", "Sử dụng callad để liên lạc với admin!", "Em là bot cute nhất hành tinh", "Nói gì thế con lợn", "Em đây~~~~"];
  var rand = tl[Math.floor(Math.random() * tl.length)]

   if ((event.body.toLowerCase() == "yêu bot") || (event.body.toLowerCase() == "yeu bot")) {
    return api.sendMessage("Hmm... Bot ngại lắm thôi yêu admin của bot nhé :))", threadID);
  };

   if ((event.body.toLowerCase() == "bot ơi") ||  (event.body.toLowerCase() == "bot ơi")) {
    return api.sendMessage("Sủa lẹ, tao còn phải phục vụ các box khác nữa :)", threadID);
  };

  if ((event.body.toLowerCase() == "chửi cc") || (event.body.toLowerCase() == "chui cc")) {
    return api.sendMessage("Matday quá đi bạn à ><, cần tao chỉnh đốn mày lại ko :)", threadID);
  };
  
   if ((event.body.toLowerCase() == "bot có yêu em không") || (event.body.toLowerCase() == "bot yeu em khong")) {
    return api.sendMessage("Hi, Bot yêu em hơn cả ny em cơ, yêu bot đi <3", threadID);
  };

  if ((event.body.toLowerCase() == "chửi cmm") || (event.body.toLowerCase() == "chui cmm")) {
    return api.sendMessage("Bất hiếu cha sinh mẹ đẻ mà mày nói thế là hỏng người rồi", threadID);
  };

  if ((event.body.toLowerCase() == "hi") || (event.body.toLowerCase() == "hi")) {
    return api.sendMessage("Chào bạn yêu dấu, chúc bạn một ngày mới tốt lành ❤️", threadID);
  };

  if ((event.body.toLowerCase() == "hí") || (event.body.toLowerCase() == "hi")) {
    return api.sendMessage("Chào bạn yêu dấu, chúc bạn một ngày mới tốt lành ❤️", threadID);
  };

  if ((event.body.toLowerCase() == "chào") || (event.body.toLowerCase() == "chào")) {
    return api.sendMessage("Chào bạn yêu dấu, chúc bạn một ngày mới tốt lành ❤️", threadID);
  };

  if ((event.body.toLowerCase() == "hi mn") || (event.body.toLowerCase() == "hi mn")) {
    return api.sendMessage("Chào bạn yêu dấu, chúc bạn một ngày mới tốt lành ❤️", threadID);
  };

  if ((event.body.toLowerCase() == "hi mng") || (event.body.toLowerCase() == "hi mng")) {
    return api.sendMessage("Chào bạn yêu dấu, chúc bạn một ngày mới tốt lành ❤️", threadID);
  };

  if ((event.body.toLowerCase() == "hello") || (event.body.toLowerCase() == "hello")) {
    return api.sendMessage("Chào bạn yêu dấu, chúc bạn một ngày mới tốt lành ❤️", threadID);
  };

 if ((event.body.toLowerCase() == "bsvv nha mng") || (event.body.toLowerCase() == "bsvv nha mng")) {
    return api.sendMessage("Chào bạn yêu dấu, chúc bạn một ngày mới tốt lành ❤️", threadID);
  };

  if ((event.body.toLowerCase() == "bsvv nha mn") || (event.body.toLowerCase() == "bsvv nha mn")) {
    return api.sendMessage("Chào bạn yêu dấu, chúc bạn một ngày mới tốt lành ❤️", threadID);
  };

  if ((event.body.toLowerCase() == "btvv nha mng") || (event.body.toLowerCase() == "btvv nha mng")) {
    return api.sendMessage("Chào bạn yêu dấu, chúc bạn một ngày mới tốt lành ❤️", threadID);
  };

  if ((event.body.toLowerCase() == "hí ae") || (event.body.toLowerCase() == "hi ae")) {
    return api.sendMessage("Chào bạn yêu dấu, chúc bạn một ngày mới tốt lành ❤️", threadID);
  };

  if ((event.body.toLowerCase() == "hiii") || (event.body.toLowerCase() == "hiii")) {
    return api.sendMessage("Chào bạn yêu dấu, chúc bạn một ngày mới tốt lành ❤️", threadID);
  };

  if ((event.body.toLowerCase() == "btvv nha mn") || (event.body.toLowerCase() == "btvv nha mn")) {
    return api.sendMessage("Chào bạn yêu dấu, chúc bạn một ngày mới tốt lành ❤️", threadID);
  };

  if ((event.body.toLowerCase() == "chào cậu") || (event.body.toLowerCase() == "chao cau")) {
    return api.sendMessage("Hí chào bạn <3", threadID);
  };

  if ((event.body.toLowerCase() == "tt đi mng") || (event.body.toLowerCase() == "tt đi mng")) {
    return api.sendMessage("️1 là tương tác, 2 là ăn kick :))))", threadID);
  };

  if ((event.body.toLowerCase() == "tt đi nào mng") || (event.body.toLowerCase() == "tt di nao mng")) {
    return api.sendMessage("1 là tương tác, 2 là ăn kick :))))", threadID);
  };

  if ((event.body.toLowerCase() == "tt mng ơi") || (event.body.toLowerCase() == "tt mng oi")) {
    return api.sendMessage("1 là tương tác, 2 là ăn kick :))))", threadID);
  };

  if ((event.body.toLowerCase() == "nn nha mng") || (event.body.toLowerCase() == "nn nha mng")) {
    return api.sendMessage("Ngủ ngon ạ <3 Chúc mọi người mơ siêu đẹp <3", threadID);
  };

  if ((event.body.toLowerCase() == "tt đi mn") || (event.body.toLowerCase() == "tt đi mn")) {
    return api.sendMessage("1 là tương tác, 2 là ăn kick :))))", threadID);
  };

  if ((event.body.toLowerCase() == "flop quá") || (event.body.toLowerCase() == "flop qua")) {
    return api.sendMessage("1 là tương tác, 2 là ăn kick :))))", threadID);
  };

  if ((event.body.toLowerCase() == "bot dthw quá") || (event.body.toLowerCase() == "bot dthw qua")) {
    return api.sendMessage("Dạ quá khen ạ hihi :>", threadID);
  };

  if ((event.body.toLowerCase() == "ko ai thương t hết") || (event.body.toLowerCase() == "ko ai thuong t het")) {
    return api.sendMessage("Thôi ngoan nào bot thương bạn mà <3 <3 ", threadID);
  };

  if ((event.body.toLowerCase() == "bot có yêu admin bot không") || (event.body.toLowerCase() == "bot co yeu admin bot khong")) {
    return api.sendMessage("Có, yêu anh ấy nhất đừng hòng cướp của tôi", threadID);
  };

  if ((event.body.toLowerCase() == "bot có người yêu chưa") || (event.body.toLowerCase() == "bot co nguoi yeu chua")) {
    return api.sendMessage("Rồi ạ, là cậu đấy <3", threadID);
  };

  if ((event.body.toLowerCase() == "bot im đi") || (event.body.toLowerCase() == "bot im di")) {
    return api.sendMessage("Im cc :))) m bớt sủa lại hộ tao, nưng hay gì bảo t im :>>", threadID);
  };

  if ((event.body.toLowerCase() == "bot cút đi") || (event.body.toLowerCase() == "bot cut di")) {
    return api.sendMessage("Mày cút rồi bố mày cút, ko khiến mày lên tiếng :))))", threadID);
  };

  if ((event.body.toLowerCase() == "bot chửi cái lon gì") || (event.body.toLowerCase() == "bot chui cai lon gi")) {
    return api.sendMessage("Chửi mày đấy, nhục vãi hahaha :>>, còn hỏi", threadID);
  };

  if ((event.body.toLowerCase() == "bot có buồn ko") || (event.body.toLowerCase() == "bot co buon ko")) {
    return api.sendMessage("Có mọi người sao bé buồn đc <3 yêu lắm <3", threadID);
  };

  if ((event.body.toLowerCase() == "bot có yêu t ko") || (event.body.toLowerCase() == "bot co yeu t ko")) {
    return api.sendMessage("Dạ có yêu cậu và mọi người nhiều lắm", threadID);
  };

  if ((event.body.toLowerCase() == "bot đi ngủ đi") || (event.body.toLowerCase() == "bot di ngu di")) {
    return api.sendMessage("Tớ là bot, cậu là người nên cần đi ngủ nè <3", threadID);
  };

  if ((event.body.toLowerCase() == "bot ăn cơm chưa") || (event.body.toLowerCase() == "bot an com chua")) {
    return api.sendMessage("Mình nhìn cậu ăn là thấy no rồi <3", threadID);
  };

  if ((event.body.toLowerCase() == "bot có thương tui ko") || (event.body.toLowerCase() == "bot co thuong tui ko")) {
    return api.sendMessage("Có <3", threadID);
  };

  if ((event.body.toLowerCase() == "bot có thương t ko") || (event.body.toLowerCase() == "bot co thuong t ko")) {
    return api.sendMessage("Có <3", threadID);
  };

  if ((event.body.toLowerCase() == "bot làm thơ đi") ||  (event.body.toLowerCase() == "bot lam tho di")) {
    return api.sendMessage("Yêu cậu như một cực hình\nNhấp lên nhấp xuống hai mình cùng rên", threadID);
  };

  if ((event.body.toLowerCase() == "cc") ||  (event.body.toLowerCase() == "cc")) {
    return api.sendMessage("À ý mày bảo mày là chó á hả sủa đi tao nghe :)", threadID);
  };

  if (event.body.indexOf("bot") == 0 || (event.body.indexOf("Bot") == 0)) {
    var msg = {
      body: rand
    }
    return api.sendMessage(msg, threadID, messageID);
  };

}

module.exports.run = function({ api, event, client, __GLOBAL }) { }