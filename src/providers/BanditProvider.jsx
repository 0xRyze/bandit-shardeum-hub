import { BanditContextProvider } from "@bandit-network/quest-widget";
import { useConnectModal } from "@rainbow-me/rainbowkit";

const BanditProvider = ({ children }) => {
  const { openConnectModal } = useConnectModal();
  return (
    <BanditContextProvider
      cluster={"devnet"}
      apiKey={"73d8ed4eeddc43d8b96e0b08afb675ac"}
      walletSettings={{
        inheritEvmWallets: true,
        onConnectClick: openConnectModal,
      }}
    >
      {children}
    </BanditContextProvider>
  );
};

export default BanditProvider;
