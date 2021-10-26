import React, { useEffect, useState } from 'react';
import { loadUsers } from '../services/load.users';

export const AuthContext = React.createContext({});

export const AuthProvider = (props) => {
    const [users, setUser ] = useState([]);
    const [search, setSearch] = useState('');

    const loadUse = async () => {
        const datas = await loadUsers(50);
        setUser(datas);
    }

    const handleChange = (e) => {
        const { value } = e.target;
        setSearch(value);
    };
    
    useEffect(() => {
        loadUse();
    }, []);

    
    return (
        <AuthContext.Provider value={{ users, search, handleChange }}>
            {props.children}
        </AuthContext.Provider>
    )
}