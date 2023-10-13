import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
} from "react-router-dom";

import Layout from "@/components/layout/Layout";
import GameInfo from "@/pages/Multiplayer/GameInfo";

// page name and path
export const ROUTER_MAP = {
    NOTICE: "/",
    RANKING: "ranking",
    MULTIPLAYER: "multiplayer",
    SINGLEPLAYER: "singleplayer",
    RULE: "rule",
    ERROR: "*",
};

export const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<Layout />}>
            <Route path={ROUTER_MAP.MULTIPLAYER} element={<GameInfo />} />
            // Error page
            <Route path={ROUTER_MAP.ERROR} element={<GameInfo />} />
        </Route>
    )
);
