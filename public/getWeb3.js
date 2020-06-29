const Web3 = require('web3');

function MyWeb3() {
    let web3;
    if (typeof web3 !== 'undefined') {
        web3 = new Web3(web3.currentProvider);
    } else {
        web3 = new Web3("https://api.infura.io/v1/jsonrpc/ropsten");
    }
    return web3;
}
module.exports = MyWeb3;