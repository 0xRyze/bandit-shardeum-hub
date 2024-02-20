import Table from "../components/Table.jsx";
import Faqs from "../components/Faqs.jsx";
import Card2 from "../components/Card2.jsx";
import Layout from "../components/Layout.jsx";
import useAxios from "axios-hooks";
import { useMemo, useState } from "react";
import Pagination from "../components/Pagination.jsx";
import BanditQuestWidget from "../components/BanditQuestWidget.jsx";
import LeaderBoardRank from "../components/LeaderBoardRank.jsx";
import { Link } from "react-router-dom";

const PAGE_LIMIT = 10;

const BanditQuest = () => {
  const [page, setPage] = useState(0);
  const [collectionId, setCollectionId] = useState(null);
  const [{ data, loading, error }] = useAxios(
    `/spaces/leaderboard?space_ids=${1110}offset=${page * PAGE_LIMIT}&limit=${PAGE_LIMIT}&type=bandit`,
  );
  const [{ data: questList, loading: questListLoading }, refetch] = useAxios(
    `/quest?space=${1110}&offset=${0}&limit=${20}`,
  );

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

  const onClickCard = (id) => {
    setCollectionId(id);
  };

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

          <div className="projects-grid mod-grid-sm p-sm mt-[100px]">
            {(questListData || []).map(({ profile, collectionId }) => (
              <Link
                key={collectionId}
                to={`/quest/shardeum-quest/${collectionId}`}
              >
                <Card2
                  name={profile?.name}
                  image={profile?.profileImage}
                  description={profile?.description}
                />
              </Link>
            ))}
          </div>

          <div className="mt-[100px]">
            <Faqs />
          </div>
        </div>
      </div>

      {collectionId && (
        <BanditQuestWidget
          collectionId={collectionId}
          isOpen={!!collectionId}
          onClose={() => setCollectionId(null)}
        />
      )}
    </Layout>
  );
};

export default BanditQuest;
