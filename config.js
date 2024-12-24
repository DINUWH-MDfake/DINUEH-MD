const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "jJ9CzbYD#pEtEl8DdzzaL7gn-8nsOU1QZ8MRBxPmxtT_SVwXqHNI"
MONGODB: process.env.MONGODB || "mongodb://mongo:aHCBTsUhzVIvadJNEBXYgzCePbwwkAhj@junction.proxy.rlwy.net:51068",
};
