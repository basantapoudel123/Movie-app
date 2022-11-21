import axios from "axios";

export const getMovies = () => {
  return new Promise((resolve, reject) => {
    axios
      .get("https://yts.mx/api/v2/list_movies.json")
      .then((res) => {
        resolve(res);
      })
      .catch((err) => reject(err));
  });
};

export const getMovieById = (id) => {
  return new Promise((resolve, reject) => {
    axios
      .get(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
      .then((res) => {
        resolve(res);
      })
      .catch((err) => reject(err));
  });
};
