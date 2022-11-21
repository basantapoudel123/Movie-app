import React, { useState } from "react";
import "./moviecard.css";
import FavoriteIcon from "@mui/icons-material/Favorite";

function MovieCard({
  id,
  img,
  title,
  year,
  genres,
  language,
  handleFav,
  handleDetailsClick,
}) {
  const [clicked, setClicked] = useState(false);

  const getTitle = () => {
    if (title.length > 20) {
      return `${title.slice(0, 20)}...`;
    }
    return title;
  };

  const getAllGenres = () => {
    return genres?.map((el, idx) => {
      return <div key={idx}>{el}</div>;
    });
  };

  const buttonClicked = (id) => {
    handleFav(id);
  };

  return (
    <div>
      <div className="main">
        <div className="pic">
          <img src={img} alt="" />
          <div className="pic-overlay">
            {getAllGenres()}
            <button className="view-details-btn" onClick={handleDetailsClick}>
              View Details
            </button>
          </div>
        </div>
        <div className="title">
          <span className="language-span">[{language}]</span>
          <span className="title-span">{getTitle()}</span>
          <br />
          <span className="year">{year}</span>
          <FavoriteIcon
            style={{ color: clicked ? "red" : "" }}
            className="fav-button"
            onClick={() => {
              setClicked(true);
              buttonClicked(id);
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default MovieCard;
