require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom argue blue shadow shock note place assume hockey clinic metal gaze'; 
let testAccounts = [
"0xf07c84882bebb4b0e3b5d59fb859b8e32eaf18987f78f45c24c352282a5570e7",
"0xa57ac7f80d16af0e9e2f01667768e3ac322c83f5b81a2b5a3a1bb7716e796f1e",
"0x1e8a678071517d5ac8eb4b901a14e05aee852e99be295d3f7fa65fc4201b632e",
"0xc155d5e8fc9ab5ae9de5eb49d45d5436fbb5f055de211d0f9c5ccd9d9ab05a64",
"0x3299a11a759f676e32102676680869c76a7898b3876710fa4db43ed7333ee4d0",
"0x78652d2a6316c05c422342c8b96a28da00e83887d7742c39ac3ab5a3b402d6d0",
"0x0a36d9c1ae07907ac6f3490c7d6e24905536f4357bf6e9ffed240e26f91e84e4",
"0x0fd319079e29e29e2c82059716d8cd251fbcbd61871193f5d784fc03626bd5dc",
"0xf10e96f1c892f7441423f0aa5b94abc7e1a69f862add0ea3f163d435bb5a8c35",
"0xbb54690f6e649f959dca6c919a65c83623ad3ded6c86ffba99a4e438075361f1"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                testAccounts,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
