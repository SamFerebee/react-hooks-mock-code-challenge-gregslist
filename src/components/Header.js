import React from "react";
import Search from "./Search";

function Header({searchCallback, alphabetize,test, changeTest}) {
  return (
    <header>
      <h1>
        <span className="logo" role="img">
          ☮
        </span>
        gregslist
      </h1>
      <Search searchCallback={searchCallback}/>
      <button onClick={alphabetize}>Alphabetize Listings</button>
      <p onClick={changeTest}>{test}</p>
    </header>
  );
}

export default Header;
