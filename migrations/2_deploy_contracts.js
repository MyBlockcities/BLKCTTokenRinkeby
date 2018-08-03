var BlkctToken = artifacts.require("./BlkctToken.sol");
var BlkctTokenSale = artifacts.require("./BlkctTokenSale.sol");

module.exports = function(deployer) {
  deployer.deploy(BlkctToken, 1000000).then(function() {
    // Token price is 0.001 Ether
    var tokenPrice = 1000000000000000;
    return deployer.deploy(BlkctTokenSale, BlkctToken.address, tokenPrice);
  });
};
