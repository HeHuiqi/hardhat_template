const { expect } = require("chai");
const { ethers } = require("hardhat");

let  privateKey = "your wallet privatekey"
function importWallet(){
  let rpc = ethers.provider.connection.url;
  // 通过定制 URL 连接 :
  let provider = new ethers.providers.JsonRpcProvider(rpc);
  // 从私钥获取一个签名器 Signer
  let myWallet = new ethers.Wallet(privateKey, provider);
  return myWallet;
}
// 通过abi创建合约对象然后交互
function createContract(contractAddress,abi){

  let myWallet = importWallet();
  // 创建合约对象
  let contract  = new ethers.Contract(contractAddress, abi, myWallet);

  return contract;
}





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
