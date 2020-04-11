const options = {
    base: {
        demand: true,
        alias: "b",
    },
    limit: {
        alias: "l",
        default: 10,
    },
};
const argv = require("yargs")
    .command("create", "Create a table", options)
    .command("list", "List a table", options)
    .help().argv;

module.exports = { argv };