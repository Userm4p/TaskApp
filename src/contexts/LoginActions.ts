import { types } from "./LoginTypes";

interface Iaction {
    type : string;
    payload : any;
}

export const LoginReducer = (state : any , action : Iaction) => {

    if(action.type === types.login){
        return {
            logged: true,
            user: {
                ...action.payload
            }
        }
    }else if(action.type === types.logout){
        return {
            logged:false,
            user: null
        }
    }else{
        return {
            logged:false,
            user: null
        }
    }
    
}