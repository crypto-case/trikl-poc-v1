import React from "react";
import ScrollButton from "../../../components/MiniComponents/ScrollButton";
import AnimatingText from "./AnimatingText";

const Hero = () => {
  return (
    <div className="font-poppins text-dullBg px-16 md:px-0">
      <header className="py-36">
        <h2 className="text-3xl md:text-5xl pb-5 md:pb-10">
          <div id="animatedContainer" className="mb-2 md:mb-4">
            <span className="">Want Crypto Gains, But </span>
            <span className="text-accent w-max">
              {/* <span className="invisible">Market Research Is Tedious?</span> */}

              <span className="">
                <AnimatingText />
              </span>
            </span>
          </div>
          <div>
            Copy Trade On <span className="font-semibold">Trikl</span>
          </div>
        </h2>

        <p className="text-dullBg text-base md:text-xl font-light pb-10">
          Forget tedious research and make money while you sleep by copying an
          expert trader.
          <br />
          Or if you're already earning greating returns, join Cryptocase to earn
          more.
        </p>
        <div className="flex flex-col md:flex-row justify-center gap-5">
          <button className="bg-primaryBlue px-8 py-1 rounded-full font-semibold">
            <a href="launch-dapp">Launch App &#62;</a>
          </button>
          {/* <button className="bg-transparent px-5 py-1 rounded-full text-accent">
            Learn More
          </button> */}
        </div>
      </header>
      <a href="#whyTrikl">
        <div className="hidden w-max mx-auto md:flex backdrop-blur-md bg-oneMoreDark rounded-xl p-5">
          <ScrollButton />
        </div>
      </a>
    </div>
  );
};

export default Hero;
