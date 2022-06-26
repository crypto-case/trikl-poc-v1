// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `npx hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
const hre = require("hardhat");

async function main() {
  // Hardhat always runs the compile task when running scripts with its command
  // line interface.
  //
  // If this script is run directly using `node` you may want to call compile
  // manually to make sure everything is compiled
  // await hre.run('compile');

  // We get the contract to deploy
  // const Greeter = await hre.ethers.getContractFactory("Greeter");
  const Expert = await hre.ethers.getContractFactory("Expert");
  const expert = await Expert.deploy("0xff6b0AaBa0C7dD05b871F8f69fbB9f12B333a041",
   "0xc778417E063141139Fce010982780140Aa0cD5Ab",
    "0xff6b0AaBa0C7dD05b871F8f69fbB9f12B333a041",
     "0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D",
      "0x5C69bEe701ef814a2B6a3EDD4B1652CB9cc5aA6f");

  await expert.deployed();

  console.log("Expert deployed to:", expert.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
