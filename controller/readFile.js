const fs = require('fs');
const { employeeInfo } = require('./employeeInfo')

const readFile = (pathname) => {

    fs.readFile(pathname, 'utf-8', (err, data) => {
        if (err) {
            console.log('error: ', err);
        } else {
            employeeInfo(data);
        }
    });
}


module.exports = {
    readFile
}