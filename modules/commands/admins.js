module.exports.config = {
	name: "admins",
	version: "1.0.0", 
	hasPermssion: 0,
	credits: "HungCatMoi",
	description: "Lien he vs Admin bot",
	commandCategory: "Thông Tin", 
	usages: "Admin Bot[key]", 
	cooldowns: 0,
	dependencies: [] 
};

module.exports.run = async ({ api, event, args, client, utils }) => {
	if (args.join() == "") {api.sendMessage("Bot hiện đang có 3 admins\n👉Sử dụng /admins 1 để xem thông tin admins 1\n👉Sử dụng /admins 2 để xem thông tin admins 2\n👉Sử dụng /admins 2 để xem thông tin admins 3",event.threadID, event.messageID);
	}
	if (args[0] == "1") {
		return api.sendMessage("「 Admin 1 」\nTên: Mai Huy Bảo\nLiên hệ:\nhttps://www.facebook.com/JustOnly.MaiHuyBao.Official", event.threadID, event.messageID);
	}
	else if (args[0] == "2") {
		return api.sendMessage("「 Admin 2 」\nTên: Vương Thanh Diệu\nLiên hệ:\nhttps://www.facebook.com/ThanhDieuIOS", event.threadID, event.messageID);
	}
	else if (args[0] == "3") {
		return api.sendMessage("「 Admin 3 」\nTên: Hùng Channels\nLiên hệ:\nhttps://www.facebook.com/HungChannels.TV", event.threadID, event.messageID);
	}
}