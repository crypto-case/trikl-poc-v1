import React from "react";
import polygonLogo from "../../assets/polygon-logo.svg";
import { useMoralis, useMoralisWeb3Api } from "react-moralis";

const DappNav = () => {
  const Web3Api = useMoralisWeb3Api();
  const { user, isAuthenticated, authenticate, logout } = useMoralis();

  const login = async () => {
    console.log("Test");
    if (!isAuthenticated) {
      await authenticate({ signingMessage: "Log in using Moralis" })
        .then(function (user) {
          console.log("logged in user:", user);
          console.log(user.get("ethAddress"));
        })
        .catch(function (error) {
          console.log(error);
        });
    }

    const fetchTokenBalances = async () => {
      const options = {
        chain: "rinkeby",
      };
      const balances = await Web3Api.account.getTokenBalances(options);
      console.log(balances);
    };

    fetchTokenBalances();
  };

  return (
    <>
      <nav className="z-50 sticky top-0 font-poppins text-accent h-16 flex items-center backdrop-blur-lg bg-oneMoreDark/70">
        <div className="container mx-auto flex justify-between px-10">
          <h1 className="text-3xl font-semibold lg:flex-1 text-left">
            <a className="md:hidden" href="/">
              T
            </a>
            <a className="hidden md:block" href="/">
              Trikl
            </a>
          </h1>

          <div className="flex gap-5 items-center justify-end font-light flex-1">
            <div className="hidden md:flex items-center gap-2 text-white/70">
              <img className="h-8" src={polygonLogo} />
              <span className="">Polygon</span>
            </div>

            {isAuthenticated ? (
              <div className="flex gap-5">
                <button className="bg-transparentBlue border-primaryBlue border-2 px-8 py-1 rounded-full text-white">
                  <a href="user-dashboard">
                    {user.attributes.ethAddress.substring(0, 7) +
                      "..." +
                      user.attributes.ethAddress.substring(38, 42)}
                  </a>
                </button>
                <button className="w-max" onClick={() => logout()}>
                  Log Out
                </button>
              </div>
            ) : (
              <button
                onClick={login}
                className="w-max bg-transparentBlue border-primaryBlue border-2 px-8 py-1 rounded-full text-white"
              >
                Connect Wallet
              </button>
            )}
          </div>
        </div>
      </nav>
    </>
  );
};

export default DappNav;
