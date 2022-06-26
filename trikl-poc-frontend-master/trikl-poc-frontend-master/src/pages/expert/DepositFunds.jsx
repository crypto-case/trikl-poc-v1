import React, { useEffect, useState } from "react";
import { useMoralis, useWeb3ExecuteFunction } from "react-moralis";

const DepositFunds = () => {
  const {
    user,
    Moralis,
    authenticate,
    isAuthenticated,
    isWeb3Enabled,
    enableWeb3,
  } = useMoralis();
  const contractProcessor = useWeb3ExecuteFunction();
  var [funds, setFunds] = useState();

  useEffect(() => {
    const init = async () => {
      if (!isWeb3Enabled) {
        await enableWeb3();
      }
    };
    init();
  }, []);

  //Deposit function - interacting with smart contract
  async function deposit() {
    let options = {
      contractAddress: "0xF855633a4a461F5Fc6742e8ab491B9C0FbFd39E3",
      functionName: "deposit",
      abi: [
        {
          inputs: [],
          name: "deposit",
          outputs: [],
          stateMutability: "payable",
          type: "function",
        },
      ],
      msgValue: Moralis.Units.ETH(funds),
    };
    await contractProcessor.fetch({
      params: options,
      onSuccess: () => {
        console.log("Success");
      },
      onEror: (error) => {
        console.log(error);
      },
    });
  }

  return (
    <div>
      <div className="flex flex-col justify-start text-left pb-5">
        <h2 className="text-2xl w-full pb-2">Crypto Evergreen Fund</h2>
        <p className="font-light text-gray">by TriklOfficial</p>
      </div>
      <hr className="pb-5 text-blackish" />
      <h2 className="pb-2">
        Enter the amount you would like to Deposit in this portfolio
      </h2>
      <div className="flex justify-between pb-5 text-slate-900">
        <input
          type="number"
          step="any"
          className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
      focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
      disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
      invalid:border-pink-500 invalid:text-pink-600
      focus:invalid:border-pink-500 focus:invalid:ring-pink-500
    "
          min="0"
          value={funds}
          onChange={(e) => {
            setFunds(e.target.value);
          }}
        />
      </div>

      <hr className="pb-5 text-blackish" />
      <section className="flex flex-col justify-between">
        <button
          className="w-full bg-primaryBlue px-8 py-2 rounded-full text-white text-center font-semibold mt-5"
          onClick={deposit}
        >
          Start Copying
        </button>

        {isAuthenticated ? (
          <button
            className="pt-2"
            onClick={() => authenticate({ signingMessage: "test" })}
          >
            Authenticate
          </button>
        ) : (
          <></>
        )}
      </section>
    </div>
  );
};

export default DepositFunds;
