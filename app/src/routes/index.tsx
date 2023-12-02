import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
} from "react-router-dom";

import { ROUTER_MAP } from "@/constants";

import Layout from "@/components/layout/Layout";

import Gameplay from "@/pages/multiplayer/Gameplay";
import GameBoard from "@/pages/gameboard/GameBoard";
import Account from "@/pages/account/Account";
import Register from "@/pages/register/Register";
import Login from "@/pages/login/Login";

export const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<Layout />}>
            <Route path={ROUTER_MAP.gameplay} element={<Gameplay />} />
            <Route path={ROUTER_MAP.gameboard} element={<GameBoard />} />
            <Route path={ROUTER_MAP.account.root} element={<Account></Account>}>
                <Route
                    path={ROUTER_MAP.account.register}
                    element={<Register />}
                />
                <Route path={ROUTER_MAP.account.login} element={<Login />} />
            </Route>
            // Error page
            <Route path={ROUTER_MAP.error} element={<Gameplay />} />
        </Route>
    )
);
