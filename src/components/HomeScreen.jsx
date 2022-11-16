import React, { useState } from "react";
import { categoryDate } from "../data";
import { AiOutlineTwitter } from "react-icons/ai";
import { SiDiscord } from "react-icons/si";
import { IoIosRocket } from "react-icons/io";

import { Link } from "react-router-dom";
import { images } from "../constants";
import "./HomeScreen.css";

const HomeScreen = () => {
  return (
    <div className="bg-black md:h-[100vh]">
      <div>
        <div className="flex justify-between items-center px-2 pt-3 ">
          <img src={images.rebelion} alt="" className="w-[40px]" />
          <div className="flex items-center justify-center gap-3 md:gap-6">
            <span
              className="text-[20px] leading-6 font-bold max-w-[50px] md:max-w-full cursor-pointer text-transparent bg-clip-text bg-gradient-to-r
             from-[#840098] to-[#4e6ef4] animate-pulse"
            >
              Buy our token
            </span>
            <span
              className="text-[20px] leading-6 font-bold max-w-[50px] md:max-w-full cursor-pointer text-transparent bg-clip-text bg-gradient-to-r
             from-[#840098] to-[#4e6ef4] animate-pulse"
            >
              Buy our NFT
            </span>
          </div>
          <span
            className="text-white border-2 border-white rounded-full 
               flex items-center justify-center px-6 py-2 "
          >
            <Link to="/wallet" className="w-ful">
              connect
            </Link>
          </span>
          <div className="hidden md:flex">
            <span className=" flex gap-4">
              <a href="https://discord.com/SyCvs298Dx">
                <SiDiscord
                  size={26}
                  className="text-white border-2 border-white rounded-full"
                />
              </a>
              <a
                href="
              https://twitter.com/RebellionProj"
              >
                <AiOutlineTwitter
                  size={26}
                  className="text-white border-2 border-white rounded-full"
                />
              </a>
              <a href="https://therebellionproject.gitbook.io/the-rebellion-project-whitepaper/introduction/the-rebellion-project">
                <IoIosRocket
                  size={26}
                  className="text-white border-2 border-white rounded-full"
                />
              </a>
            </span>
          </div>
        </div>

        <div className="flex items-center justify-center flex-col text-white mt-10 p-4">
          <h1 className="text-[2.5rem] font-bold text-center">
            REBELLION CAPITAL TOKEN PRESALE
          </h1>
          <p className="text-[21px] text-white text-center mb-3 semibold">
            Whitelist presale commences Thursday October 6th at 18:00 UTC.
          </p>
          <p className="text-[21px] text-white text-center mb-3 semibold">
            {" "}
            Purchases are made in USDC for a minimum contribution of $100 and a
            max allocation of $5,000.
          </p>
          <p className="text-[21px] text-white text-center mb-3 semibold">
            The presale will be live for 24 hours and end on Friday October 7th
            at 18:00 UTC.
          </p>
          <p className="text-[21px] text-white text-center mb-3 semibold">
            Upon purchase you shall receive a coupon which will be transferable
            for the relevant amount of tokens upon token launch.
          </p>
          <span className="flex items-center justify-center gap-2">
            Join us on
            <span
              className="text-[20px] leading-6 font-bold  text-transparent bg-clip-text bg-gradient-to-r
             from-[#840098] to-[#4e6ef4] animate-pulse"
            >
              Discord
            </span>
          </span>
        </div>

        <div>
          <h1 className="text-white text-center text-lg">
            Please connect your wallet
          </h1>

          <div
            className="flex flex-col items-center shadow-lg bg-[#1d1c1c] w-[330px] h-[250px]
        mx-auto rounded-xl px-3 justify-around mt-8 "
          >
            <span className="w-full px-3 py-2 text-center text-lg text-white rounded-lg border-2 border-[#840098] ">
              <Link to="/wallet">connect</Link>
            </span>
            <p className="text-center text-white text-lg">
              Make sure you MetaMask wallet is connected
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeScreen;
