import React from "react";
import "./SearchBar.css";
import Container from "../Container/Container";
import { BsSearch } from "react-icons/bs";

const SearchBar = () => {
  return (
    <div id="searchBar-part">
      <Container>
        <h2 className="text-3xl font-bold text-center uppercase">
          Search Bar
        </h2>
        <div className="box px-2 py-5 relative">
          <h3 className="px-2 py-2 text-3xl uppercase">
            Search fractos.bd.com
          </h3>
          <input
            className="w-full px-2 py-5  bg-transparent uppercase border-b focus:outline-none"
            type="text"
            name="search"
            id="search"
            placeholder="Search Your Class"

           
          />

         <BsSearch className="absolute bottom-9 right-4 text-green-800"></BsSearch>

         
        </div>

        <button className="px-2 py-3 bg-green-500 text-white rounded text-bold hover:bg-green-400 transition-colors">Banlga</button>
        <button className="px-2 py-3 mx-2 bg-green-500 text-white rounded text-bold hover:bg-green-400 transition-colors">English</button>
        <button className="px-2 py-3 bg-green-500 text-white rounded text-bold hover:bg-green-400 transition-colors">Mathmatics</button>
        <button className="px-2 py-3 mx-2 bg-green-500 text-white rounded text-bold hover:bg-green-400 transition-colors">Physics</button>
        <button className="px-2 py-3 bg-green-500 text-white rounded text-bold hover:bg-green-400 transition-colors">Chemistry</button>
        <button className="px-2 py-3 mx-2 bg-green-500 text-white rounded text-bold hover:bg-green-400 transition-colors">Biology</button>

      </Container>
    </div>
  );
};

export default SearchBar;
