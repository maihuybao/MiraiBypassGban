module.exports.config = {
	name: "join",
	eventType: ["log:subscribe"],
	version: "1.0.1",
	credits: "Mirai Team",
	description: "Thông báo bot hoặc người vào nhóm",
	dependencies: {
		"fs-extra": ""
	}
};

module.exports.run = async function({ api, event }) {
	const { join } = global.nodemodule["path"];
	const { threadID } = event;
	if (event.logMessageData.addedParticipants.some(i => i.userFbId == api.getCurrentUserID())) {
		api.changeNickname(`[ ${global.config.PREFIX} ] • ${(!global.config.BOTNAME) ? "BOT Của LTD đẹp trai" : global.config.BOTNAME}`, threadID, api.getCurrentUserID());
		return api.sendMessage(`⚡️LuuTienDungBOT Connected Successfully!⚡️\n\n⚡️Cảm ơn bạn đã sử dụng con bot của tuii nhaa⚡️\n\n⚡️Lưu ý đầu tiên khi dùng bot là hãy chat "luật bot" để đọc luật sử dụng BOT. K đọc ăn ban sml ráng chịu⚡️\n\n⚡️Để tránh bot spam level và thông báo gỡ tin dẫn đến lag thì hãy dùng /resend và /rankup nhé ⚡️\n\n⚡️Chúc bạn sử dụng vui vẻ UwU <3`, threadID);
	}
	else {
		try {
			const { createReadStream, existsSync, mkdirSync } = global.nodemodule["fs-extra"];
			let { threadName, participantIDs } = await api.getThreadInfo(threadID);

			const threadData = global.data.threadData.get(parseInt(threadID)) || {};
			const path = join(__dirname, "cache", "joinGif");
			const pathGif = join(path,`chao.gif`);

			var mentions = [], nameArray = [], memLength = [], i = 0;
			
			for (id in event.logMessageData.addedParticipants) {
				const userName = event.logMessageData.addedParticipants[id].fullName;
				nameArray.push(userName);
				mentions.push({ tag: userName, id });
				memLength.push(participantIDs.length - i++);
			}
			memLength.sort((a, b) => a - b);
			
			(typeof threadData.customJoin == "undefined") ? msg = "⚡️Con lợn {name}⚡️\n\n⚡️Chúc mừng bạn đã đến với {threadName}⚡️\n\n⚡️{name} ơi {type} là thành viên thứ {soThanhVien} của nhóm xàm xí đú này⚡️" : msg = threadData.customJoin;
			msg = msg
			.replace(/\{name}/g, nameArray.join(', '))
			.replace(/\{type}/g, (memLength.length > 1) ?  'các bạn' : 'bạn')
			.replace(/\{soThanhVien}/g, memLength.join(', '))
			.replace(/\{threadName}/g, threadName);

			if (existsSync(path)) mkdirSync(path, { recursive: true });

			if (existsSync(pathGif)) formPush = { body: msg, attachment: createReadStream(pathGif), mentions }
			else formPush = { body: msg, mentions }

			return api.sendMessage(formPush, threadID);
		} catch (e) { return console.log(e) };
	}
}