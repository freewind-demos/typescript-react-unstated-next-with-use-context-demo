import {useState} from 'react';

import {createGlobalStore} from 'hox';
import {useAppContext} from "../appContext/useAppContext";


export const [useStore] = createGlobalStore(() => {
    const [user, setUser] = useState<string>();
    const {name} = useAppContext();
    return {user, setUser: (user: string) => setUser(`${user}.${name}`)}
});
