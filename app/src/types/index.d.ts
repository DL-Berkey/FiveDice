type Json =
    | string
    | number
    | boolean
    | null
    | { [key: string]: Json | undefined }
    | Json[];

interface Database {
    public: {
        Tables: {
            user: {
                Row: {
                    created_at: string;
                    email: string;
                    id: number;
                    nickname: string;
                };
                Insert: {
                    created_at?: string;
                    email?: string;
                    id?: number;
                    nickname?: string;
                };
                Update: {
                    created_at?: string;
                    email?: string;
                    id?: number;
                    nickname?: string;
                };
                Relationships: [];
            };
        };
        Views: {
            [_ in never]: never;
        };
        Functions: {
            [_ in never]: never;
        };
        Enums: {
            [_ in never]: never;
        };
        CompositeTypes: {
            [_ in never]: never;
        };
    };
}

type GameMode = "Solo" | "Rankup" | "Normal" | "Extreme";

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

interface UserData {
    nickname: string;
}
