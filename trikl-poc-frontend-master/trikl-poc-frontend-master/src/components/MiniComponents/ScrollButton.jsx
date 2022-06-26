import React from "react";
import "./ScrollButton.css";

const ScrollButton = () => {
  return (
    <section className="example example--2 w-max">
      <div className="flex flex-col items-center justify-center">
        <span className="scroll-icon">
          <span className="scroll-icon__dot"></span>
        </span>
        <h2 className="text-primaryBlue uppercase tracking-widest text-sm py-2">
          Scroll Down
        </h2>
      </div>
    </section>
  );
};

export default ScrollButton;
