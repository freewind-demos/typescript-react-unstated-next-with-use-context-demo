import type {FC} from "react";
import React from "react";
import {useStore2} from "./store/useStore2";

type Props = {}

export const Version: FC<Props> = React.memo((props) => {
    const {version, setVersion} = useStore2();
    return <div>
        <div>
            <button type={'button'} onClick={() => setVersion(n => n + 1)}>Re-render ({version})</button>
        </div>
    </div>
})
