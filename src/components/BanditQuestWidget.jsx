import { QuestWidget } from "@bandit-network/quest-widget";
import "@bandit-network/quest-widget/dist/styles.css";

const BanditQuestWidget = ({
  isOpen,
  collectionId,
  onClose,
  dialog = true,
}) => {
  return (
    <div>
      <QuestWidget
        collectionId={collectionId}
        isOpen={isOpen}
        dialog={dialog}
        onClose={onClose}
        showLeaderBoard={false}
        showParticipants={false}
      />
    </div>
  );
};

export default BanditQuestWidget;
