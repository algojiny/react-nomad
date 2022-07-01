import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function Movie({ id, title, titleEn, directors }) {
  return (
    <div>
      <h2>
        <Link to={`/movie/${id}`}>{title}</Link>
      </h2>
      <p>{titleEn}</p>
      <ul>
        {directors.map((d, index) => (
          <li key={index}>{d.peopleNm}</li>
        ))}
      </ul>
    </div>
  );
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  titleEn: PropTypes.string.isRequired,
  directors: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Movie;
