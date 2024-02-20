import { TableItem } from "./Table.jsx";
import Button from "./Button.jsx";
import { useAccount } from "wagmi";
import { useConnectModal } from "@rainbow-me/rainbowkit";

const LeaderBoardRank = () => {
  const { address } = useAccount();
  const { openConnectModal } = useConnectModal();

  return (
    <div>
      <h4 className="font-helvetica mb-6">Your rank</h4>
      {address ? (
        <TableItem points={222} rank={88} walletAddress={address} />
      ) : (
        <div className="p-[20px] bg-[#A4FF00] rounded-xl flex flex-col justify-center items-center">
          <p className="my-[20px] font-helvetica text-center">
            Connect your wallet to view your current rank in the leaderboard
          </p>
          <Button title="Conect Wallet" onClick={openConnectModal} />
        </div>
      )}
    </div>
  );
};

export default LeaderBoardRank;
