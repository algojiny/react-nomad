import { useEffect, useState } from "react";

function App() {
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
        movies.map((movie) => (
          <div key={movie.movieCd}>
            <h2>{movie.movieNm}</h2>
            <p>{movie.movieNmEn}</p>
            <ul>
              {movie.directors?.map((d, index) => (
                <li key={index}>{d.peopleNm}</li>
              ))}
            </ul>
          </div>
        ))
      )}
    </div>
  );
}

export default App;
//d03c23d6eaf9db44f392bcd814e4efa0
