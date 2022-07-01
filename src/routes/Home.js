import { useEffect, useState } from "react";
import Movie from "../components/Movie";

function Home() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const getMovies = async () => {
    const response = await fetch(
      "https://www.kobis.or.kr/kobisopenapi/webservice/rest/movie/searchMovieList.json?key=d03c23d6eaf9db44f392bcd814e4efa0"
    );
    const json = await response.json();
    setMovies(json.movieListResult.movieList);
    setLoading(false);
  };
  useEffect(() => {
    getMovies();
    // fetch(
    //   "https://www.kobis.or.kr/kobisopenapi/webservice/rest/movie/searchMovieList.json?key=d03c23d6eaf9db44f392bcd814e4efa0"
    // )
    //   .then((response) => response.json())
    //   .then((json) => {
    //     setMovies(json.movieListResult.movieList);
    //     setLoading(false);
    //   });
  }, []);
  console.log(movies);
  return (
    <div>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          {movies.map((movie) => (
            <Movie
              key={movie.movieCd}
              id={+movie.movieCd}
              title={movie.movieNm}
              titleEn={movie.movieNmEn}
              directors={movie.directors}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default Home;
