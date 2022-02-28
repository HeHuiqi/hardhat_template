const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("MockToken", function () {
  it("Should return the new MockToken once it's changed", async function () {
    // console.log(ethers);
    const MockToken = await ethers.getContractFactory("MockToken");
    const mockToken = await MockToken.deploy("abc","abc",18);
    await mockToken.deployed();

    let name = await mockToken.name();
    console.log('name:',name);
    expect(name).to.equal("abc");
    
  });
});
