import Layout from "../components/Layout.jsx";
import BanditQuestWidgetSrc from "../components/BanditQuestWidget.jsx";
import { useLocation, useParams } from "react-router-dom";

const BanditQuestWidget = () => {
  const { questId } = useParams();

  return (
    <Layout>
      <div className="px-[16px] md:px-[100px] mb-[120px]">
        {questId && (
          <BanditQuestWidgetSrc
            collectionId={questId}
            isOpen={true}
            onClose={() => {}}
            dialog={false}
          />
        )}
      </div>
    </Layout>
  );
};

export default BanditQuestWidget;
