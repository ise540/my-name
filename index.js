const path = require('path');
const fs = require('fs');

const package = path.join(__dirname, 'package.json');

function getMyName() {

    fs.readFile(package, 'utf8', function (err, data) {
        if(err) throw err;
        console.log(JSON.parse(data).author)
    })
   
}

module.exports = getMyName;