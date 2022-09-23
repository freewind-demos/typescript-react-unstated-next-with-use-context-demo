import {createGlobalStore} from "hox";
import {useState} from "react";
import { createContainer } from "unstated-next";

export const ErrorMessageStore = createContainer(() => {
    const [errorMessage, setErrorMessage] = useState<string>();
    return {errorMessage, setErrorMessage};
})