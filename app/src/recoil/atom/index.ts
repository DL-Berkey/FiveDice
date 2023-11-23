import { atom, AtomEffect } from "recoil";
import { USER_KEY } from "../keys";

const persist: (key: string) => AtomEffect<boolean> =
    (key) =>
    ({ setSelf }) => {
        const session = localStorage.getItem(key);

        if (session !== null) {
            setSelf(true);
        } else {
            setSelf(false);
        }
    };

export const isLoginAtom = atom<boolean>({
    key: USER_KEY.login,
    default: false,
    effects: [persist(import.meta.env.VITE_SUPABASE_PROJECT_ID)],
});
