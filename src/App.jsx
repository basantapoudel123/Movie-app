import axios from "axios";
import { useEffect, useState } from "react";
import { getMovies, getMovieById } from "./api/Movies";
import "./App.css";
import MovieCard from "./MovieCard";
import MovieDetails from "./MovieDetails";

function App() {
  const [movies, setMovies] = useState([]);
  const [movie, setMovie] = useState({});
  const [favMovie, setFavMovie] = useState([]);
  const [openMovieDetail, setOpenMovieDetail] = useState(false);

  useEffect(() => {
    getMovies()
      .then((res) => {
        setMovies(res?.data?.data?.movies);
      })
      .catch((err) => {
        console.log("error", err);
      });
  }, []);

  const handleDetailsClick = (id) => {
    setOpenMovieDetail(true);
    getMovieById(id).then((res) => {
      const movie = res.data.data.movie;
      setMovie(movie);
    });
  };

  const handleFav = (id) => {
    getMovieById(id).then((res) => {
      const currentAll = [...favMovie, res.data.data.movie];
      localStorage.setItem("fav-movies", JSON.stringify(currentAll));
      setFavMovie(currentAll);
    });
  };

  console.log(movie);

  return (
    <div className="app-wrapper">
      {movies.length > 0 &&
        movies.map((el) => (
          <MovieCard
            key={el.id}
            img={el.large_cover_image}
            title={el.title}
            year={el.year}
            rating={el.rating}
            language={el.language}
            genres={el.genres}
            handleFav={() => {
              handleFav(el.id);
            }}
            handleDetailsClick={() => handleDetailsClick(el?.id)}
          />
        ))}
      {openMovieDetail && (
        <div className="view-details">
          <MovieDetails
            detail_title={movie?.title}
            description_intro={movie?.description_intro}
            description_full={movie?.description_full}
            bgimage={movie?.background_image}
            genres={movie?.genres}
            upload_date={movie?.uploaded_date}
            setOpenMovieDetail={setOpenMovieDetail}
          />
        </div>
      )}
    </div>
  );
}
export default App;
