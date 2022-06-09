// SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.11;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract ExampleToken is ERC20 {
    
    address public admin;

    constructor() ERC20('Example Token', 'EA') {
        admin = msg.sender;
        _mint(msg.sender, 10000 * 10 ** 18); // 10 to the power of 18 allows for 18 decimal places which is the default, 10000 is the total supply
    }

    // The total number of tokens created in the constructor can be increased by calling this mint function
    function mint(address to, uint amount) external {
        require(msg.sender == admin, 'Only the admin is allowed to mint new tokens');
        _mint(to, amount);
    }

    // An individual can burn or destroy tokens if the supply needs to be decreased
    function burn(uint amount) external {
        _burn(msg.sender, amount);
    }
}