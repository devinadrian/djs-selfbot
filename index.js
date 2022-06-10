require("./server.js")
require("dotenv")

const api = require("discord.js-selfbot")
const tkn = process.env["TOKEN"]

const split = tkn.split("\n")

for (const token of split) {
    const userclient = new api.Client()
    userclient.on("ready", () => {      userclient.user.setActivity("VALORANT", {type: "PLAYING"});
                              
        const vc = userclient.channels.cache.get('906796601039802369')
        vc.join()
                               console.log('masuk ke ' + vc.name)
    });
    userclient.login(token);
} 

//biar kaga nunjukin error trus exit
process.on('uncaughtException', function (exception) {
});
process.on('unhandledRejection', error => {
}); 