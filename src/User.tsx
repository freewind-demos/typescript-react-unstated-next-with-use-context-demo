import type {FC} from "react";
import React from "react";
import {useStore1} from "./store/useStore1";

type Props = {}

export const User: FC<Props> = React.memo((props) => {
    const {user, setUser, version} = useStore1();
    return <div>
        <div>User: {user}</div>
        <div>Version: {version.data}</div>
        <div><input type={'text'} value={user} onChange={(event) => setUser(event.target.value)}/></div>
    </div>
})
