// page name and path
export const ROUTER_MAP = {
    LOGIN: "/login",
    REGISTER: {
        origin: "/register",
        extendedOrigin: "/register/:phase",
    },
    NOTICE: "/",
    RANKING: "/ranking",
    MULTIPLAYER: "/multiplayer",
    SINGLEPLAYER: "/singleplayer",
    RULE: "/rule",
    GAMEBOARD: "/game",
    ERROR: "*",
} as const;

export const NO_SIDE_COMPONENT_URL: readonly string[] = [ROUTER_MAP.GAMEBOARD];

export const GAMEMODE: Record<GameMode, string> = {
    Solo: "AI",
    Rankup: "랭크",
    Normal: "일반",
    Extreme: "극한",
} as const;

export const GAMEMODE_DESCRIPTION: Record<GameMode, string> = {
    Solo: "컴퓨터와 겨루어보세요!",
    Rankup: "본인과 실력이 비슷한 상대와 겨루어 실력을 증명하세요!",
    Normal: "일반적인 게임입니다.",
    Extreme: "점수 제한이 없는 15턴의 극한의 경기를 해보세요!",
} as const;

export const EMAIL_REGEX = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

// 1. 영어 대소문자
// 2. 숫자
// 3. 6글자 이상
export const PASSWORD_REGEX = /^(?=.*[a-zA-Z])(?=.*\d).{6,}$/;
