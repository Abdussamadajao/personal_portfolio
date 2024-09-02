import { AnimatePresence } from "framer-motion";
import React from "react";
import Header from "../header";
import Siderbar from "../SideBar";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="grid grid-cols-12 gap-6 px-12 my-12 lg:px-32 sm:px-20 md:px-28 ">
      <div className="col-span-12 p-4 text-center bg-white shadow-custom-light dark:shadow-custom-dark dark:bg-dark-500 lg:col-span-3 rounded-2xl">
        <Siderbar />
      </div>
      <div className="flex flex-col col-span-12 overflow-hidden bg-white shadow-custom-light dark:shadow-custom-dark dark:bg-dark-500 lg:col-span-9 rounded-2xl">
        <Header />
        <AnimatePresence>{children}</AnimatePresence>
      </div>
    </div>
  );
};

export default Layout;
