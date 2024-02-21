import { truncateAddress } from "../utils/index.js";

const Table = ({ data = [], isLoading }) => {
  return (
    <div className="w-full font-helvetica">
      <div className="flex">
        <div className=" text-[16px]  md:text-[36px] flex-1 text-left font-bold">
          Ranking
        </div>
        <div className=" text-[16px]  md:text-[36px] flex-1 text-center font-bold">
          Wallet
        </div>
        <div className=" text-[16px]  md:text-[36px] flex-1 text-end font-bold">
          Point Scored
        </div>
      </div>
      <div className="mt-12 w-full">
        {isLoading
          ? [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((i) => <Loader key={i} />)
          : data.map(({ rank, walletAddress, points }) => (
              <TableItem
                key={walletAddress}
                rank={rank}
                walletAddress={walletAddress}
                points={points}
              />
            ))}
      </div>
    </div>
  );
};

export const Loader = () => {
  return (
    <div className="mt-2">
      <div className="flex h-[80px] bg-[#A4FF00] justify-between rounded-xl border-2 border-solid border-black p-6">
        <div className="bg-slate-200 animate-pulse rounded-md h-[30px] w-[5%]"></div>
        <div className="bg-slate-200 animate-pulse rounded-md h-[30px] w-[20%]"></div>
        <div className="bg-slate-200 animate-pulse rounded-md h-[30px] w-[5%]"></div>
      </div>
    </div>
  );
};

export const TableItem = ({ rank, walletAddress, points }) => {
  return (
    <div className="mt-2 w-full">
      <div className="flex h-[80px] bg-[#A4FF00] rounded-xl border-2 border-solid border-black p-6">
        <div className="flex items-center flex-1 text-left text-[30px] font-bold ">
          {rank <= 9 ? `0${rank}` : rank}
        </div>
        <div className="flex justify-center items-center flex-1 text-center font-bold">
          <a
            href={`https://explorer-sphinx.shardeum.org/account/${walletAddress}`}
            target="_blank"
            className="flex items-baseline"
          >
            {truncateAddress(walletAddress, 6)}{" "}
            <img
              src="/externalIcon.svg"
              alt=""
              className="!w-4 !h-4 ml-2 pt-1"
            />
          </a>
        </div>
        <div className="flex justify-end items-center flex-1 text-right font-bold">
          {points}
        </div>
      </div>
    </div>
  );
};

export default Table;
