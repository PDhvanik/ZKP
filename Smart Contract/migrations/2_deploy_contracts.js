const FundTransfer = artifacts.require("FundTransfer");

module.exports = function (deployer) {
   deployer.deploy(FundTransfer, { gas: 5000000 });
};
