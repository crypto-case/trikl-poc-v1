import React from "react";
import "./Home.css";
import Navbar from "../../components/navbar/Navbar";
import DappNav from "../../components/DappNav/DappNav";
import ParticlesBg from "../dApp/ParticlesBg";
import WhyTrikl from "./sections/WhyTrikl";
import EarnReturn from "./sections/EarnReturn";
import Footer from "../../components/Footer/Footer";
import Hero from "./sections/Hero";

const Home = () => {
  // const { fetch } = useMoralisCloudFunction("TokenTrnsactions", {
  //   autoFetch: true,
  // });

  // async function getTransactions() {
  //   fetch({
  //     onSuccess: (data) => console.log(data),
  //   });
  // }

  return (
    <div className="scroll-smooth">
      <div className="absolute -z-50">
        <ParticlesBg />
      </div>
      {/* Navbar */}
      <DappNav />
      {/* /////////////HERO SECTION ////////////// */}
      <div className="h-screen flex items-center justify-center">
        <Hero />
      </div>

      {/* /////////////WHY SECTION ////////////// */}
      <div id="whyTrikl" className="bg-dullBg">
        <WhyTrikl />
      </div>

      {/* /////////////  EARN RETURN SECTION ////////////// */}
      <div className="h-screen flex items-center">
        <EarnReturn />
      </div>

      {/* /////////////  FOOTER SECTION ////////////// */}
      <div className="text-gray bg-black">
        <Footer />
      </div>
    </div>
  );
};

export default Home;
