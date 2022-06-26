import React from "react";
import whyImage1 from "../../../assets/whyImage1.png";
import whyImage2 from "../../../assets/whyImage2.png";
import whyImage3 from "../../../assets/whyImage3.png";

const WhyTrikl = () => {
  return (
    <div className="lg:w-2/3 px-10 lg:px-0 mx-auto py-28 text-xl text-center lg:text-left">
      <div className="text-primaryBlue text-xl pb-3">Why Tikl?</div>
      <h2 className="text-4xl font-bold pb-5">
        Amazing returns with zero effort
      </h2>
      <p>
        Globally crypto market is a massive opportunities. However, it’s
        overwhelming to constantly check for market updates, upcoming projects,
        and future potential. Cryptocase helps users in grabbing those
        opportunities while also rewarding those who put their heart and soul
        into finding these hidden opportunities.
      </p>
      {/* ////////////   CARDS   //////////////// */}
      <div className="py-10 lg:w-4/5 mx-auto flex flex-col gap-10">
        {/* ////////////   CARD 1   //////////////// */}
        <section className="mx-auto flex flex-col lg:flex-row items-center ">
          <img src={whyImage1} alt="Copy Trade with crypto experts on Trikl" />
          <div className="lg:pl-10 lg:pr-20">
            <h3 className="text-3xl font-semibold pb-3">
              Trade With Expert with One Click
            </h3>
            <p className="">
              Forget doing tedious research and tracking crypto news 24x7. Just
              copy expert crypto traders to earn amazing returns.
            </p>
          </div>
        </section>

        {/* ////////////   CARD 2   //////////////// */}
        {/* for desktop */}
        <section className="mx-auto hidden lg:flex flex-row items-center">
          <div className="lg:pl-5 lg:pr-10">
            <h3 className="text-3xl font-semibold pb-3">
              Decentralized & Secured With Blockchain
            </h3>
            <p className="">
              YOU are always the owner of your data on Trikl and all your data
              is secured using world's top blockchain.
            </p>
          </div>
          <img src={whyImage2} alt="Trikl is decentralized and secure" />
        </section>

        {/* for mobile */}
        <section className="mx-auto flex lg:hidden flex-col lg:flex-row items-center">
          <img src={whyImage2} alt="Copy Trade with crypto experts on Trikl" />
          <div className="lg:pl-10 lg:pr-20">
            <h3 className="text-3xl font-semibold pb-3">
              Decentralized & Secured With Blockchain
            </h3>
            <p className="">
              YOU are always the owner of your data on Trikl and all your data
              is secured using world's top blockchain.
            </p>
          </div>
        </section>

        {/* ////////////   CARD 3   //////////////// */}
        <section className="mx-auto flex flex-col lg:flex-row items-center">
          <img src={whyImage3} alt="Copy Trade with crypto experts on Trikl" />
          <div className="lg:pl-10 lg:pr-20">
            <h3 className="text-3xl font-semibold pb-3">
              Earn More with Zero Extra Effort
            </h3>
            <p className="">
              Share your high-earning portfolio, choose subscription charges,
              and start earning passive income today.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default WhyTrikl;
