const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "you_sessionid",  //session id put
ALIVE_IMG: process.env.ALIVE_IMG || "https://i.ibb.co/R2jMmyb/IMG-20241229-WA0007.jpg",
ALIVE_MSG: process.env.ALIVE_IMG || "*HEY DEAR* ${pushname}\n *I Am AlIVE NOW....! 🖐🏻*",
SUDO_NB: process.env.SUDO_NB || "94788231166",
AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "true",
MODE: process.env.MODE || "public",
AUTO_VOICE:"flase"
};

