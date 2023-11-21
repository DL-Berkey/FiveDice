import {
    collection,
    setDoc,
    doc,
    Timestamp,
    getDoc,
    updateDoc,
    deleteDoc,
} from "firebase/firestore";

import { db } from ".";

interface Win {
    gameresult: "win";
}

interface Defeat {
    gameresult: "defeat";
    winnerUid: string;
}

interface Draw {
    gameresult: "draw";
}

interface GameRoom {
    hostUid: string;
    gameUid: string;
    mode: GameMode;
    result: Win | Defeat | Draw;
    playersUid: string[];
    board: GameBoard;

    createdAt?: any;
}

interface UserScheme {
    uid: string;
    nickname: string;
    email: string;
    joinedGame?: GameRoom[];
}

class UserController {
    async set(data: UserScheme) {
        const userExisting = await this.get(data.email);

        if (userExisting) {
            throw new Error("User is existing");
        }

        const userRef = collection(db, "User");

        await setDoc(doc(userRef, data.email), {
            ninkname: data.nickname,
            createdAt: Timestamp.now(),
            updatedAt: Timestamp.now(),
        });
    }

    async get(email: string) {
        const emailRef = doc(db, "User", email);

        const result = await getDoc(emailRef);

        if (result.exists()) {
            return result.data();
        }

        return null;
    }

    async update(data: UserScheme) {
        const userExisting = await this.get(data.email);

        if (!userExisting) {
            throw new Error("User is not existing");
        }

        const emailRef = doc(db, "user", data.email);

        await updateDoc(emailRef, {
            ninkname: data.nickname,
            updatedAt: Timestamp.now(),
        });
    }

    async remove(email: string) {
        const userExisting = await this.get(email);

        if (!userExisting) {
            throw new Error("User is not existing");
        }

        const userEmailRef = doc(db, "User", email);

        await deleteDoc(userEmailRef);
    }
}

export default { User: new UserController() };
