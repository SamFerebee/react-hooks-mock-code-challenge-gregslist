import React from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({listings, handleDelete, onSubmit, test, changeTest}) {

  const listingsToDisplay = listings.map((listing) => <ListingCard changeTest={changeTest} handleDelete={handleDelete} listing={listing} key={listing.id} test={test} />)
  return (
    <main>
      <ul className="cards">
        {listingsToDisplay}
      </ul>
      <form onSubmit={onSubmit}>
        <input type="text" name="description" placeholder="description"></input>
        <input type="text" name="image" placeholder="image link"></input>
        <input type="text" name="location" placeholder="location"></input>
        <input type="submit"></input>
      </form>
    </main>
  );
}

export default ListingsContainer;
