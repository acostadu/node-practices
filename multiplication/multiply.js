const fs = require("fs");
const colors = require("colors");

let listTable = (base, limit = 10) => {
    for (let i = 1; i <= limit; i++) {
        console.log(`${base} * ${i} =  ${base * i}`);
    }
};

let createTable = (base, limit = 10) => {
    return new Promise((resolve, reject) => {
        if (!Number(base)) {
            reject(`The Base value ${base} is not a number`.red);
            return;
        }
        let data = "";

        for (let i = 1; i <= limit; i++) {
            data += `${base} * ${i} =  ${base * i}\n`;
        }

        fs.writeFile(`tables/table-${base}.txt`, data, (err) => {
            if (err) reject(err);
            else resolve(`table-${base}.txt`.green);
        });
    });
};

module.exports = {
    createTable,
    listTable,
};