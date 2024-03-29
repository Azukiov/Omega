const client = require('./client');
const log = require('./logger');
require('dotenv').config();


log.start("----------------------------------------------------------------")
log.start("         ██╗   ██████╗ ███╗   ███╗███████╗ ██████╗  █████╗      ")
log.start("        ██╔╝  ██╔═══██╗████╗ ████║██╔════╝██╔════╝ ██╔══██╗     ")
log.start("       ██╔╝   ██║   ██║██╔████╔██║█████╗  ██║  ███╗███████║     ")
log.start("      ██╔╝    ██║   ██║██║╚██╔╝██║██╔══╝  ██║   ██║██╔══██║     ")
log.start("     ██╔╝     ╚██████╔╝██║ ╚═╝ ██║███████╗╚██████╔╝██║  ██║     ")
log.start("     ╚═╝       ╚═════╝ ╚═╝     ╚═╝╚══════╝ ╚═════╝ ╚═╝  ╚═╝     ")
log.start("----------------------------------------------------------------")

require('./db.js')
require('./handlers/events.js')
require('./handlers/commands.js')


try {
    client.login(process.env.DISCORD_TOKEN);
} catch (error) {
    console.error(error);
}