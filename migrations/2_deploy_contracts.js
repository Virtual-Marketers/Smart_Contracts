var BlockDemyCoin = artifacts.require("BlockDemyCoin");
module.exports = deployer => {
    deployer.deploy(BlockDemyCoin);
};