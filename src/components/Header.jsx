import Button from "./Button.jsx";
import { useConnectModal, ConnectButton } from "@rainbow-me/rainbowkit";
import { useAccount } from "wagmi";
import logo from "../assets/shardeum.svg";

const Header = ({ openSidebar }) => {
  const { address } = useAccount();

  const { openConnectModal } = useConnectModal();

  return (
    <div className="mt-[40px]">
      <div
        id="globalMenu"
        className="flex justify-between items-center md:hidden !relative"
      >
        <img src={logo} alt="logo" className="!w-[160px] !h-[35px]" />
        <div className="side-menu !relative" onClick={openSidebar}>
          <div className="menu-btn">
            <div className="inner" style={{}}>
              <div
                style={{
                  translate: "none",
                  rotate: "none",
                  scale: "none",
                  transform: "translate(0px, 0px)",
                }}
              >
                <div className="menu-line top" />
                <div className="menu-line mid" />
                <div className="menu-line bot" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="justify-end hidden md:flex">
        {address ? (
          <ConnectButton />
        ) : (
          <Button title="Connect Wallet" onClick={openConnectModal} />
        )}
      </div>
    </div>
  );
};

export default Header;
