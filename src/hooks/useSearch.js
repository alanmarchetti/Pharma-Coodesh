import React, { useState } from 'react'
import { AuthContext } from '../provider/data';

export const useSearch = () => {
    const [search, setSearch] = useState('');

    const handleChange = (e) => {
        const { value } = e.target;
        setSearch(value);
    };

    return { search, handleChange };
}