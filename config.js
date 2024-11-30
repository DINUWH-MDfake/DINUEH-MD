const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID
ALIVE_IMG: process.env.ALIVE_IMG || "https://i.ibb.co/sqbYr8C/5539.jpg",
ALIVEA_MSG: process.env.ALIVE_MG || "> hellow❤️‍🩹, *DINUWHMD* whatsaap bot is alive now🫢",
};
