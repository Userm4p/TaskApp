import { types } from "./LoginTypes";

interface Iaction {
    type: string;
    payload: {
        user:string,
        email:string
      } | null;
}

interface state {
    logged:boolean;
    user?: {
      user?:string,
      email?:string
    } | null;
}


export const LoginReducer = (state :state, action: Iaction) => {
    switch (action.type) {
        case types.login:
            return {
                logged: true,
                user: {
                    ...action.payload
                }
            }
            break;
        case types.logout:
            return {
                logged: false,
                user: null
            }
            break;
        default:
            return {
                logged: false,
                user: null
            }
            break;
    }
}