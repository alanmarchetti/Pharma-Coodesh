import React, { useEffect, useState } from "react";
import { loadUsers } from "../services/load.users";

export const UserContext = React.createContext({});

export const UserProvider = (props) => {
  const [users, setUser] = useState([]);
  const [search, setSearch] = useState("");

  const loadUse = async () => {
    const datas = await loadUsers(50);
    setUser(datas);
  };

  const handleChange = (e) => {
    const { value } = e.target;
    setSearch(value);
  };

  useEffect(() => {
    loadUse();
  }, []);

  return (
    <UserContext.Provider value={{ users, search, handleChange }}>
      {props.children}
    </UserContext.Provider>
  );
};
