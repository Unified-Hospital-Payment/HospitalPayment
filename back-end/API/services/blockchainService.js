  // const ethers = require('ethers');
  // require('dotenv').config();

  // // Set up the provider
  // const provider = new ethers.JsonRpcProvider(process.env.BLOCKCHAIN_RPC_URL);

  // const wallet = new ethers.Wallet(process.env.PRIVATE_KEY, provider);  // Use your private key from environment variables

  // console.log("Wallet Address:", wallet.address);

  // console.log("Private Key:", wallet.privateKey);
  // const abi = [
  //   {
  //     "anonymous": false,
  //     "inputs": [
  //       {
  //         "indexed": false,
  //         "internalType": "uint256",
  //         "name": "id",
  //         "type": "uint256"
  //       },
  //       {
  //         "indexed": false,
  //         "internalType": "string",
  //         "name": "transactionId",
  //         "type": "string"
  //       }
  //     ],
  //     "name": "PaymentCompleted",
  //     "type": "event"
  //   },
  //   {
  //     "anonymous": false,
  //     "inputs": [
  //       {
  //         "indexed": false,
  //         "internalType": "uint256",
  //         "name": "id",
  //         "type": "uint256"
  //       },
  //       {
  //         "indexed": false,
  //         "internalType": "address",
  //         "name": "payer",
  //         "type": "address"
  //       },
  //       {
  //         "indexed": false,
  //         "internalType": "uint256",
  //         "name": "amount",
  //         "type": "uint256"
  //       },
  //       {
  //         "indexed": false,
  //         "internalType": "string",
  //         "name": "transactionId",
  //         "type": "string"
  //       }
  //     ],
  //     "name": "PaymentCreated",
  //     "type": "event"
  //   },
  //   {
  //     "inputs": [
  //       {
  //         "internalType": "uint256",
  //         "name": "_id",
  //         "type": "uint256"
  //       }
  //     ],
  //     "name": "completePayment",
  //     "outputs": [],
  //     "stateMutability": "nonpayable",
  //     "type": "function"
  //   },
  //   {
  //     "inputs": [
  //       {
  //         "internalType": "uint256",
  //         "name": "_id",
  //         "type": "uint256"
  //       },
  //       {
  //         "internalType": "uint256",
  //         "name": "_amount",
  //         "type": "uint256"
  //       },
  //       {
  //         "internalType": "string",
  //         "name": "_transactionId",
  //         "type": "string"
  //       }
  //     ],
  //     "name": "createPayment",
  //     "outputs": [],
  //     "stateMutability": "nonpayable",
  //     "type": "function"
  //   },
  //   {
  //     "inputs": [
  //       {
  //         "internalType": "uint256",
  //         "name": "_id",
  //         "type": "uint256"
  //       }
  //     ],
  //     "name": "getPayment",
  //     "outputs": [
  //       {
  //         "components": [
  //           {
  //             "internalType": "uint256",
  //             "name": "id",
  //             "type": "uint256"
  //           },
  //           {
  //             "internalType": "address",
  //             "name": "payer",
  //             "type": "address"
  //           },
  //           {
  //             "internalType": "uint256",
  //             "name": "amount",
  //             "type": "uint256"
  //           },
  //           {
  //             "internalType": "string",
  //             "name": "status",
  //             "type": "string"
  //           },
  //           {
  //             "internalType": "string",
  //             "name": "transactionId",
  //             "type": "string"
  //           }
  //         ],
  //         "internalType": "struct Payments.Payment",
  //         "name": "",
  //         "type": "tuple"
  //       }
  //     ],
  //     "stateMutability": "view",
  //     "type": "function"
  //   },
  //   {
  //     "inputs": [
  //       {
  //         "internalType": "uint256",
  //         "name": "",
  //         "type": "uint256"
  //       }
  //     ],
  //     "name": "payments",
  //     "outputs": [
  //       {
  //         "internalType": "uint256",
  //         "name": "id",
  //         "type": "uint256"
  //       },
  //       {
  //         "internalType": "address",
  //         "name": "payer",
  //         "type": "address"
  //       },
  //       {
  //         "internalType": "uint256",
  //         "name": "amount",
  //         "type": "uint256"
  //       },
  //       {
  //         "internalType": "string",
  //         "name": "status",
  //         "type": "string"
  //       },
  //       {
  //         "internalType": "string",
  //         "name": "transactionId",
  //         "type": "string"
  //       }
  //     ],
  //     "stateMutability": "view",
  //     "type": "function"
  //   }
  // ]
  // // Create a contract instance
  // const paymentsContract = new ethers.Contract(
  //   process.env.PAYMENTS_CONTRACT_ADDRESS, 
  //   abi,  // Use .abi property of the imported JSON
  //   wallet
  // );

  // // Function to create a blockchain payment
  // async function createBlockchainPayment(id, amount, transactionId) {
  //   const tx = await paymentsContract.createPayment(id, amount, transactionId);
  //   await tx.wait();
  //   return tx.hash;
  // }

  // // Function to complete a blockchain payment
  // async function completeBlockchainPayment(id) {
  //   const tx = await paymentsContract.completePayment(id);
  //   await tx.wait();
  //   return tx.hash;
  // }

  // module.exports = {
  //   createBlockchainPayment,
  //   completeBlockchainPayment,
  // };
