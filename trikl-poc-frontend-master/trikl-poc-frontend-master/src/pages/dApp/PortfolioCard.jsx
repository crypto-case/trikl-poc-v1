import * as React from "react";
import { useState } from "react";
import someImage from "../../assets/man1.jpg";
import Popup from "reactjs-popup";
import { Link } from "react-router-dom";
import "./Dapp.css";
import { useMoralis, useMoralisWeb3Api } from "react-moralis";
import ExpertDashboard from "../expert/ExpertDashboard";

const PortfolioCard = () => {
  const { user, isAuthenticated } = useMoralis();

  return (
    <div className="bg-transparentBlue sm:w-96 font-poppins p-6 rounded-xl border-2 border-primaryBlue">
      <header className="flex gap-5 pb-5">
        <img
          className="h-16 w-16 rounded-xl shadow-lg object-cover"
          src={someImage}
        />
        <div className="flex flex-col text-left">
          <p className="font-light text-gray">30d Return</p>
          <div className="text-4xl text-gainGreen font-light">134.67%</div>
        </div>
      </header>

      <div className="flex flex-col justify-start text-left pb-5">
        <h2 className="text-2xl w-full pb-2">Crypto Evergreen Fund</h2>
        <p className="font-light text-gray">by TriklOfficial</p>
      </div>
      <hr className="pb-5 text-blackish" />
      <div className="flex justify-between pb-5 text-dullBg">
        <span>14.2k Investors</span>
        <span className="text-gray">|</span>
        <span>Rating 4.7+</span>
      </div>

      <hr className="pb-5 text-blackish" />
      <section className="flex flex-col justify-between">
        {isAuthenticated ? (
          <Link
            to="/expert-dashboard"
            className="button w-full bg-primaryBlue px-8 py-2 mb-2 rounded-full font-semibold"
          >
            Copy Trade
          </Link>
        ) : (
          <Popup
            trigger={
              // <a href="expert-dashboard">
              <button className="button w-full bg-primaryBlue px-8 py-2 mb-2 rounded-full font-semibold">
                Copy Trade
              </button>
              // </a>
            }
            modal
          >
            <span className="w-full flex justify-center font-semibold bg-accent py-10 text-blackish text-xl shadow-xl">
              Please connect your wallet to continue!
            </span>
          </Popup>
        )}

        {/* <a className="font-light text-primaryBlue hover:text-accent" href="">
          Know More
        </a> */}
      </section>
    </div>
  );
};

export default PortfolioCard;
