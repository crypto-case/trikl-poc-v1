import React from "react";
import earnImage from "../../../assets/earnImage.png";
import "../Home.css";
import Popup from "reactjs-popup";

const EarnReturn = () => {
  return (
    <div className=" lg:w-2/3 text-white mx-auto py-28 text-xl text-center lg:text-left flex flex-col lg:flex-row justify-between items-center">
      {/* /////////////// LEFT /////////////// */}
      <section className="px-10 lg:pr-16">
        <div className="text-accent text-xl pb-3">
          Already Earning Great Return?
        </div>
        <h2 className="text-4xl font-bold pb-5">
          Earn Passive Income With Your Crypto Portfolio
        </h2>
        <p className="text-dullBg font-light">
          Simply connect your decentralized wallet and start earning commission
          whenever people join your cryptocase
        </p>
        <div className="flex justify-center lg:justify-start">
          <Popup
            trigger={
              <button className="bg-primaryBlue px-8 py-1 rounded-full font-semibold flex items-center mt-5">
                Join Waitlist &#62;
              </button>
            }
            modal
          >
            <span className="w-full flex justify-center font-semibold bg-accent py-10 text-blackish text-xl shadow-xl text-center">
              Woah... Even hackathon judges wanna join us. Thank You! <br />{" "}
              We're launching this soon
            </span>
          </Popup>
        </div>
      </section>

      {/* /////////////// RIGHT /////////////// */}
      <section className="py-10 lg:py-0 ">
        <img
          id="earnImage"
          src={earnImage}
          alt="Copy Trade with crypto experts on Trikl"
        />
      </section>
    </div>
  );
};

export default EarnReturn;
