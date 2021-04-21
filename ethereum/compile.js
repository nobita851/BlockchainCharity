const path = require('path');
const solc = require('solc');
const fs = require('fs-extra');

const buildPath = path.resolve(__dirname, 'build');
fs.removeSync(buildPath); // deleting the folder and all the content inside it

const campaignPath = path.resolve(__dirname, 'contracts', 'Campaign.sol');
const source = fs.readFileSync(campaignPath, 'utf8');
//console.log(solc.compile(source, 1));
const output = solc.compile(source, 1).contracts;

fs.ensureDirSync(buildPath); // create a build folder if that folder doesn't exists

for (let contract in output) {
  fs.outputJsonSync(
    path.resolve(buildPath, contract+'.json'),
    output[contract]
  );
}
