// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Todos{
    struct Todo {
        string text;
        bool completed;
    }
    Todo[] public todos;

    function create(string memory _text) public {
        todos.push(Todo(_text,false));
    }

    function update(uint _index,string memory _text) public {
        Todo storage todo = todos[_index];
        todo.text = _text;
    }

    function toggleCompleted(uint _index) public{
        Todo storage todo = todos[_index];
        todo.completed = !todo.completed;
    }
}