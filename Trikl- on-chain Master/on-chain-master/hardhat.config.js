require('dotenv').config();
require("@nomiclabs/hardhat-ethers");
// require("@nomiclabs/hardhat-etherscan");


PRV_KEY = process.env.PRV_KEY;
module.exports = {
  defaultNetwork: "matic",
  networks: {
    hardhat: {
    },
    matic: {
      url: "https://rpc-mumbai.maticvigil.com",
      accounts: [PRV_KEY]
    },
    rinkeby: {
      url: "https://rinkeby.infura.io/v3/" + process.env.INFURA_KEY,
      accounts: [PRV_KEY]
    }
  },
  etherscan: {
    apiKey: process.env.POLYGONSCAN_API_KEY
  },
  solidity: {
    version: "0.8.14",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  },
}