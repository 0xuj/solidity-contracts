// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

contract HelloWorld {
    uint256 count = 3;

    string public hello = "Hello";

    function greet() public view returns (uint256) {
        return count;
    }
}
