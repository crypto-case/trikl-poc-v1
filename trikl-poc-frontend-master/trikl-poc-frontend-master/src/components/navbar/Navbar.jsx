import React, { useEffect } from "react";
import "./Navbar.css";
import { useMoralis, useMoralisWeb3Api } from "react-moralis";

// icons
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";

const Navbar = () => {
  const Web3Api = useMoralisWeb3Api();
  const {
    authenticate,
    isAuthenticated,
    user,
    account,
    authError,
    logout,
    Moralis,
  } = useMoralis();

  if (isAuthenticated) {
    console.log("Test1");
    return (
      <div>
        <h1> Welcome to Trikl, {user.attributes.ethAddress} </h1>
        <button onClick={() => logout()}> Logout </button>
      </div>
    );
  }
  // eslint-disable-next-line react-hooks/exhaustive-deps

  const login = async () => {
    console.log("Test");
    if (!isAuthenticated) {
      await authenticate({ signingMessage: "Log in using Moralis" });
      await Moralis.enableWeb3()
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

    // async function fetchTokenBalances() {
    //   const balances = await Web3Api.account.getTokenBalances();
    //   console.log("testing");
    //   console.log(balances);
    // }

    fetchTokenBalances();
  };

  return (
    <>
      <nav className="z-50 sticky top-0 w-screen font-poppins bg-white text-primaryBlue h-16 flex items-center">
        <div className="container md:px-20 mx-auto flex justify-between">
          <h1 className="text-3xl font-semibold">
            <a href="/">trikl . . .</a>
          </h1>
          <div className="flex gap-10 box-content items-center">
            <button className="scale-150">
              <AccountCircleOutlinedIcon size="large" />
            </button>
            <button className="scale-150" onClick={login}>
              <AccountBalanceWalletOutlinedIcon />
            </button>
          </div>
        </div>

        {authError && (
          <div role="alert" className="pt-12">
            <div className="bg-red-500 text-white font-bold rounded-t px-4 py-2">
              Authentication has failed!
            </div>
            <div className="border border-t-0 border-red-400 rounded-b bg-red-100 px-4 py-3 text-red-700">
              <p> {authError.message} Try again </p>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
