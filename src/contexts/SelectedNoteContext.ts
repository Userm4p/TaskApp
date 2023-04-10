import { createContext } from "react";
import { ItemMock } from "../app/pages/MainPage/MainPage";

interface Imod {
    note: ItemMock | {};
    mod: boolean;
}

export const SelectedNoteContext = createContext<{ dispatch: Function, mod: Imod }>({
    dispatch: () => { },
    mod: {
        note:{},
        mod:false
    }
});
