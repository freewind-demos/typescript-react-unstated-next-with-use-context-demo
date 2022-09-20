import type {FC} from "react";
import React from "react";
import {useStore2} from "./store/useStore2";

type Props = {}

export const Version: FC<Props> = React.memo((props) => {
    const {version} = useStore2();
    return <div>
        <div>
            <button type={'button'} onClick={() => version.refresh()}>Re-render ({version.data})</button>
        </div>
    </div>
})
