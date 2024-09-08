// scripts/deploy.js
async function main() {
    const MyContract = await ethers.getContractFactory("Payments");
    const myContract = await MyContract.deploy();
  
    console.log("Contract deployed to address:", myContract.address);
  }
  
  main()
    .then(() => process.exit(0))
    .catch((error) => {
      console.error(error);
      process.exit(1);
    });
  