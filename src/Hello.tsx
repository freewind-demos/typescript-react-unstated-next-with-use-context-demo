import React, {FC} from 'react';
import './Hello.pcss';
import {Version} from "./Version";
import {User} from "./User";
import {HoxRoot} from "hox";

type Props = {};

export const Hello: FC<Props> = ({}) => {
    return <HoxRoot>
        <Version/>
        <User/>
    </HoxRoot>;
}
