// page name and path
export const ROUTER_MAP = {
    NOTICE: "/",
    RANKING: "/ranking",
    MULTIPLAYER: "/multiplayer",
    SINGLEPLAYER: "/singleplayer",
    RULE: "/rule",
    GAMEBOARD: "/game",
    ERROR: "*",
} as const;

export const NO_SIDE_COMPONENT_URL: readonly string[] = [ROUTER_MAP.GAMEBOARD];
