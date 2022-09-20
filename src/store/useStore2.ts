import {createGlobalStore} from 'hox';
import {useRequest} from "ahooks";
import {nextRandomNumber} from "../utils/nextRandomNumber";
import {wait} from "../utils/wait";

export const [useStore2] = createGlobalStore(() => {
    const version = useRequest(async () => {
        await wait(1000);
        return await nextRandomNumber();
    });

    return {version}
});
