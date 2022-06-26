import React, { useEffect, useState } from "react";
import { useMoralis, useMoralisWeb3Api } from "react-moralis";
import DappNav from "../../components/DappNav/DappNav";
import PortfolioCard from "./../dApp/PortfolioCard";

const Subscriptions = () => {
  const Web3Api = useMoralisWeb3Api();
  const { user, isAuthenticated, isWeb3Enabled } = useMoralis();
  var [ExpertwalletToken, SetExpertWalletToken] = useState([]);
  var [WalletToken, SetWalletToken] = useState([]);

  //Expert Token Balances
  const fetchExpertTokenBalances = async () => {
    const options = {
      chain: "rinkeby",
      address: "0xF3fb3Cb8b34F5331B82219183c5AdEf40EE10ba5",
    };
    const tokens = await Web3Api.account.getTokenBalances(options);
    SetExpertWalletToken(tokens);
  };

  fetchExpertTokenBalances();

  //User Token Balances
  const fetchUserTokenBalances = async () => {
    const options = {
      chain: "rinkeby",
    };
    const tokens = await Web3Api.account.getTokenBalances(options);
    SetWalletToken(tokens);
  };

  fetchUserTokenBalances();

  //Withdraw funds
  async function withdraw() {}

  return isAuthenticated ? (
    <div className="bg-gradient-to-t from-darkestBlue to-black h-screen text-dullBg">
      <nav>
        <DappNav />
      </nav>
      <div className="h-5/6 container mx-auto flex flex-col items-center justify-center">
        <header className="pb-10 text-2xl text-primaryBlue">
          Your Subscriptions
        </header>
        <div>
          <table border="1" cellPadding="3" id="printTable">
            <tbody>
              <tr>
                <th>Token</th>
                <th>Symbol</th>
                <th>Balance</th>
                <th>Token Address</th>
              </tr>

              {ExpertwalletToken.map((Token) => (
                <tr>
                  <td> {Token.name} </td>
                  <td> {Token.symbol} </td>
                  <td> {Token.balance} </td>
                  <td> {Token.token_address} </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div>
          <button onClick={withdraw}> Withdraw funds </button>
        </div>
      </div>
    </div>
  ) : (
    <div className="bg-gradient-to-t from-darkestBlue to-black h-screen text-dullBg">
      <nav>
        <DappNav />
      </nav>
      <div className="h-5/6 container mx-auto flex flex-col items-center justify-center"></div>
    </div>
  );
};

export default Subscriptions;
