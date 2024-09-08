// scripts/deploy.js
async function mytoken() {
    const MyContract = await ethers.getContractFactory("MyToken");
    const myContract = await MyContract.deploy();
  
    console.log("Contract deployed to address:", myContract.address);
  }
  
  main()
    .then(() => process.exit(0))
    .catch((error) => {
      console.error(error);
      process.exit(1);
    });
  