import { Loader, TableItem } from "./Table.jsx";
import Button from "./Button.jsx";
import { useAccount } from "wagmi";
import { useConnectModal } from "@rainbow-me/rainbowkit";
import useAxios from "axios-hooks";
import { useEffect } from "react";

const LeaderBoardRank = ({ questId }) => {
  const { address } = useAccount();
  const { openConnectModal } = useConnectModal();

  const [{ data: data2, loading }, fetchUserRank] = useAxios(
    `/spaces/${address}/rank?space_ids=${questId}&type=unified`,
    { manual: true },
  );

  useEffect(() => {
    if (address) {
      fetchUserRank();
    }
  }, [address]);

  return (
    <>
      <h4 className="font-helvetica mb-6">Your rank</h4>
      {address ? (
        loading ? (
          <Loader />
        ) : data2?.rank > 0 ? (
          <TableItem points={222} rank={88} walletAddress={address} />
        ) : (
          <div className="p-[20px] bg-[#A4FF00] rounded-xl flex flex-col justify-center items-center">
            <p className="mb-[10px] text-[20px] font-helvetica text-center">
              Unranked
            </p>
            <p className=" mt-0 font-helvetica text-center">
              Start participating in quest to get on the leaderboard for amazing
              rewards!
            </p>
          </div>
        )
      ) : (
        <div className="p-[20px] bg-[#A4FF00] rounded-xl flex flex-col justify-center items-center">
          <p className="my-[20px] font-helvetica text-center">
            Connect your wallet to view your current rank in the leaderboard
          </p>
          <Button title="Conect Wallet" onClick={openConnectModal} />
        </div>
      )}
    </>
  );
};

export default LeaderBoardRank;
