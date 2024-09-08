// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

contract Payments {
    struct Payment {
        uint id;
        address payer;
        uint amount;
        string status; // 'pending', 'completed', 'failed'
        string transactionId;
    }

    Payment[] public payments;

    event PaymentCreated(uint id, address payer, uint amount, string transactionId);
    event PaymentCompleted(uint id, string transactionId);

    function createPayment(uint _id, uint _amount, string memory _transactionId) public {
        payments.push(Payment({
            id: _id,
            payer: msg.sender,
            amount: _amount,
            status: 'pending',
            transactionId: _transactionId
        }));
        emit PaymentCreated(_id, msg.sender, _amount, _transactionId);
    }

    function completePayment(uint _id) public {
        Payment storage payment = payments[_id];
        require(msg.sender == payment.payer, "Not authorized");
        payment.status = 'completed';
        emit PaymentCompleted(_id, payment.transactionId);
    }

    function getPayment(uint _id) public view returns (Payment memory) {
        return payments[_id];
    }
}
