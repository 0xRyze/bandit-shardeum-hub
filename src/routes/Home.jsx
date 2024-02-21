import Card from "../components/Card.jsx";
import Button from "../components/Button.jsx";
import "../styles/home.css";
import Layout from "../components/Layout.jsx";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <Layout>
      <div className="px-[16px] md:px-[100px]">
        <div>
          <h1 className="text-[64px] md:text-[165px] text-center">Objective</h1>
          <p className="text-[16px] text-center mt-[50px] md:mt-28">
            The objective of the Shardeum Incentivized Testnet is to incentivize
            users to actively engage in stress testing the network. By
            conducting numerous on-chain transactions, participants contribute
            to the identification and resolution of bugs, vulnerabilities, and
            performance issues. This rigorous testing process is essential to
            fortify the network&apos;s security, reliability, and readiness for
            a successful mainnet launch.
          </p>
        </div>
        <div className="mt-[100px] md:mt-28">
          <h1 className="text-[42px] md:text-[85px] text-center">
            Campaign timeline
          </h1>

          <div className="bucket-ctas mt-[32px] md:mt-24 block">
            <div>
              <Card
                title="Incentivised Testnet Timeline"
                subDescription="21 Feb 2024 to 21 Mar 2024 (Tentative)"
                iconUrl="/incentivised-testnet-timeline.svg"
                cardColor="aquabg"
              />
            </div>
            <div className="mt-[50px]">
              <Card
                title="Incentivised Testnet Duration"
                subDescription="30 Days"
                iconUrl="/incentivised-testnet-duration.svg"
                cardColor="greenbg"
              />
            </div>
            <div className="mt-[50px]">
              <Card
                title="Campaign Themes"
                subDescription=""
                iconUrl="/campaign-themes.svg"
                cardColor="pinkbg"
              />
            </div>
          </div>

          <div className="my-[80px] flex justify-center">
            <Link to="/quest">
              <Button title="Participate in Incentivized Testnet" />
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
