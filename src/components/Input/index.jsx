import React from "react";
import { UserContext } from "../../provider/data";
import "./styles.css";

function TextInput({ text }) {
  const { search, handleChange } = React.useContext(UserContext);
  return (
    <div className="container d-flex input-group mb-4">
      <input
        className="form-control"
        onChange={handleChange}
        value={search}
        type="search"
        placeholder={text}
      />
    </div>
  );
}
export { TextInput };
