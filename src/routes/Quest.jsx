import useAxios from "axios-hooks";
import Table from "../components/Table.jsx";
import Card from "../components/Card.jsx";
import Faqs from "../components/Faqs.jsx";
import Button from "../components/Button.jsx";
import Layout from "../components/Layout.jsx";
import { useMemo, useState } from "react";
import Pagination from "../components/Pagination.jsx";
import BanditQuestWidget from "../components/BanditQuestWidget.jsx";
import LeaderBoardRank from "../components/LeaderBoardRank.jsx";
import { useAccount } from "wagmi";

const PAGE_LIMIT = 10;

const Quest = () => {
  const [page, setPage] = useState(0);
  const [{ data, loading, error }, refetch] = useAxios(
    `/spaces/leaderboard?space_ids=${6999999}&offset=${page * PAGE_LIMIT}&limit=${PAGE_LIMIT}&type=unified`,
  );
  const [{ data: data2 }] = useAxios(
    `/spaces/${"0x0ba88f372be4d49b1f2f1bb2f8864207a046c65c"}/rank?space_ids=${6999999}&type=unified`,
  );

  const leaderboardData = useMemo(() => {
    return (data?.data || []).map(({ rank, stats, user }) => ({
      rank,
      walletAddress: user?.walletAddress,
      points: stats?.points,
    }));
  }, [data]);
  return (
    <Layout>
      <div>
        <div className="px-[16px] md:px-[100px] mb-[120px]">
          <h1 className="text-[64px] md:text-[95px] text-center">
            Welcome to Shardeum Incentivized Testnet!
          </h1>

          <p className="text-[16px] md:text-[20px] mt-[32px]  md:mt-[75px] text-center max-w-[70%] mx-auto">
            Participate in campaigns organized by Shardeum, the Shardeum
            community, and Dapps building on Shardeum, and stand a chance to win
            exclusive rewards like NFTs, cash prize, merch and much more
          </p>

          <h1 className="text-[42px] md:text-[85px] text-center mt-[40px]">
            Leaderboard
          </h1>

          <div className="mt-[32px] md:mt-20">
            <div className="mb-16">
              <LeaderBoardRank />
            </div>

            <div>
              <Table isLoading={loading} data={leaderboardData} />

              <div className="mt-[30px] flex justify-center">
                <Pagination
                  onPageChange={(page) => setPage(page - 1)}
                  totalCount={data?.totalResults || 0}
                  currentPage={page + 1}
                  pageSize={PAGE_LIMIT}
                />
              </div>
            </div>
          </div>
        </div>
        <div>
          <h3 className="px-[16px] md:px-[100px] text-[38px] mb-[35px]">
            Instructions
          </h3>
          <div className="p-[20px] border-t-2 border-solid border-[#00000033]">
            <div className="flex items-center px-0 md:px-[100px]">
              <div className="flex items-center">
                <img
                  className="!w-[28px] !h-[28px] mr-[25px]"
                  src="/check.svg"
                  alt="check"
                />
                <p className="text-[16px] md:text-[22px]">
                  Connect with your SHM Wallet
                </p>
              </div>
              <div className="ml-auto">
                <Button title="Learn More" />
              </div>
            </div>
          </div>
          <div className="p-[20px] border-t-2 border-solid border-[#00000033]">
            <div className="flex items-center px-0 md:px-[100px]">
              <div className="flex items-center">
                <img
                  className="!w-[28px] !h-[28px] mr-[25px]"
                  src="/check.svg"
                  alt="check"
                />
                <p className="text-[16px] md:text-[22px]">
                  Complete all quests listed
                </p>
              </div>
              <div className="ml-auto">
                <Button title="Learn More" />
              </div>
            </div>
          </div>
          <div className="p-[20px] border-t-2 border-solid border-[#00000033]">
            <div className="flex items-center px-0 md:px-[100px]">
              <div className="flex items-center">
                <img
                  className="!w-[28px] !h-[28px] mr-[25px]"
                  src="/check.svg"
                  alt="check"
                />
                <p className="text-[16px] md:text-[22px]">
                  There is no limit for transactions
                </p>
              </div>
              <div className="ml-auto">
                <Button title="Learn More" />
              </div>
            </div>
          </div>
          <div className="p-[20px] border-t-2 border-b-2 border-solid border-[#00000033]">
            <div className="flex items-center  px-0 md:px-[100px]">
              <div className="flex items-center">
                <img
                  className="!w-[28px] !h-[28px] mr-[25px]"
                  src="/check.svg"
                  alt="check"
                />
                <p className="text-[16px] md:text-[22px]">
                  Overall Leaderboard will be based on a scoring mechanism{" "}
                </p>
              </div>
              <div className="ml-auto">
                <Button title="Learn More" />
              </div>
            </div>
          </div>

          <div className="px-[100px] py-10 border-b-2 border-solid border-[#00000033]">
            <ul className="list-disc ml-[10%]">
              <li className="mb-2">No of Dapp Interactions</li>
              <li className="mb-2">No of Transactions</li>
              <li className="mb-2">No of Referrals</li>
              <li className="mb-2">Daily/Weekly Transactions</li>
              <li className="mb-2">Total SHM Transferred Amount</li>
            </ul>
          </div>
        </div>

        <div className="rounded-[32px] md:rounded-[70px] bg-[#FFDFCD] mx-0 md:mx-[20px] py-[72px]  md:py-[90px] mt-[120px]">
          <h1 className="text-[42px] md:text-[85px] text-center">Quests</h1>
          <div className="bucket-ctas mt-[32px] md:mt-24 px-[16px] md:px-[80px]">
            <div>
              <Card
                title="Galxe"
                subDescription="Galxe on Shardeum"
                iconUrl=""
                cardColor="orangebg"
                link={"/quest/galxe-quest"}
              />
            </div>
            <div>
              <Card
                title="Okx Cryptopedia"
                subDescription="Okx Cryptopedia on Shardeum"
                link="gfd"
                cardColor="orangebg"
              />
            </div>
            <div>
              <Card
                title="Airlyft"
                subDescription="Airlyft on Shardeum"
                link="sdf"
                cardColor="orangebg"
              />
            </div>
            <div>
              <Card
                title="Shardeum (Bandit)"
                subDescription="Shardeum (Bandit) on Shardeum"
                link={"/quest/shardeum-quest"}
                cardColor="orangebg"
              />
            </div>
          </div>
        </div>

        <div className="px-[16px] md:px-[100px] mb-[150px]">
          <Faqs />
        </div>
      </div>
    </Layout>
  );
};

export default Quest;
