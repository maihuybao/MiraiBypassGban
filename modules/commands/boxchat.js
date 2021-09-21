module.exports.config = {
    name: "boxchat",
    version: "0.0.1-beta",
    hasPermssion: 0,
    credits: "Lợi",
    description: "Các tag của box: info, id, emoji, name",
    commandCategory: "Box",
    usages: "boxin4",
    cooldowns: 5,
    
};
module.exports.run = async ({ event, api, args, client, Currencies, Users, utils, __GLOBAL, reminder }) => {    
const request = require('request')
const fs = require('fs')
var input=args[0]
  if (!input==""){api.sendMessage("Các tag của box: info, id, list, emoji, img, name, poll")}    
  if (input=="info"){
    let threadInfo = (await api.getThreadInfo(event.threadID));
    let sex = threadInfo.approvalMode;
  var pd = sex == false ? "Đang tắt" : sex == true ? "Đang bật" : "Không phải Thread";
var name = threadInfo.name;
            let countMess = threadInfo.messageCount;
let num = threadInfo.adminIDs.length;
var boy = [];
    var nu = [];
    for (let i in threadInfo.userInfo) {
        var gei = threadInfo.userInfo[i].gender;
            var emoji = threadInfo.emoji;
        if(gei == "MALE"){boy.push(i)}
        else if(gei == "FEMALE"){nu.push(i)}
    }
  var callback = () => api.sendMessage({body:`🏷Tên box: ${name} \n🧩TID: ${event.threadID}\n💸Emoji: ${emoji}\n📩Số tin nhắn: ${countMess}\n👻Admin: ${num}\n🐸Số thành viên: ${threadInfo.participantIDs.length}\n👩🏻‍🦰Nam: ${boy.length}\n👨🏻Nữ: ${nu.length}\nPhê duyệt nhóm: ${pd}`,attachment: fs.createReadStream(__dirname + "/cache/2.png")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/2.png"));
    return request(encodeURI(`${threadInfo.imageSrc}`)).pipe(fs.createWriteStream(__dirname+'/cache/2.png')).on('close',() => callback());
    }
if (input=="id"){       
    return api.sendMessage(`${event.threadID}`, event.threadID, event.messageID);
    }
if (input=="emoji"){
    var emoji = args[0];
     api.changeThreadEmoji(`${args[1]}`, event.threadID, event.messagaID);
}

if (input=="name"){
    var name = args.join('').slice(4)
    return api.setTitle(``, event.threadID, event.messagaID);
}
    }