
pragma solidity ^0.8.24;

contract MyContract {
    string public name = "My Solidity Contract";

    function setName(string memory newName) public {
        name = newName;
    }
}
