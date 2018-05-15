const host_url = 'http://bchxee-dns-reg1.westeurope.cloudapp.azure.com:8545';
///import com.facebook.react.bridge.Promise;

const Web3 = require('web3');
const web3 = new Web3();
web3.setProvider(new web3.providers.HttpProvider(host_url));


class blockchainService {
    constructor() {

    }

    getAllContracts(token) {
            return new Promise ((resolve, reject) => {
            web3.eth.getCoinbase((err, coinbase) => {
                    if (err) {
                        reject ({answer:'error : ' + err});
                    }

                    const balance = web3.eth.getBalance(coinbase, (err2, balance) => {
                    if (err2) {
                        reject( {answer:'error : ' + err2});

                    }
                    console.log('balance ' + balance);
                    resolve( {answer: String(balance)});
                    });
                });
              });
    }

}




export default blockchainService;
