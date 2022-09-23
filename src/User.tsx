import type {FC} from "react";
import React from "react";
import {MainStore} from "./store/MainStore";

type Props = {}

export const User: FC<Props> = React.memo((props) => {
    const {user, setUser} = MainStore.useContainer();
    return <div>
        <div>User: {user}</div>
        <div><input type={'text'} value={user ?? ''} onChange={(event) => setUser(event.target.value)}/></div>
    </div>
})
