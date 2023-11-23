import { atom, AtomEffect } from "recoil";
import { USER_KEY } from "../keys";

const isLoginEffect: (key: string) => AtomEffect<boolean> =
    (key) =>
    ({ setSelf }) => {
        const session = localStorage.getItem(key);

        if (session !== null) {
            setSelf(true);
        } else {
            setSelf(false);
        }
    };

const userDataEffect: (key: string) => AtomEffect<UserData | null> =
    (key) =>
    ({ setSelf, onSet }) => {
        const userData = localStorage.getItem(key);

        if (userData !== null) {
            setSelf(JSON.parse(userData));
        } else {
            setSelf(null);
        }

        onSet((newValue, _, isReset) => {
            isReset
                ? localStorage.removeItem(key)
                : localStorage.setItem(key, JSON.stringify(newValue));
        });
    };

export const isLoginAtom = atom<boolean>({
    key: USER_KEY.login,
    default: false,
    effects: [
        isLoginEffect(
            "sb-" + import.meta.env.VITE_SUPABASE_PROJECT_ID + "-auth-token"
        ),
    ],
});

export const userDataAtom = atom<UserData | null>({
    key: USER_KEY.userData,
    default: null,
    effects: [userDataEffect("user_data")],
});
