import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { configure } from "axios-hooks";
import Axios from "axios";

import Home from "./routes/Home.jsx";
import Quest from "./routes/Quest.jsx";
import GalxeQuest from "./routes/GalxeQuest.jsx";
import BanditQuest from "./routes/BanditQuest.jsx";
import BanditQuestWidget from "./routes/BanditQuestWidget.jsx";

const axios = Axios.create({
  baseURL: "https://qa-api-v2.bandit.network/sdk",
  headers: {
    "X-API-KEY": "73d8ed4eeddc43d8b96e0b08afb675ac",
  },
});
configure({ axios });

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/quest",
    element: <Quest />,
  },
  {
    path: "/quest/galxe-quest",
    element: <GalxeQuest />,
  },
  {
    path: "/quest/shardeum-quest",
    element: <BanditQuest />,
  },
  {
    path: "/quest/shardeum-quest/:questId",
    element: <BanditQuestWidget />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
