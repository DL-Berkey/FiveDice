type GameMode = "Rankup" | "Normal" | "Extreme";

type GameResult = "win" | "defeat" | "draw";

type GameBoard = {
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
