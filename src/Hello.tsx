import React, {FC, useState} from 'react';
import './Hello.pcss';
import {User} from "./User";
import {AppContext} from './appContext/useAppContext';
import {ErrorMessageStore} from "./store/ErrorMessageStore";
import {MainStore} from './store/MainStore';

const ShowError = () => {
    const {errorMessage} = ErrorMessageStore.useContainer();
    return <div>Error happens: {errorMessage}</div>
}

export const Hello: FC = ({}) => {
    const [name, setName] = useState<string>('')

    return <>
        <ErrorMessageStore.Provider>
            <ShowError/>
        </ErrorMessageStore.Provider>
        <AppContext.Provider value={{name}}>
            <ErrorMessageStore.Provider>
                <MainStore.Provider>
                    <div>Name: {name}</div>
                    <input type={'text'} value={name} onChange={event => setName(event.target.value)}/>
                    <User/>
                </MainStore.Provider>
            </ErrorMessageStore.Provider>
        </AppContext.Provider>
    </>
}
