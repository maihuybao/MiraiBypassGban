module.exports.config = {
	name: "cadao",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "VanHung",
	description: "Ca Dao Việt Nam",
	commandCategory: "Box",
	usages: "cadao",
	cooldowns: 5
};

module.exports.run = async ({ api, event }) => {
const axios = require('axios');
const request = require('request');
const fs = require("fs");
const res = await axios.get(`https://api.berver.tech/cadao`);
const anh = await axios.get(`https://api.berver.tech/gai2k`);
var gai = anh.data.data.substring(anh.data.data.lastIndexOf(".") + 1);
var cadao = res.data.data
let callback = function () {
			 api.sendMessage({
				body: `★ℭɑ ɗɑ❍ ҩ¡ệζ ղɑლ★:\n﹤ ${cadao} ﹥`,
				attachment: fs.createReadStream(__dirname + `/cache/gaicadao.${gai}`)
			}, event.threadID, () => fs.unlinkSync(__dirname + `/cache/gaicadao.${gai}`), event.messageID);
			};
			request(anh.data.data).pipe(fs.createWriteStream(__dirname + `/cache/gaicadao.${gai}`)).on("close", callback);
}