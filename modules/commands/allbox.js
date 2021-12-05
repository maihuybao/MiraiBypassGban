module.exports.config = {
    name: "allbox",
    version: "1.0.0",
    credits: "Him",
    hasPermssion: 0,
    description: "Lấy tên và id các nhóm chứa bot",
    commandCategory: "Admin",
    usages: "allbox",
    cooldowns: 5
};

module.exports.run = function({ api, event, clientL }) {
    var num = 0, box = ".";
    api.getThreadList(500, null, ["INBOX"], (err, list) => {
        list.forEach(info => {
            if (info.isGroup && info.isSubscribed) {
                box += `${num+=1}. ${info.name} - ${info.threadID}\n`;
            }           
        })
        return api.sendMessage(box, event.threadID, event.messageID);
    })
}