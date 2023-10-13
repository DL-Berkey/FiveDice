import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
} from "react-router-dom";

import Layout from "@/components/layout/Layout";
import GameInfo from "@/components/GameInfo/GameInfo";

interface routerMap {
    [path: string]: string;
}

// page name and path
export const ROUTER_MAP: routerMap = {
    NOTICE: "/",
    RANKING: "/ranking",
    MULTIPLAYER: "/multiplayer",
    SINGLEPLAYER: "/singleplayer",
    RULE: "/rule",
};

export const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<Layout />}>
            <Route path={ROUTER_MAP.MULTIPLAYER} element={<GameInfo />} />
        </Route>
    )
);
