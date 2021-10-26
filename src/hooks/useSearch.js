import { useState } from "react";

export const useSearch = () => {
  const [search, setSearch] = useState("");

  const handleChange = (e) => {
    const { value } = e.target;
    setSearch(value);
  };

  return { search, handleChange };
};
