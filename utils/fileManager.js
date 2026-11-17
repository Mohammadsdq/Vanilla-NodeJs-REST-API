const fs = require('fs');
const path = require('path');

function writeJSON(fileName, data) {
    return new Promise((resolve, reject) => {
        const filePath = path.join(process.cwd(), 'data', fileName);

        fs.writeFile(filePath, JSON.stringify(data, null, 2), err => {
            if (err) reject(err);
            else resolve(true);
        });
    });
}

module.exports = {
    writeJSON
};