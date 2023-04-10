import { createContext } from "react";

interface IContext {
    dispatch:Function;
    login: {
      logged:boolean;
      user?: {
        user?:string,
        email?:string
      } | null;
    } 
  }

export  const LoginContext = createContext<IContext>({
    dispatch: () => {},
    login: {
        logged:false,
        user:null
    }
  });

