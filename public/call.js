const Web3 = require('./getWeb3');
import config from "../config/config.js";
const web3 = new Web3();
console.log(web3);

//加载自定义的Token合约,这一句是让自己发行的Token也走MetaMask节点
const Agic = new web3.eth.Contract(config.abi, config.address);

function transfer() {
    Agic.methods.transfer("转账地址","金额").send({
        from :"来源地址"
    }).on('transactionHash', function(hash){
        //hash
    }).on('receipt', function(receipt){
        //receipt
    })
}