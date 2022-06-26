import React from "react";
import DappFooter from "../../components/DappFooter/DappFooter";
import DappNav from "../../components/DappNav/DappNav";
import "./Dapp.css";
import ParticlesBg from "./ParticlesBg";
import PortfolioCard from "./PortfolioCard";

const DappHome = () => {
  return (
    <div id="dappContainer" className="h-screen text-dullBg">
      <div className="absolute -z-50">
        <ParticlesBg />
      </div>
      <nav>
        <DappNav />
      </nav>

      <div className="h-5/6 w-full sm:w-auto sm:container sm:mx-auto flex flex-col items-center justify-center">
        <header className="pb-10 text-2xl text-primaryBlue tracking-widest font-semibold uppercase">
          Explore portfolios
        </header>

        <section className="bg-oneMoreDark">
          <PortfolioCard />
        </section>
      </div>
      <footer>
        <DappFooter />
      </footer>
    </div>
  );
};

export default DappHome;
