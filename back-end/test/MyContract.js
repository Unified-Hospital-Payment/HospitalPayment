const { expect } = require("chai");

describe("MyContract", function () {
  it("Should return the new name once it's changed", async function () {
    const MyContract = await ethers.getContractFactory("MyContract");
    const myContract = await MyContract.deploy();

    await myContract.setName("Nemat");
    expect(await myContract.name()).to.equal("Nemat");
  });
});
