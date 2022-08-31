import React, { useState,useEffect } from "react";
import Image from "next/image";
import ConnectButton from "../ConnectButton";
import Link from "next/link";
import Countdown from "react-countdown";


type Render = {
  days: any;
  hours: any;
  minutes: any;
  seconds: any;
  completed: any;
  total:any
};

const Header = () => {
  function diff_miliseconds(dt2:any, dt1:any) 
 {

  var diff =(dt2 - dt1);
  return Math.abs(Math.round(diff));

 }



let dt1 =  Date.now();
let dt2 = new Date("2022,08,31");

const result = diff_miliseconds(dt2,dt1)


  const [data, setData] = useState({date: Date.now(), delay:result})
  let wantedDelay = result;

  const getLocalStorageValue = (s:any) => localStorage.getItem(s);
// currentTime = Date.now()

// const currentTime:any = new Date.now()
// 

  useEffect(() => {
    const savedDate:any = getLocalStorageValue("end_date");
    if (savedDate != null && !isNaN(savedDate)) {
      const currentTime = Date.now();
      const delta = parseInt(savedDate, 10) - currentTime;

      //Do you reach the end?
      if (delta > wantedDelay) {
        //Yes we clear uour saved end date
        // @ts-ignore
        if (localStorage.getItem("end_date").length > 0)
          localStorage.removeItem("end_date");
      } else {
        //No update the end date  
        setData({ date: currentTime, delay: delta });
      }
    }
  }, []);
  const renderer: React.FunctionComponent<Render> = ({
    days,
    hours,
    minutes,
    seconds,
    completed,
  }) => {
    
    if (completed) {
      // Render a completed state
      return (
        <Link className="no-underline" href="/mint">
          <button className="px-2 py-2 text-sm font-bold text-[#F02A2A] border-2 no-underline border-[#F02121] rounded-md md:px-6 md:py-4 lg:px-6 lg:py-4 hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 mx-7">
            Mint NFT
          </button>
        </Link>
      );
    } else {
      // Render a countdown
      return (
        <div className="flex flex-col">
          <span className="text-[#0F0F0F] ">
            <i className="text-xm md:text-xl timer_desc"><p>Whitelist ends in</p></i>
          </span>
          <div className="mr-4 text-[#F02A2A] font-bold timer text-sm md:text-xl">
            <p>{days} days : {hours} hours : {minutes} mins : {seconds} secs</p>
          </div>
        </div>
      );
    }
  };

  return (
    <div className="box-border fixed z-50 flex items-center justify-between w-full px-5 py-5 mx-auto font-bold bg-pink-100 md:space-x-0 lg:space-x-0 md:px-10 md:py-6 lg:px-10 lg:py-6">
      <Link   href="/home">
        <a className="hidden md:inline-flex lg:inline-flex">
          {" "}
          <Image
            src="/images/logo.png"
            height={70}
            width={200}
            alt="Web3bridge-logo"
          />
        </a>
      </Link>
      <Link  href="/home">
        <a className="mr-2 md:hidden lg:hidden">
          {" "}
          <Image
            src="/images/logo2.png"
            height={24}
            width={70}
            alt="Web3bridge-logo"
          />
        </a>
      </Link>
      <div className="flex items-center justify-between md:flex-row">
        <div>
          <Countdown date={data.date + data.delay}
          
        renderer={renderer} 
        onStart={(delta) => {
          //Save the end date
          if (localStorage.getItem("end_date") == null)
            localStorage.setItem(
              "end_date",
              JSON.stringify(data.date + data.delay)
            );
        }}

        onComplete={() => {
          if (localStorage.getItem("end_date") != null)
            localStorage.removeItem("end_date");
        }}
        />
          
        </div>
        <ConnectButton />
      </div>
    </div>
  );
};

export default Header;
