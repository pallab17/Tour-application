import React from "react";
import Image from "next/image";
import Block from "./Block";

const Header1 = () => {
  return (
    <div className="flex justify-between items-center h-24 px-10 border-b-2 border-gray-300">
      <Image
        src={"/logo.png"}
        alt="logo"
        height={200}
        width={200}
        className="w-28 h-28"
      />
      <div className=" border-r-2 border-gray-300 h-full flex ">
      <Block title={"Become a member"} para={"Additional 0% off on stays."} />
        <Block
          title={"OYO for business"}
          para={"Trusted by 5000 corporates."}
        />
        <Block title={"List your property"} para={"Start earning in 30 min."} />
        <Block title={"987654321"} para={"Call us to book now."} />
        <div className=" flex items-center px-3 ">
        <Image
    src={"/demo.svg"}
    alt='demo'
    height={200}
    width={200}
    className=' h-10 w-10 rounded-full mr-5 '
    />
    <h3 className=" font-bold ">LOGIN / SIGNUP</h3>

        </div>
      </div>
      
    </div>
  );
};

export default Header1;
