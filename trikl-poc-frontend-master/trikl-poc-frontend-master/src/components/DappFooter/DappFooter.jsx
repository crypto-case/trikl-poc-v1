import React from "react";

const DappFooter = () => {
  return (
    <div
      className="absolute bottom-0 pb-5 w-screen text-center
    text-gray px-10"
    >
      Currently on Rinkey Testnet | Queries? Drop an email to{" "}
      <a className="underline font-semibold" href="mailto: triklhq@gmail.com">
        triklhq@gmail.com
      </a>{" "}
      <br />
      All rights reserved &#169; Trikl
    </div>
  );
};

export default DappFooter;
