'use client'
import React, { useContext, useState } from "react";
import "./SearchBar.css";
import Container from "../Container/Container";
import { GlobalContext } from "@/GlobalState";


const SearchBar = () => {

  const { search, setSearch } = useContext(GlobalContext)

 return (
    <div id="searchBar-part">
      <Container>

        <div className="box   px-2 py-3 relative">

          <input
            className="w-full  primaryBg rounded-3xl px-7    py-5  bg-transparent  border-b focus:outline-none"
            type="text"
            id="search"
            onChange={(e) => {
              e.preventDefault();
              setSearch(e.target.value)
            }}
            placeholder="Search "


          />



        </div>



      </Container>
    </div>
  );
};

export default SearchBar;
