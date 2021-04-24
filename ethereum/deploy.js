const HDWalletProvider = require('truffle-hdwallet-provider');

const Web3 = require('web3');
const compiledFactory = require('./build/:CampaignFactory.json');

//require('dotenv').config();

// const OPTIONS = {
//     defaultBlock: 'latest',
//     transactionConfirmationBlocks: 1,
//     transactionBlockTimeout: 8
// }
const provider = new HDWalletProvider(
	"answer alien ethics client trophy certain sunny property veteran gown salad poet",
    "https://rinkeby.infura.io/v3/0417fceb8b29486daf83372d30b429e8"
);

const web3 = new Web3(provider);
const deploy = async () => {
    const accounts = await web3.eth.getAccounts();
    console.log('Attemping to deploy from account ', accounts[0]);

    const result = await new web3.eth.Contract(JSON.parse(compiledFactory.interface))
        .deploy({ data: '0x' + compiledFactory.bytecode })
        .send({ gas:'1000000', from: accounts[0] });

    console.log('Contract deploy to ', result.options.address);
};

deploy();
