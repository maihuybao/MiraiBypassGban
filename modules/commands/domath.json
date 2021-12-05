module.exports.config = {
	name: "domath",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "loi",
	description: "lấy ảnh trai",
	commandCategory: "Hình ảnh",
	usages: "gif bomman",
	cooldowns: 5,
	dependencies: ["request"],
};
	
module.exports.run = async ({ event, api, args, client, Currencies, Users, utils, __GLOBAL }) => {
	const content = args.join()
			let difficulty, answer, value1, value2;
			const difficulties = ['baby', 'easy', 'medium', 'hard', 'extreme', 'impossible'];
			(difficulties.some(item => content == item)) ? difficulty = content : difficulty = difficulties[Math.floor(Math.random() * difficulties.length)];
			const operations = ['+', '-', '*'];
			const maxValues = { baby: 10, easy: 50, medium: 100, hard: 500, extreme: 1000, impossible: Number.MAX_SAFE_INTEGER };
			const operation = operations[Math.floor(Math.random() * operations.length)];
			value1 = Math.floor(Math.random() * maxValues[difficulty] - 1) + 1;
			value2 = Math.floor(Math.random() * maxValues[difficulty] - 1) + 1;
			switch (operation) {
				case '+':
					answer = value1 + value2;
					break;
				case '-':
					answer = value1 - value2;
					break;
				case '*':
					answer = value1 * value2;
					break;
			}
			return api.sendMessage(`Bạn có 15 giây để trả lời ===\n ${value1} ${operation} ${value2} = ?`, event.threadID, (err, info) => __GLOBAL.reply.push({ type: "domath", messageID: info.messageID, target: parseInt(threadID), author: senderID, answer }), event.messageID);
		}