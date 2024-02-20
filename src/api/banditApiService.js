import axios from "axios";

axios.defaults.baseURL = "https://qa-api-v2.bandit.network/sdk";
axios.defaults.headers.common["x-api-key"] = "73d8ed4eeddc43d8b96e0b08afb675ac";
export const getUnifiedLeaderBoard = async ({
  spaceId,
  limit,
  offset,
  walletAddress,
}) => {
  try {
    const response = await axios.get(
      `/spaces/unified-leaderboard?space_ids=${spaceId}&offset=${offset}&limit=${limit}`,
    );
    return response.data;
  } catch (error) {
    console.log(error);
    return null;
  }
};
