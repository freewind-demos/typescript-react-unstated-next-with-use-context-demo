import {useCallback, useState} from 'react';
import {useAppContext} from "../appContext/useAppContext";
import {createContainer} from "unstated-next";
import {ErrorMessageStore} from "./ErrorMessageStore";


export const MainStore = createContainer(() => {
    const [user, _setUser] = useState<string>();
    const {setErrorMessage} = ErrorMessageStore.useContainer();
    const {name} = useAppContext();
    const setUser = useCallback((user: string) => {
        if (new Date().getTime() % 2 === 0) {
            setErrorMessage('Random error')
        } else {
            _setUser(`${user}.${name}`);
        }
    }, [name]);
    return {user, setUser}
});
