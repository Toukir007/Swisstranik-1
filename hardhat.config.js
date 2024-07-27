require("@nomicfoundation/hardhat-toolbox");

module.exports = {
  solidity: "0.8.19",
  networks: {
    swisstronik: {
      url: "https://json-rpc.testnet.swisstronik.com/",
      accounts: ["35a061d8230be94c510f8f9920da5fba6cb3ec4f7bb85298f2d3bf03af7087a8"],
    },
  },
};
