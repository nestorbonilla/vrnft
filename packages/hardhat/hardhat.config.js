
require("@nomiclabs/hardhat-waffle");
require("dotenv").config();

const defaultNetwork = "mumbai";

module.exports = {
  defaultNetwork: defaultNetwork,
  solidity: "0.8.2",
  paths: {
    artifacts: "../react-web/public/artifacts",
  },
  networks: {
    hardhat: {
      chainId: 1337
    },
    mumbai: {
      url: process.env.MUMBAI_RPC,
      accounts: [ process.env.PRIVATE_KEY ]
    },
    rinkeby: {
      url: process.env.RINKEBY_RPC,
      accounts: [ process.env.PRIVATE_KEY ]
    }
  }
};