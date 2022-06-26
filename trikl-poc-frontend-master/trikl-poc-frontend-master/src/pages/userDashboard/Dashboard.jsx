import React, { useEffect, useState } from "react";
import { useMoralis, useMoralisWeb3Api } from "react-moralis";
import DappNav from "../../components/DappNav/DappNav";
import ParticlesBg from "../dApp/ParticlesBg";

const Dashboard = () => {
  const Web3Api = useMoralisWeb3Api();
  const { user, isAuthenticated } = useMoralis();
  var [walletBalance, setWalletBalance] = useState([]);

  const fetchTokenBalances = async () => {
    const options = {
      chain: "rinkeby",
    };
    const balance = await Web3Api.account.getTokenBalances(options);
    setWalletBalance(balance);
  };

  fetchTokenBalances();

  return isAuthenticated ? (
    <div className="h-screen text-dullBg">
      <nav>
        <DappNav />
      </nav>
      <div className="absolute -z-50">
        <ParticlesBg />
      </div>

      <div className="h-5/6 container mx-auto flex flex-col items-center justify-center">
        <header className="pb-10 text-2xl text-primaryBlue">
          Your Portfolio
        </header>
        <div>
          <table
            className="table-auto text-white text-xl bg-black bg-opacity-30 backdrop-blur-md p-20 rounded-2xl"
            border="1"
            cellPadding="3"
            id="printTable"
          >
            <thead className="text-accent border-b-[1px] border-blackish">
              <tr className="h-auto">
                <th className="py-6 px-10">Token</th>
                <th className="py-6 px-10">Symbol</th>
                <th className="py-6 px-10">Balance</th>
                <th className="py-6 px-10">Token Address</th>
              </tr>
            </thead>
            <tbody className="text-gray font-light tracking-wide">
              {walletBalance.map((balance) => (
                <tr className="hover:text-white">
                  <td className="py-5 px-10"> {balance.name} </td>
                  <td className="py-5 px-10"> {balance.symbol} </td>
                  <td className="py-5 px-10"> {balance.balance} </td>
                  <td className="py-5 px-10">
                    {balance.token_address.substring(0, 5) +
                      "..." +
                      balance.token_address.substring(38, 42)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold my-10 py-2 px-4 rounded-full">
          {" "}
          <a href="/user-dashboard"> Refresh </a>
        </button>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
          <a href="/user-transactions"> Transaction History </a>
        </button>
      </div>
    </div>
  ) : (
    <div className="bg-gradient-to-t from-darkestBlue to-black h-screen text-dullBg">
      <nav>
        <DappNav />
      </nav>
      <div className="h-5/6 container mx-auto flex flex-col items-center justify-center">
        <header className="pb-10 text-2xl text-primaryBlue">
          Your Portfolio
        </header>
        <h1> You are not authenticated, Kindly connect your wallet </h1>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold my-10 py-2 px-4 rounded-full">
          {" "}
          <a href="/user-dashboard"> Refresh </a>
        </button>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
          <a href="/user-transactions"> Transaction History </a>
        </button>
      </div>
    </div>
  );
};

export default Dashboard;
