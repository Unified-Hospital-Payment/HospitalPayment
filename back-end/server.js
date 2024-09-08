const express = require('express');
const cors = require('cors');
const http = require('http');
const { ethers } = require("ethers");

const provider = new ethers.JsonRpcProvider("http://localhost:8545"); // Use your network URL
const contractAddress = "0x5fbdb2315678afecb367f032d93f642f64180aa3";
const abi= [
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_id",
          "type": "uint256"
        }
      ],
      "name": "completePayment",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_id",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "_amount",
          "type": "uint256"
        },
        {
          "internalType": "string",
          "name": "_transactionId",
          "type": "string"
        }
      ],
      "name": "createPayment",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_id",
          "type": "uint256"
        }
      ],
      "name": "getPayment",
      "outputs": [
        {
          "components": [
            {
              "internalType": "uint256",
              "name": "id",
              "type": "uint256"
            },
            {
              "internalType": "address",
              "name": "payer",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "amount",
              "type": "uint256"
            },
            {
              "internalType": "string",
              "name": "status",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "transactionId",
              "type": "string"
            }
          ],
          "internalType": "struct Payments.Payment",
          "name": "",
          "type": "tuple"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "payments",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "id",
          "type": "uint256"
        },
        {
          "internalType": "address",
          "name": "payer",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        },
        {
          "internalType": "string",
          "name": "status",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "transactionId",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    }
  ]


const contract = new ethers.Contract(contractAddress, abi, provider);
const handlePayment = require("./API/Routes/HandlePayment");
const hospitalAdmin = require("./API/Routes/hospitalAdmins");
const patientConsultation = require("./API/Routes/patientConsultations");
const payments = require("./API/Routes/payments");
const receipts = require("./API/Routes/receipts");
const services = require("./API/Routes/services");
const Transactions = require("./API/Routes/transactions");
const User = require("./API/Routes/user");
const UserLogIn = require("./API/Routes/userLogIn");
const category = require("./API/Routes/category")
const app = express();
const server = http.createServer(app);


const PORT = process.env.PORT || 8001;

BigInt.prototype.toJSON = function () {
  return this.toString();
};

app.use(cors({origin: "*"}));
app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use("/api", handlePayment);
app.use("/hospitalAdmin", hospitalAdmin);
app.use("/patientConsultation", patientConsultation);
app.use("/payments", payments);
app.use("/receipts", receipts);
app.use("/services",services);
app.use("/transactions", Transactions);
app.use("/user", User);
app.use("/login", UserLogIn)
app.use("/category", category)


app.get('/get-payment/:id', async (req, res) => {
  try {
    const C = req.params.id;
    const payment = await contract.getPayment(paymentId);
    res.json({ payment });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});



server.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});

