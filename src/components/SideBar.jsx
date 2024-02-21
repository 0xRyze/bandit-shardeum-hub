import logo from "../assets/shardeum-white.svg";
import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import Button from "./Button.jsx";
import { useConnectModal } from "@rainbow-me/rainbowkit";

const SideBar = ({ closeSidebar }) => {
  const [isQuestOpen, setIsQuestOpen] = useState(false);
  const { openConnectModal } = useConnectModal();

  const { pathname } = useLocation();
  const isQuestPage = pathname === "/quest";
  const isGalxeQuestPage = pathname === "/quest/galxe-quest";
  const isShardeumQuestPage = pathname === "/quest/shardeum-quest";

  useEffect(() => {
    if (isQuestPage || isShardeumQuestPage || isGalxeQuestPage) {
      setIsQuestOpen(true);
    } else {
      setIsQuestOpen(false);
    }
  }, [isQuestPage, isGalxeQuestPage, isShardeumQuestPage]);

  return (
    <div className="flex flex-col bg-[#3042FB] p-[16px]  md:p-[40px] h-full overflow-y-auto">
      <div className="flex justify-between items-center">
        <img src={logo} alt="logo" className="!w-[217px] !h-[46px]" />
        <div
          className="md:hidden bg-[#ffffff33] rounded-md flex justify-center items-center w-[32px] h-[32px]"
          onClick={closeSidebar}
        >
          <img src={"/cross.svg"} alt="logo" className="!w-[14px] !h-[14px]" />
        </div>
      </div>
      <div className="mt-[70px] md:mt-[100px]">
        <ul className="s-navigation">
          <Link to="/">
            <li className="s-navigation-item md:text-[40px]">
              Home
              <img
                src="/chevron-white.svg"
                alt=""
                className="s-navigation-item__image md:w-[17px] md:h-[17px]"
              />
            </li>
          </Link>
          <Link to="/quest">
            <li className="s-navigation-item  md:text-[40px]">
              Quest{" "}
              <img
                src="/chevron-white.svg"
                alt=""
                className={`s-navigation-item__image ${isQuestOpen ? "s-navigation-item__image--rotate" : ""}`}
              />
            </li>
          </Link>
          {isQuestOpen && (
            <ul className="s-navigation-item2">
              <Link to="/quest/galxe-quest">
                <li className="flex">
                  {isGalxeQuestPage && (
                    <img
                      className="!w-[24px] !h-[24px] mr-2"
                      src="/arrow-right.svg"
                    />
                  )}
                  Galxe Quest
                </li>
              </Link>
              <Link to="/quest/shardeum-quest">
                <li className="flex  mt-4">
                  {isShardeumQuestPage && (
                    <img
                      className="!w-[24px] !h-[24px] mr-2"
                      src="/arrow-right.svg"
                    />
                  )}
                  Shardeum Quest
                </li>
              </Link>
            </ul>
          )}
          <a href={`https://docs.shardeum.org/faucet/claim`}>
            <li className="s-navigation-item  md:text-[40px]">
              Faucet{" "}
              <img
                src="/chevron-white.svg"
                alt=""
                className="s-navigation-item__image"
              />
            </li>
          </a>
          <a href={`https://${window.origin}/developers/dapps-ecosystem/`}>
            <li className="s-navigation-item  md:text-[40px]">
              Ecosystem{" "}
              <img
                src="/chevron-white.svg"
                alt=""
                className="s-navigation-item__image"
              />
            </li>
          </a>
          <a href={`https://${window.origin}/community/`}>
            <li className="s-navigation-item  md:text-[40px]">
              Community{" "}
              <img
                src="/chevron-white.svg"
                alt=""
                className="s-navigation-item__image"
              />
            </li>
          </a>
          <a href={`https://docs.shardeum.org/`}>
            <li className="s-navigation-item  md:text-[40px]">
              Docs{" "}
              <img
                src="/chevron-white.svg"
                alt=""
                className="s-navigation-item__image"
              />
            </li>
          </a>
        </ul>
      </div>
      <div className="mt-auto block md:hidden">
        <Button title="Connect Wallet" onClick={openConnectModal} />
      </div>

      <a href="https://bandit.network" target="_blank" className="mt-auto">
        <div className="flex flex-col items-center justify-center w-full">
          <h1 className="text-[14px] text-center mb-2 text-white">
            Powered By
          </h1>
          <img src="/bandit-white.png" alt="bandit" className="!w-[100px]" />
        </div>
      </a>
    </div>
  );
};

export default SideBar;
