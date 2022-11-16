import React, { useState } from "react";
import { AiOutlineInstagram, AiOutlineTwitter } from "react-icons/ai";
import { SiDiscord } from "react-icons/si";
import { Link } from "react-router-dom";
import { dummyData } from "../data";
import Connecting from "./Connecting";
import Header from "./Header";
import WalletId from "./WalletId";

const Wallets = () => {
  // const [visible, setVisible] = useState(true);

  // setTimeout(() => {
  //   setVisible(false);
  // }, 3000);

  return (
    <div>
      <Header path="/" />

      <div
        className="flex flex-col items-center justify-center mt-[6rem] mb-[1rem] 
      lg:max-w-[60vw] lg:mx-auto"
      >
        <h1 className="text-[1.5rem] font-bold">Choose Wallet</h1>
        <p className="text-gray-600">Select a wallet to continue</p>
        <p className="text-black font-semibold text-sm leading-6 text-center px-3">
          open protocol to communicate securely between wallets and Dapps (Web3
          Apps)
        </p>
        <p className="text-black font-semibold text-sm leading-6 text-center px-3">
          The protocol establishes a remote connection using a Bridge server.
        </p>
      </div>

      <div className="flex md:gap-5 flex-wrap px-3 items-center justify-center lg:max-w-[60vw] lg:mx-auto">
        {dummyData.map((item, index) => (
          <WalletId key={index} item={item} />
        ))}
      </div>

      <div className="h-[2px] bg-gray-200 w-full mb-[2rem]" />

      <div className="flex items-center justify-center flex-col">
        <div className="flex gap-4 text-gray-400 mb-3 ">
          <a
            href="#"
            className="text-black bg-white shadow-md rounded-full p-3"
          >
            <AiOutlineInstagram size={19} />
          </a>
          <a
            href="#"
            className="text-black bg-white shadow-md rounded-full p-3"
          >
            <SiDiscord size={19} />
          </a>
          <a
            href="#"
            className="text-black bg-white shadow-md rounded-full p-3"
          >
            <AiOutlineTwitter size={19} />
          </a>
        </div>
        <p className="text-gray-400 mt-3">© 2018 - 2022</p>
      </div>
    </div>
  );
};

export default Wallets;
