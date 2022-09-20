import {useState} from 'react';

import {createGlobalStore} from 'hox';
import {useStore2} from "./useStore2";


export const [useStore1] = createGlobalStore(() => {
    const [user, setUser] = useState<string>();
    const {version} = useStore2();
    return {user, setUser: (user: string) => setUser(`${user}.${version.data}`), version}
});
