require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hunt case area system warfare deny soap artwork grunt light army general'; 
let testAccounts = [
"0xd03d69d063112f09bafbc16796a9a33e121f23117e3c3ac95e555fa31d042c8c",
"0x9efdbabb8394cc253194cb5ed9a5015a36775e2565d9d95671b80973760651fa",
"0x03898ecaa17d879856c60fd645147ecb90a9e6e6932927bf4e1ab2d6f049e3cf",
"0x9a9c301fd3a09b935cac1d01bd56201cf3d61f95a8015a19c8267c4f4ae3bbf8",
"0xa0dbbc2e1a74f909750abd0084b70fb3e5d49efd48156abe8c94de6137a8333f",
"0xeef9a3bd9c277bf6cec7bc661c4c0f7215c0edbea7442ade0eec476555a098c1",
"0x44bc64ad45fd35db22d6e749c491b2394ff3f6cd043be332ad0e8debed61368a",
"0x489052d548571f7c1176b74b27c29b43329d59393c999cc3f8dd18749d0e081e",
"0x806bdf81189ea0506cd4abf6a409aafc94530620da8cc1ea3bb4369aadab85c2",
"0x4253cf93201efcdc2259afd2404abaadf457b4150aad73963d6ed07f8d2d54ca"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
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
