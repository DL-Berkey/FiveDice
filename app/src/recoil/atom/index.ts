import { atom } from "recoil";

import { ATOM_KEY } from "../keys";

export const showMenuAtom = atom({
    key: ATOM_KEY.SHOW_MENU,
    default: true,
});
