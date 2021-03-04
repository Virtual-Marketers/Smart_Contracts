// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.8.0;

//importaciones

//inicio de contrato
/**
 * Contrato
 */
contract BlockDemyCoin {
    //variables
    mapping(address => uint256) balances;

    //constructor
    constructor() {
        balances[msg.sender] = 1000;
    }

    //Metodos
    function Send(address receiver, uint256 amount) public {
        require(amount <= balances[msg.sender]);
        balances[msg.sender] -= amount;
        balances[receiver] += amount;
    }

    function getBalance() public view returns(uint) {
        return balances[msg.sender];
    }
}
