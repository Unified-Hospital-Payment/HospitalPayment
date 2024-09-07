const express = require('express');
const cors = require('cors');
const http = require('http');
// const { ethers } = require("ethers");

// const provider = new ethers.JsonRpcProvider("http://localhost:8545"); // Use your network URL
// const contractAddress = "0x5fbdb2315678afecb367f032d93f642f64180aa3";
// const abi = [ 
//   {
//   "inputs": [],
//   "name": "name",
//   "outputs": [
//     {
//       "internalType": "string",
//       "name": "",
//       "type": "string"
//     }
//   ],
//   "stateMutability": "view",
//   "type": "function"
// },
// {
//   "inputs": [
//     {
//       "internalType": "string",
//       "name": "newName",
//       "type": "string"
//     }
//   ],
//   "name": "setName",
//   "outputs": [],
//   "stateMutability": "nonpayable",
//   "type": "function"
// }
// ];

// const contract = new ethers.Contract(contractAddress, abi, provider);
const handlePayment = require("./API/Routes/HandlePayment");
const hospitalAdmin = require("./API/Routes/hospitalAdmins");
const patientConsultation = require("./API/Routes/patientConsultations");
const payments = require("./API/Routes/payments");
const receipts = require("./API/Routes/receipts");
const services = require("./API/Routes/services");
const Transactions = require("./API/Routes/transactions");
const User = require("./API/Routes/user");
const UserLogIn = require("./API/Routes/userLogIn");
const hospitals = require("./API/Routes/hospital")
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
app.use("/hospital", hospitals)
// app.get("/get-name", async (req, res) => {
//   try {
//     const name = await contract.name();
//     res.json({ name });
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// });



server.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});

