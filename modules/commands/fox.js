module.exports.config = {
	name: "fox",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "Thanh dz",
	description: "Random con Cáo :))",
	commandCategory: "random-img",
	usages: "fox",
	cooldowns: 5
};

module.exports.run = async ({ api, event }) => {
	const axios = require('axios');
	const request = require('request');
	const fs = require("fs");
	axios.get('https://api.berver.tech/fox').then(res => {
	let ext = res.data.data.substring(res.data.data.lastIndexOf(".") + 1);
	let callback = function () {
					api.sendMessage({
						attachment: fs.createReadStream(__dirname + `/cache/fox.${ext}`)
					}, event.threadID, () => fs.unlinkSync(__dirname + `/cache/fox.${ext}`), event.messageID);
				};
				request(res.data.data).pipe(fs.createWriteStream(__dirname + `/cache/fox.${ext}`)).on("close", callback);
			})
}