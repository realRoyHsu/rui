const fs = require('fs');
const path = require('path');

const packages = path.resolve(__dirname,'..','packages');

let components = fs.readdirSync(packages);

components = components.filter(item=>!/\./.test(item));

module.exports = components;
