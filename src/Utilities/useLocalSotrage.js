import { useState } from 'react';

export default function useLocalStorage(val) {
    const [value, setValue] = useState(val);

    return [value, setValue];
}