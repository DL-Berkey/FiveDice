import { selector } from "recoil";
import { SELECTOR_KEY } from "../keys";
import { showMenuAtom, showUserInfoAtom } from "../atom";

export const showMenuAndUserInfoSelector = selector({
    key: SELECTOR_KEY.SHOW_MENU_AND_USERINFO,
    get: ({ get }) => {
        const showMenu = get(showMenuAtom);
        const showUserInfo = get(showUserInfoAtom);

        if (showMenu && showUserInfo) {
            return true;
        } else {
            return false;
        }
    },

    set: ({ set }, value) => {
        set(showMenuAtom, value);
        set(showUserInfoAtom, value);
    },
});
