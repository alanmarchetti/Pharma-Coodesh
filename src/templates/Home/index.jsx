import React from "react";
import { UserContext } from "../../provider/data";

import { NavBar } from "../../components/Navbar";
import { TextArea } from "../../components/TextArea";
import { TextInput } from "../../components/Input";
import { Table } from "../../components/Table";
import { Select } from "../../components/Select";

import "./styles.css";

function App() {
  const { users, search } = React.useContext(UserContext);

  const filteredUsers = search
    ? users.filter((user) => {
        return (
          user.name.first.toLowerCase().includes(search.toLowerCase()) ||
          user.gender.includes(search) ||
          user.nat.includes(search.toLowerCase())
        );
      })
    : users;

  return (
    <div className="container w-auto">
      <NavBar text="Pharma" />
      <div className="container w-75">
        <TextArea
          text={`Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Morbi suscipit arcu quis fermentum congue. Curabitur ornare finibus 
            accumsan. Proin ultrices eros vitae nibh venenatis, et pellentesque mi lacinia. 
            Suspendisse potenti.`}
        />
        <div className="container w-100 d-flex justify-content-between">
          <TextInput text="Busque por nome ou nacionalidade" />
          <Select />
        </div>
        {filteredUsers.length > 0 && <Table users={filteredUsers} />}

        {filteredUsers.length === 0 && <p>Não existem usuários!</p>}
      </div>
    </div>
  );
}

export default App;
