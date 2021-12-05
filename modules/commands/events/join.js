﻿module.exports.config = {
	name: "join",
	eventType: ["log:subscribe"],
	version: "1.0.0",
	credits: "SpermLord",
	description: "Listen events",
	dependencies: ["request", "fs-extra"]
};

module.exports.run = async function({ api, event, global, client }) {
	if (event.logMessageData.addedParticipants.some(i => i.userFbId == api.getCurrentUserID())) {
		api.changeNickname(`[ ${global.config.PREFIX} ] • ${(!global.config.BOTNAME) ? "Made by CatalizCS and SpermLord" : global.config.BOTNAME}`, event.threadID, api.getCurrentUserID());
		return api.sendMessage(`Ð𝗮̃ 𝗸𝗲̂́𝘁 𝗻𝗼̂́𝗶 𝘃𝗼̛́𝗶 𝗯𝗼𝘅 𝘁𝗵𝗮̀𝗻𝗵 𝗰𝗼̂𝗻𝗴 ! 𝗩𝘂𝗶 𝗹𝗼̀𝗻𝗴 𝘀𝘂̛̉ 𝗱𝘂̣𝗻𝗴 𝗹𝗲̣̂𝗻𝗵 /help  đ𝗲̂̉ 𝗯𝗶𝗲̂́𝘁 𝘁𝗼𝗮̀𝗻 𝗯𝗼̣̂ 𝗹𝗲̣̂𝗻𝗵 𝗰𝘂̉𝗮 𝗯𝗼𝘁\𝗻𝗖𝗮̉𝗺 𝗼𝗻 𝗯𝗮̣𝗻 𝗱𝗮̃ 𝗱𝘂̀𝗻𝗴 𝗯𝗼𝘁 𝗰𝘂̉𝗮 Hoàng Hải Long 𝗢𝗳𝗳𝗶𝗰𝗶𝗮𝗹, 𝗰𝗵𝘂́𝗰 𝗰𝗮́𝗰 𝗯𝗮̣𝗻 𝘀𝘂̛̉ 𝗱𝘂̣𝗻𝗴 𝗯𝗼𝘁 𝘃𝘂𝗶 𝘃𝗲̉`, event.threadID);
	}
	else {
		const { createReadStream, existsSync, mkdirSync } = require("fs-extra");
		let threadInfo = await api.getThreadInfo(event.threadID),
			threadName = threadInfo.threadName,
			settings = client.threadSetting.get(event.threadID) || {},
			dirGif = __dirname + `/cache/joinGif/`,
			msg, formPush;
		var mentions = [], nameArray = [], memLength = [];
		for (var i = 0; i < event.logMessageData.addedParticipants.length; i++) {
			let id = event.logMessageData.addedParticipants[i].userFbId;
			let userName = event.logMessageData.addedParticipants[i].fullName;
			nameArray.push(userName);
			mentions.push({ tag: userName, id });
			memLength.push(threadInfo.participantIDs.length - i);
		}
		memLength.sort((a, b) => a - b);
		
		(typeof settings.customJoin == "undefined") ? msg = "𝙃𝙚𝙡𝙡𝙤 𝙘𝙤𝙣 𝙫𝙤̛̣ {name}. \n𝘾𝙝𝙖̀𝙤 𝙢𝙪̛̀𝙣𝙜 đ𝙖̃ đ𝙚̂́𝙣 𝙫𝙤̛́𝙞 {threadName}. \n{type} 𝙡𝙖̀ 𝙩𝙝𝙖̀𝙣𝙝 𝙫𝙞𝙚̂𝙣 𝙩𝙝𝙪̛́ {soThanhVien} 𝙘𝙪̉𝙖 𝙣𝙝𝙤́𝙢. 𝙏𝙪̛𝙤̛𝙣𝙜 𝙩𝙖́𝙘 𝙣𝙝𝙞𝙚̂̀𝙪 𝙫𝙖̀𝙤 𝙣𝙝𝙖 𝙠𝙝𝙤̂𝙣𝙜 𝙡𝙖̀ 𝙖̆𝙣 𝙠𝙞𝙘𝙠 đ𝙖̂́𝙮 ♥" : msg = settings.customJoin;
		msg = msg
		.replace(/\{name}/g, nameArray.join(', '))
		.replace(/\{type}/g, (memLength.length > 1) ?  'các bạn' : 'bạn')
		.replace(/\{soThanhVien}/g, memLength.join(', '))
		.replace(/\{threadName}/g, threadName);
		if (existsSync(dirGif)) mkdirSync(dirGif, { recursive: true });
		if (existsSync(dirGif + `chao.gif`)) formPush = { body: msg, attachment: createReadStream(dirGif + `chao.gif`), mentions }
		else formPush = { body: msg, mentions }
		return api.sendMessage(formPush, event.threadID);
	}
}