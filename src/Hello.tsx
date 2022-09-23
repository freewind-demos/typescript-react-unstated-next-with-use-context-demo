import React, {FC, useState} from 'react';
import './Hello.pcss';
import {User} from "./User";
import {HoxRoot} from "hox";
import {AppContext} from './appContext/useAppContext';
import {useErrorMessage} from "./store/useErrorMessage";

const ShowError = () => {
    const {errorMessage} = useErrorMessage();
    return <div>Error happens: {errorMessage}</div>
}

export const Hello: FC = ({}) => {
    const [name, setName] = useState<string>('')

    return <>
        <HoxRoot>
            <ShowError/>
        </HoxRoot>
        <AppContext.Provider value={{name}}>
            <HoxRoot>
                <div>Name: {name}</div>
                <input type={'text'} value={name} onChange={event => setName(event.target.value)}/>
                <User/>
            </HoxRoot>
        </AppContext.Provider>
    </>
}
