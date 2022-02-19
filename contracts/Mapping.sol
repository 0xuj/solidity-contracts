// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Mapping {
    mapping(address => uint256) public myaddr;

    function set(address _address, uint256 _num) public {
        myaddr[_address] = _num;
    }

    function get(address _address) public view returns (uint256) {
        return myaddr[_address];
    }

    function del(address _address) public {
        delete myaddr[_address];
    }
}
