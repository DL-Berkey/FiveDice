export type GameMode = "Rankup" | "Normal" | "Extreme";

export type GameResult = "win" | "defeat" | "draw";

export type GameBoard = {
    [userUid: string]: {
        Aces: number;
        Twos: number;
        Threes: number;
        Fours: number;
        Fives: number;
        Sixes: number;
        Choice: number;
        FourOfKind: number;
        FullHouse: number;
        S_Straight: number;
        L_Straight: number;
        Yacht: number;
    };
};
