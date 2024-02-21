import "@rainbow-me/rainbowkit/styles.css";

import SideBar from "./SideBar.jsx";
import Header from "./Header.jsx";
import Socials from "./Socials.jsx";
import { useLocation } from "react-router-dom";
import BanditProvider from "../providers/BanditProvider.jsx";
import { useMediaQuery } from "react-responsive";

import {
  RainbowKitProvider,
  lightTheme,
  getDefaultWallets,
} from "@rainbow-me/rainbowkit";
import { WagmiConfig, configureChains, createConfig } from "wagmi";
import { astarZkatana } from "wagmi/chains";
import { publicProvider } from "wagmi/providers/public";
import { useEffect, useState } from "react";

const projectId = "52a496e42a15ce4af7cc1d2f5ab6729f";

const { chains, publicClient } = configureChains(
  [astarZkatana],
  [publicProvider()],
);

const { connectors } = getDefaultWallets({
  appName: "App",
  projectId,
  chains,
});

const wagmiConfig = createConfig({
  autoConnect: true,
  connectors,
  publicClient,
});
const Layout = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { pathname } = useLocation();
  const isDesktop = useMediaQuery({ query: `(min-width: 768px)` });

  const isHomePage = pathname === "/";
  const home = "#CAFFEF";
  const generic = "#FCFAEF";

  useEffect(() => {
    if (isDesktop && !sidebarOpen) {
      setSidebarOpen(true);
    }
  }, [isDesktop]);
  return (
    <WagmiConfig config={wagmiConfig}>
      <RainbowKitProvider
        chains={chains}
        theme={lightTheme({
          accentColor: "#3042FB",
        })}
      >
        <BanditProvider>
          <div className="flex w-full h-full">
            {sidebarOpen && (
              <div className="w-full md:w-[22%] h-full fixed z-40">
                <SideBar closeSidebar={() => setSidebarOpen(false)} />
              </div>
            )}
            <main
              style={{ backgroundColor: isHomePage ? home : generic }}
              className={`flex-1 md:ml-[22%] w-full md:w-[calc(100% - 22%)] z-10`}
            >
              <div className="px-[16px] md:px-[100px] mb-[24px]">
                <Header openSidebar={() => setSidebarOpen(true)} />
              </div>
              {children}
              <Socials />
            </main>
          </div>
        </BanditProvider>
      </RainbowKitProvider>
    </WagmiConfig>
  );
};

export default Layout;
