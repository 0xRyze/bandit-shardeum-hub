import Table from "../components/Table.jsx";
import Card from "../components/Card.jsx";
import Faqs from "../components/Faqs.jsx";
import Layout from "../components/Layout.jsx";
import useAxios from "axios-hooks";
import { useMemo, useState } from "react";
import Pagination from "../components/Pagination.jsx";
import LeaderBoardRank from "../components/LeaderBoardRank.jsx";

const PAGE_LIMIT = 10;

const GalxeQuest = () => {
  const [page, setPage] = useState(0);

  const [{ data, loading, error }] = useAxios(
    `/spaces/leaderboard?space_ids=${6999999}&offset=${page * PAGE_LIMIT}&limit=${PAGE_LIMIT}&type=galxe`,
  );
  const [{ data: questList = [], loading: questListLoading }, refetch] =
    useAxios(`/quest/galxe?space=${6999999}&offset=${0}&limit=${20}`);

  const leaderboardData = useMemo(() => {
    return (data?.data || []).map(({ rank, stats, user }) => ({
      rank,
      walletAddress: user?.walletAddress,
      points: stats?.points,
    }));
  }, [data]);

  const questListData = useMemo(() => {
    return questList?.data || [];
  }, [questList]);

  return (
    <Layout>
      <div>
        <div className="px-[16px] md:px-[100px] mb-[120px]">
          <div>
            <h1 className="text-[64px] md:text-[85px] text-center mt-[40px]">
              Leaderboard
            </h1>

            <div className="mt-[32px] md:mt-20">
              <div className="mb-16">
                <LeaderBoardRank />
              </div>
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
        <div className="rounded-[32px] md:rounded-[70px] bg-[#FFDFCD] mx-0 md:mx-[20px] py-[72px] md:py-[90px] mt-[120px]">
          <h1 className="text-[42px] md:text-[85px] text-center">Quests</h1>
          <div className="bucket-ctas mt-[32px] md:mt-24  px-[16px] md:px-[80px]">
            {questListData.map(
              ({ id, name, description, thumbnail, redirectLink }) => (
                <div key={id}>
                  <Card
                    title={name}
                    subDescription={`${description.substr(0, 100)}...`}
                    iconUrl={thumbnail}
                    cardColor="orangebg"
                    link={redirectLink}
                  />
                </div>
              ),
            )}
          </div>
        </div>
        <div className="px-[16px] md:px-[100px] mb-[150px]">
          <Faqs />
        </div>
      </div>
    </Layout>
  );
};

export default GalxeQuest;
