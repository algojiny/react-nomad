import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Detail() {
  const [loading, setLoading] = useState(true);
  const [movie, setMovie] = useState("");
  const { id } = useParams();
  const getMovie = async () => {
    const json = await (
      await fetch(
        `http://www.kobis.or.kr/kobisopenapi/webservice/rest/movie/searchMovieInfo.json?key=d03c23d6eaf9db44f392bcd814e4efa0&movieCd=${id}`
      )
    ).json();
    setMovie(json.movieInfoResult.movieInfo);
    setLoading(false);
  };
  useEffect(() => {
    getMovie();
  }, []);

  function Genres() {
    let lists = [];
    let i;
    for (i = 0; i < movie.genres.length; i++) {
      lists.push(movie.genres[i].genreNm);
    }
    // console.log(lists);
    return (
      <span>
        {lists.map((list) => (
          <span key={list}>{list} </span>
        ))}
      </span>
    );
  }

  // console.log(movie.directors.peopleNm);
  return (
    <div>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          <h1>{movie.movieNm}</h1>
          <h2>{movie.movieNmEn}</h2>
          <h2>{movie.movieNmOg}</h2>
          <p>{`연도: ${movie.prdtYear}`}</p>
          <p>{`장편 or 단편: ${movie.typeNm}`}</p>
          <p>
            장르: <Genres />
          </p>
        </div>
      )}
    </div>
  );
}

export default Detail;
