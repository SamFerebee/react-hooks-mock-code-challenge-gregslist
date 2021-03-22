import React, { useState } from "react";

function ListingCard({listing, handleDelete, test, changeTest}) {
  const [isFavorite, setIsFavorite] = useState(false)

  const handleFavorite = () => {
    setIsFavorite((f) => !f)
  }

  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={listing.image} alt={listing.description} />
      </div>
      <div className="details">
        {isFavorite ? (
          <button onClick={handleFavorite} className="emoji-button favorite active">★</button>
        ) : (
          <button onClick={handleFavorite} className="emoji-button favorite">☆</button>
        )}
        <strong>{listing.description}</strong>
        <span> · {listing.location}</span>
        <button onClick={handleDelete} data-thelisting={listing.id} className="emoji-button delete">🗑</button>
        <p onClick={changeTest}>{test}</p>
      </div>
    </li>
  );
}

export default ListingCard;
