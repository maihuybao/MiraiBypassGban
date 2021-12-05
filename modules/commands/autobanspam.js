var fs = require("fs");
var path = require("path");
var commands =[];
var threadTimestamp = {};

var times = 15; // sửa này
var sec = 60000; // sửa này
var spammessage = '⚡️Nhóm đã bị ban <(")'; // sửa này
var reason = `⚡️Nhóm đã spam quá ${times} câu lệnh trong ${sec/1000} giây!\n⚡️Vui lòng liên hệ Admin "https://www.facebook.com/profile.php?id=100068126861379" để được ân xá`; // sửa này
var admintext = `⚡️Nhóm {0} đã ăn ban vì spam quá liều !!`; // sửa này

module.exports.config = {
	name: "banspam",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "Long LTD",
	description: "ngu thì ăn ban",
	commandCategory: "Admin",
	usages: "ban boxchat spam",
	cooldowns: 5
};
module.exports.onLoad = async function () {
	var files = fs.readdirSync(path.join(__dirname)).filter(x => path.extname(x) === ".js");
	var prefix = JSON.parse(fs.readFileSync(path.join(__dirname, "..", "..", "config.json")).toString()).PREFIX;
	files.forEach(file => {
		if(file != "example.js"){
			try {
				var data = require(path.join(__dirname, file)).config;
				if(data.name != undefined && data.commandCategory != undefined){
					if(data.commandCategory == "noprefix" || data.commandCategory == "Không cần dấu lệnh"){
						commands.push(data.name);
						commands.push(`${data.name.slice(0, 1).toUpperCase()}${data.name.slice(1, data.name.length)}`)
					}
					else {
						commands.push(`${prefix}${data.name}`);
					}
				}
			}
			catch(err){}
		}
	});
}

module.exports.handleEvent = async ({ api, event, Threads}) => {
	if(event.senderID != api.getCurrentUserID()){
		if(event.type == "message" || event.type == "message_reply"){
			var check = false;
			for(i=0;i<commands.length;i++){
				if(event.body.indexOf(commands[i]) == 0){
					check = true;
				}
			}
			if(check){
				!threadTimestamp[event.threadID] ? threadTimestamp[event.threadID] = {}: "";
				if(threadTimestamp[event.threadID].count == undefined){
					threadTimestamp[event.threadID].count = 1;
					threadTimestamp[event.threadID].timestamp = Date.now();
				}
				else {
					let tdata = (await Threads.getData(event.threadID)).data || {};
					if(tdata.banned != true && tdata.banned != undefined){
						threadTimestamp[event.threadID].count += 1;
						if(threadTimestamp[event.threadID].count >= times && Date.now() > threadTimestamp[event.threadID].timestamp + sec){
							delete threadTimestamp[event.threadID].timestamp;
							delete threadTimestamp[event.threadID].count;
						}
						if(threadTimestamp[event.threadID].count >= times && Date.now() <= threadTimestamp[event.threadID].timestamp + sec){
							api.sendMessage(spammessage, event.threadID);
							delete threadTimestamp[event.threadID].timestamp;
							delete threadTimestamp[event.threadID].count;

							let tdata = (await Threads.getData(event.threadID)).data || {};
							var time = require("moment-timezone").tz("Asia/Ho_Chi_minh").format("L");
							tdata.banned = true;
							tdata.reason = reason;
							tdata.dateAdded =  time;
							await Threads.setData(event.threadID, { tdata });
							global.data.threadBanned.set(event.threadID, { reason: tdata.reason, dateAdded: tdata.dateAdded });
							api.sendMessage(admintext.replace("{0}", event.threadID), JSON.parse(fs.readFileSync(path.join(__dirname, "..", "..", "config.json")).toString()).ADMINBOT);
						}
					}
				}
			}
		}
	}
}

module.exports.run = function({ api, event}) {}