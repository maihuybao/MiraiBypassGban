/**
* @author ProCoderMew
* @warn Do not edit code or edit credits
*/

module.exports.config = {
	name: "teach",
	version: "2.0.3",
	hasPermssion: 0,
	credits: "ProCoderMew",
	description: "Dạy bot (dùng cho lệnh sim)",
	commandCategory: "general",
	usages: "hello => goodbye",
	cooldowns: 5,
	dependencies: {
		"axios": ""
	}
};

module.exports.run = async function({ api, event, args }) {
	const axios = global.nodemodule["axios"];
	const res = await axios("https://meewmeew.info/simsimi/teach", {
		method: "POST",
		headers: { "Content-Type": "application/json" },
		data: { teach: args.join(" ") }
	})
	return api.sendMessage(`${res.data.success}`, event.threadID, event.messageID);
}