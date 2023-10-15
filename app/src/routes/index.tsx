import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
} from "react-router-dom";

import { ROUTER_MAP } from "@/constants";
import Layout from "@/components/layout/Layout";
import GameInfo from "@/pages/multiplayer/GameInfo";
import GameBoard from "@/pages/gameboard/GameBoard";

export const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<Layout />}>
            <Route path={ROUTER_MAP.MULTIPLAYER} element={<GameInfo />} />
            <Route path={ROUTER_MAP.GAMEBOARD} element={<GameBoard />} />
            // Error page
            <Route path={ROUTER_MAP.ERROR} element={<GameInfo />} />
        </Route>
    )
);
