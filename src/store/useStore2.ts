import {useState} from 'react';

import {createGlobalStore} from 'hox';

export const [useStore2] = createGlobalStore(() => {
    const [version, setVersion] = useState(0)
    return {version, setVersion}
});
