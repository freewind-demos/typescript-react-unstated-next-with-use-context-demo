import React, {FC, useState} from 'react';
import './Hello.pcss';
import {User} from "./User";
import {HoxRoot} from "hox";
import {AppContext} from './appContext/useAppContext';

type Props = {};

export const Hello: FC<Props> = ({}) => {
    const [name, setName] = useState<string>('')

    return <AppContext.Provider value={{name}}>
        <HoxRoot>
            <div>Name: {name}</div>
            <input type={'text'} value={name} onChange={event => setName(event.target.value)}/>
            <User/>
        </HoxRoot>
    </AppContext.Provider>
}
