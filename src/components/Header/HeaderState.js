import { useState } from "react";

const HeaderState = () => {
  const [selectType, setSelectType] = useState("Username");
  const [search, setSearch] = useState("");
  let placeHolder = `search by ${selectType}...`;

  // change search type.
  const selectHandler = (e) => {
    setSelectType(e.target.value);
  };

  // change search title.
  const searchHandler = (e) => {
    setSearch(e.target.value);
  };

  // run on search form submit.
  const submitHandler = (event) => {
    event.preventDefault();
    setSearch("");
  };

  return {
    selectHandler,
    searchHandler,
    submitHandler,
    search,
    placeHolder,
    selectType,
  };
};

export default HeaderState;
