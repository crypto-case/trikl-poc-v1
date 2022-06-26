import React from "react";
import LandingImage from "../../../assets/LandingPage.png";

const Landing = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between md:h-[100vh] items-center">
      <div className="pt-20 md:pt-0 flex flex-col justify-center md:container mx-auto md:w-2/3 px-10 md:px-auto">
        <h1 className="text-3xl lg:text-6xl font-semibold pt-10 text-center md:text-left">
          Decentralized Social
          <span className="text-primaryBlue"> Crypto </span>
          Investing
        </h1>
        <p className="py-5 px-5 md:px-0 md:pr-20 text-center md:text-left">
          Simply buy the best performing crypto portfolios and earn amazing
          returns without worrying about tedious research. Or if you’re already
          earning greating returns, share it to earn even more.
        </p>
        <a
          type="button"
          href="#joinwaitlist"
          class="text-white bg-primaryBlue py-1 px-8 rounded-full w-max mx-auto md:mx-0"
        >
          Join Waitlist
        </a>
      </div>
      <div className="pt-14 pl-5 md:pl-0">
        <img src={LandingImage} alt="HeroImage" className="w-auto" />
      </div>
    </div>
  );
};

export default Landing;
