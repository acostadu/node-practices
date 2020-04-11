const argv = require("./config/yargs").argv;
const { createTable, listTable } = require("./multiplication/multiply");

command = argv._[0];

switch (command) {
    case "create":
        createTable(argv.base, argv.limit)
            .then((file) => {
                console.log(`Created file: ${file}`);
            })
            .catch((err) => {
                console.log(err);
            });
        break;
    case "list":
        listTable(argv.base, argv.limit);
        break;
    default:
        console.log("Command no found");
        break;
}