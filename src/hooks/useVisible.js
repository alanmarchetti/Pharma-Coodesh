import { useState } from 'react'

export const useVisible = () => {
    const [visible, setVisible] = useState(10);

    const loadMoreUser = () => {
        setVisible((value) => value + 10);
    }

    return { visible, loadMoreUser };
}