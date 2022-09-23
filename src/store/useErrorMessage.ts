import {createGlobalStore} from "hox";
import {useState} from "react";

export const [useErrorMessage] = createGlobalStore(() => {
    const [errorMessage, setErrorMessage] = useState<string>();
    return {errorMessage, setErrorMessage};
})