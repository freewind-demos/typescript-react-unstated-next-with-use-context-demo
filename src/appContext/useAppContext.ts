import {createContext, useContext} from "react";

type AppContextType = {
    name: string
}

export const AppContext = createContext<AppContextType | undefined>(undefined);

export function useAppContext() {
    const appContext = useContext(AppContext)
    if (appContext === undefined) {
        throw new Error('AppContext is not initialized')
    }
    return appContext;
}