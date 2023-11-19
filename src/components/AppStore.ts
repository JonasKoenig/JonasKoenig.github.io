import { makeObservable } from "mobx";
import React, { useContext } from "react";

export class AppStore {
    // Singleton
    private static instance?: AppStore
    public static getInstance = () => {
        AppStore.instance ??= new AppStore();
        return AppStore.instance;
    }

    private constructor() {
        makeObservable(this, {
        })
    }

}

export const AppContext = React.createContext(AppStore.getInstance())
export const useApp = () => useContext(AppContext)