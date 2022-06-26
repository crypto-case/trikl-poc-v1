import Web3 from "web3/dist/web3.min.js";
import React, { useState } from "react";
import DappNav from "../../components/DappNav/DappNav";
import { useMoralis } from "react-moralis";
import Moralis from "moralis";
import ParticlesBg from "../dApp/ParticlesBg";
import "./dashboard.css";

const Transaction = () => {
  let { user, isAuthenticated } = useMoralis();
  let [transactions, setTransaction] = useState([]);

  async function getUserTransactions() {
    // console.log(use.get("ethAddress"));
    // create query
    const queryToAddress = new Moralis.Query("EthTransactions");
    queryToAddress.equalTo("to_address", user.get("ethAddress"));

    const queryFromAddress = new Moralis.Query("EthTransactions");
    queryFromAddress.equalTo("from_address", user.get("ethAddress"));

    // query.equalTo("from_address", "to_address", user.get("ethAddress"));
    const mainQuery = Moralis.Query.or(queryFromAddress, queryToAddress);

    // subscribe to query updates ** add this**
    const subscription = await mainQuery.subscribe();
    handleNewTransaction(subscription);

    // run mainQuery
    const results = await mainQuery.find();
    setTransaction(results);
    // console.log("user transactions:", results);
  }

  getUserTransactions();

  async function handleNewTransaction(subscription) {
    // log each new transaction
    subscription.on("create", function (data) {
      console.log("new transaction: ", data);
    });
  }
  //   const address = user.get("ethAddress");

  return isAuthenticated ? (
    <div className="max-w-screen text-dullBg container mx-auto">
      <nav>
        <DappNav />
      </nav>
      <div className="absolute -z-50">
        <ParticlesBg />
      </div>

      <header className="flex justify-between mx-auto gap-5 items-center pt-20 pb-5 border-b-[1px] border-darkestBlue mb-10">
        <h2 className="text-2xl text-primaryBlue font-semibold">
          Transaction History
        </h2>

        <div className="flex gap-5">
          <button className="bg-primaryBlue px-8 py-1 rounded-full font-light">
            <a href="/user-transactions"> Refresh </a>
          </button>
          <button className="bg-primaryBlue px-8 py-1 rounded-full font-light">
            <a href="/user-dashboard"> Token Balance </a>
          </button>
        </div>
      </header>

      <div
        id="customScroll"
        className="flex justify-center overflow-auto scrollbar-thin scrollbar-thumb-black scrollbar-track-gray-500 pb-20"
      >
        <table
          className="table-auto text-gray bg-black bg-opacity-30 backdrop-blur-md p-20 rounded-2xl"
          border="1"
          id="printTable"
        >
          <thead className="text-accent border-b-[1px] border-blackish">
            <tr className="">
              <th className="py-4 px-5"> Transaction Hash </th>
              <th className="py-4 px-5"> To</th>
              <th className="py-4 px-5">From </th>
              {/* <th>Token Name</th> */}
              <th className="py-4 px-5"> Token Amount</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((transaction) => (
              <tr className="hover:text-dullBg">
                <td className="py-4 px-10"> {transaction.attributes.hash} </td>
                <td className="py-4 px-10">
                  {transaction.attributes.to_address.substring(0, 7) +
                    "..." +
                    transaction.attributes.to_address.substring(38, 42)}
                </td>
                <td className="py-4 px-10">
                  {transaction.attributes.from_address.substring(0, 7) +
                    "..." +
                    transaction.attributes.from_address.substring(38, 42)}
                </td>
                {/* <td> {transaction.attributes.to_address} </td> */}
                <td className="py-4 px-10"> {transaction.attributes.value} </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  ) : (
    <div className="bg-gradient-to-t from-darkestBlue to-black h-screen text-dullBg">
      <nav>
        <DappNav />
      </nav>
      <div className="h-5/6 container mx-auto flex flex-col items-center justify-center">
        <header className="pb-10 text-2xl text-primaryBlue">
          Transaction History
        </header>
        <h1> You are not authenticated, Kindly connect your wallet </h1>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold my-10 py-2 px-4 rounded-full">
          <a href="/user-transactions"> Refresh </a>
        </button>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
          <a href="/user-dashboard"> Token Balance </a>
        </button>
      </div>
    </div>
  );
};

export default Transaction;
