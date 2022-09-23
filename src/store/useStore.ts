import {useCallback, useState} from 'react';

import {createGlobalStore} from 'hox';
import {useAppContext} from "../appContext/useAppContext";
import {useErrorMessage} from "./useErrorMessage";


export const [useStore] = createGlobalStore(() => {
    const [user, _setUser] = useState<string>();
    const {setErrorMessage} = useErrorMessage();
    const {name} = useAppContext();
    const setUser = useCallback((user: string) => {
        if (new Date().getTime() % 2 === 0) {
            setErrorMessage('Random error')
        } else {
            _setUser(`${user}.${name}`);
        }
    }, []);
    return {user, setUser}
});
