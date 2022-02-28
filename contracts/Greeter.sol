// SPDX-License-Identifier: MIT
pragma solidity >=0.6.0;

// 此依赖可以在测试时打印变量的值，用法和js的console 差不多
import "hardhat/console.sol";

contract Greeter {
    string private greeting;

    constructor(string memory _greeting) public {
        console.log("Deploying a Greeter with greeting:", _greeting);
        greeting = _greeting;
    }

    function greet() public view returns (string memory) {
        return greeting;
    }

    function setGreeting(string memory _greeting) public {
        console.log("Changing greeting from '%s' to '%s'", greeting, _greeting);
        greeting = _greeting;
    }
}
