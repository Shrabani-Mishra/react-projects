import styles from "./Netflix.module.css";
import styled from "styled-components";
const Button = styled.button`
  padding: 12px 25px;
  border: none;
  background: #e50914;
  color: white;
  cursor: pointer;
  border-radius: 5px;
  margin-top: 15px;
  transition: 0.3s;

  &:hover {
    background: black;
    transform: scale(1.05);
  }
`;
export const SeriesCard = ({ curElem }) => {
  const {
    name,
    rating,
    genre,
    cast,
    description,
    img_url,
    watch_url,
  } = curElem;

  const handleWatch = () => {
    window.open(watch_url, "_blank");
  };

  return (
    <div className={styles.card}>
      <img src={img_url} alt={name} />

      <h2>{name}</h2>

      <p>
        Rating:{" "}
        <span className={rating >= 8.5 ? styles.super_hit : styles.average}>
          {rating}
        </span>
      </p>

      <p>Genre: {genre.join(", ")}</p>

      <p>Cast: {cast.join(", ")}</p>

      <p>{description}</p>

      <button className={styles.button} onClick={handleWatch}>
        Watch Now
      </button>
    </div>
  );
};