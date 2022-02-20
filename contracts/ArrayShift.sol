// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract ArrayShift {
    uint256[] public arr = [1, 2, 3, 4, 5];

    function remove(uint256 _index) public {
        require(_index < arr.length, "index out of bound");
        for (uint256 i = _index; i < arr.length - 1; i++) {
            arr[i] = arr[i + 1];
        }
        arr.pop();
    }

    function test() external {
        arr = [1, 2, 3, 4, 5];
        remove(2);
        assert(arr[2] == 4);
    }
}
