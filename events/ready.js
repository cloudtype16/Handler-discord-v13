const client = require("../index");
const colors = require("colors");

client.on("ready", () => {
    console.log(colors.rainbow(`${client.user.username} Vivito y coleando!`))
});
