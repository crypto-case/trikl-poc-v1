import React, { useEffect, useState } from "react";
import { useMoralis, useMoralisWeb3Api } from "react-moralis";
import Popup from "reactjs-popup";
import DappNav from "../../components/DappNav/DappNav";
import ParticlesBg from "../dApp/ParticlesBg";
import DepositFunds from "./DepositFunds";

const ExpertDashboard = () => {
  const Web3Api = useMoralisWeb3Api();
  const { user, isAuthenticated } = useMoralis();
  var [walletToken, setWalletToken] = useState([]);

  const fetchExpertTokenBalances = async () => {
    const options = {
      chain: "rinkeby",
      address: "0xF3fb3Cb8b34F5331B82219183c5AdEf40EE10ba5",
    };
    const tokens = await Web3Api.account.getTokenBalances(options);
    setWalletToken(tokens);
  };

  fetchExpertTokenBalances();

  return isAuthenticated ? (
    <div className="text-dullBg">
      <div className="absolute -z-50">
        <ParticlesBg />
      </div>
      <nav>
        <DappNav />
      </nav>
      <div className="pt-16 h-5/6 container mx-auto flex flex-col items-center justify-center">
        <header className="pb-10 text-2xl text-accent tracking-widest font-semibold uppercase">
          Crypto Evergreen Fund
        </header>

        {/* Expert's Portfolio Details */}
        <div className="pb-32">
          {/* Header Section */}
          <div className="flex items-center justify-between px-5 pb-5">
            <h2 className="text-2xl text-dullBg">Portfolio Details</h2>
            {/* Popup for depositing funds */}
            <div>
              <Popup
                trigger={
                  <button className="bg-primaryBlue px-8 py-2 rounded-full font-semibold flex items-center mt-5">
                    Start Copying
                  </button>
                }
                modal
              >
                <div className="bg-dullBg px-20 py-10 rounded-xl">
                  <DepositFunds />
                </div>
              </Popup>
            </div>
          </div>
          <table
            className="table-auto text-white bg-black bg-opacity-30 backdrop-blur-md p-20 rounded-2xl"
            border="1"
            cellPadding="3"
            id="printTable"
          >
            <thead className="text-accent border-b-[1px] border-blackish">
              <tr>
                <th className="py-6 px-10">Token</th>
                <th className="py-6 px-10">Symbol</th>
                <th className="py-6 px-10">Balance</th>
                <th className="py-6 px-10">Token Address</th>
              </tr>
            </thead>

            <tbody className="text-white/75 font-light tracking-wide">
              {walletToken.map((Token) => (
                <tr className="hover:text-white">
                  <td className="py-5 px-10"> {Token.name} </td>
                  <td className="py-5 px-10"> {Token.symbol} </td>
                  <td className="py-5 px-10 text-left"> {Token.balance} </td>
                  <td className="py-5 px-10 text-left">
                    {" "}
                    {Token.token_address}{" "}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  ) : (
    <div className="bg-gradient-to-t from-darkestBlue to-black h-screen text-dullBg">
      <nav>
        <DappNav />
      </nav>
      <div className="h-5/6 container mx-auto flex flex-col items-center justify-center">
        <h1> Please connect your wallet to continue </h1>
      </div>
    </div>
  );
};

export default ExpertDashboard;
