import React from "react";
import "./moviedetail.css";

function MovieDetails({
  detail_title,
  description_intro,
  description_full,
  bgimage,
  genres,
  upload_date,
  setOpenMovieDetail,
}) {
  const handleClose = () => {
    setOpenMovieDetail(false);
  };

  return (
    <div className="main-detail-div">
      <img src={bgimage} alt="" />
      <button className="close-button" onClick={handleClose}>
        X
      </button>
      <div className="detail-title">{detail_title}</div>
      <div className="description">{description_intro}</div>
      <div className="description_full">{description_full}</div>
      <div className="about">
        <label>{genres}</label>
        <p>{upload_date}</p>
      </div>
    </div>
  );
}

export default MovieDetails;
