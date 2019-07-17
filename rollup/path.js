const fs = require('fs');
const path = require('path');

const { ruiPath } = require('./../package.json');

const packages = path.resolve(__dirname,'..',ruiPath);

let components = fs.readdirSync(packages);

components = components.filter(item=>!/\./.test(item));

module.exports = components;
