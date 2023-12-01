import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
} from "react-router-dom";

import { ROUTER_MAP } from "@/constants";

import Layout from "@/components/layout/Layout";

import Gameplay from "@/pages/multiplayer/Gameplay";
import GameBoard from "@/pages/gameboard/GameBoard";
import Register from "@/pages/register/Register";
import Login from "@/pages/login/Login";

export const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<Layout />}>
            <Route path={ROUTER_MAP.MULTIPLAYER} element={<Gameplay />} />
            <Route path={ROUTER_MAP.GAMEBOARD} element={<GameBoard />} />
            <Route
                path={ROUTER_MAP.REGISTER.extendedOrigin}
                element={<Register />}
            />
            <Route path={ROUTER_MAP.LOGIN} element={<Login />} />
            // Error page
            <Route path={ROUTER_MAP.ERROR} element={<Gameplay />} />
        </Route>
    )
);
