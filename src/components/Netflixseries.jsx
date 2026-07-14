import seriesData from "../api/seriesData.json";
import { SeriesCard } from "./SeriesCard";
import styles from "./Netflix.module.css";

const NetflixSeries = () => {
  return (
    <section className={styles.container}>
      <h1>Netflix Series</h1>

      <div className={styles.grid}>
        {seriesData.map((curElem) => (
          <SeriesCard key={curElem.id} curElem={curElem} />
        ))}
      </div>
    </section>
  );
};

export default NetflixSeries;