import React from 'react';
import{ AuthContext } from '../provider/data';

const FilteredUsers = () => {
    const { users, search } = React.useContext(AuthContext);
 
    const filteredUsers = search
      ? users.filter((user) => {
        return user.name.first.toLowerCase().includes(search.toLowerCase())
      })
      : users;

    return filteredUsers;
   
}

export { FilteredUsers }
  