import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import SearchIcon from "@mui/icons-material/Search";
import ClearIcon from "@mui/icons-material/Clear";
import Button from "@mui/material/Button";

import "./SearchField.css";
import { SetSearchValue } from "../../State/Actions/SearchActions";

export default function SearchField({initial_value=''}) {
  const [search_value, setsearch_value] = useState(initial_value);
  const [showclear, setshowclear] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const Change_search_value = async (e) => {
    let value = e.target.value;
    await setsearch_value(value);
    if (value.trim() === "") {
      setshowclear(false);
    } else {
      setshowclear(true);
    }
  };

  const Clear = () => {
    setsearch_value("");
    setshowclear(false);
  };

  const Search = async (e) => {
    e.preventDefault();
    dispatch(SetSearchValue(search_value));
    const path_url = document.location.pathname;
    if (!(path_url === "/search")) {
      navigate("/search");
    }
  };

  useEffect(() => {
    document.getElementById("searchvalue").addEventListener("focus", () => {
      document.getElementById("search_form").style.boxShadow =
        "0 0px 14px 0 rgba(0, 0, 0, 0.19)";
    });
    document.getElementById("searchvalue").addEventListener("focusout", () => {
      document.getElementById("search_form").style.boxShadow =
        "0 0px 8px 0 rgba(0, 0, 0, 0.19)";
    });
  }, []);

  return (
    <form id="search_form" onSubmit={Search} className="search_form">
      <SearchIcon />
      <input
        id="searchvalue"
        type="text"
        onChange={Change_search_value}
        value={search_value}
      />
      <div className="clear" onClick={Clear}>
        {showclear && <ClearIcon />}
      </div>
      <Button type="submit" variant="contained">
        <SearchIcon />
      </Button>
    </form>
  );
}
