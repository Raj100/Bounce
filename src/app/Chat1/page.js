'use client';
import React from "react";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import IconSideMenu from "@/components/IconSideMenu/IconSideMenu";
import { useState } from "react";
const page = () => {
  let [open,setOpen]=useState(false);
  return (
    <div className="min-h-screen bg-black w-full flex flex-col">
      <Navbar></Navbar>
      <div className={` text-center text-white bg-black text-2xl pt-4 flex`}>
      <div className="z-10 px-2" onClick={()=>{setOpen(!open);}} ><i className={`px-4 cursor-pointer fa-solid ${open ? "fa-arrow-left" :"fa-bars"}`}></i></div>
      <h1 className="grow">Chating with Professor Byte</h1>
      </div>
      <IconSideMenu isOpen={open}></IconSideMenu>
        <div className={`${open && "pl-20"} grid grid-cols-3 lg:grid-cols-4 bg-black h-full w-full grow p-6 `}>


          <div className="h-full bg-bgdark border relative bg-bgdark hidden md:block overflow-y-scroll">
            <div className="text-white bg-red-500 text-center p-2">Chats</div>
            <div className="p-2 flex w-full items-center border-b ">
              <div className="w-8 h-8 rounded-full bg-white "></div>
              <div className="inline text-white p-2">Professor Byte</div>
            </div>
            <div className="p-2 flex w-full items-center border-b">
              <div className="w-8 h-8 rounded-full bg-white "></div>
              <div className="inline text-white p-2">Professor Byte</div>
            </div>
          </div>





          <div className="flex flex-col h-full bg-bgdark border relative col-span-3">
            <div className="text-white bg-cyan-700 text-center p-2">
              Cyberpunk Bot
            </div>

            <div className="bg-black grow h-full mb-10">
              <div className="p-2 flex w-full items-center">

                <div className="w-8 h-8 rounded-full bg-white "></div>
                <div className="inline text-white p-2">Hi Who are You?</div>

              </div>
            </div>

            <div className="absolute bottom-0 p-2 w-full flex">
              <input className="w-full p-2" type="text" />
              <div className="shrink-0 p-2 text-3xl rounded-md bg-blue-500 mx-2">
                <i className="fa-regular fa-paper-plane"></i>
              </div>
            </div>

          </div>
        </div>
      <Footer></Footer>
    </div>
  );
};

export default page;
