import { types } from "./SelectedNoteType";


interface Iaction {
    type : string;
    payload : any;
}

export const NoteReducer = (state : any , action : Iaction) => {

    if(action.type === types.Mod){
        return {
            mod: true,
            note: {
                ...action.payload
            }
        }
    }else if(action.type === types.NoMod){
        return {
            mod:false,
            note: null
        }
    }else{
        return {
            mod:false,
            note: null
        }
    }
    
}