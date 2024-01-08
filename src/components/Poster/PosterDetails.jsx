import styles from "./Poster.module.css"
import tomato from "../../assets/tomato.svg"
import imbd from "../../assets/Imbd.svg";
import play from "../../assets/Play.svg";

const PosterDetails = ({ title, vote_count, vote_average, overview }) => {
    return (
        <article className={styles.container}>
            <h1 className={styles.title}>{title}</h1>
            <div className={styles.rating}>
                <span><img src={imbd} alt="imbd" /></span>
                <p>{vote_count}</p>
                <p><span><img src={tomato} alt="tomatosvg" /></span> {vote_average / 10 * 100}%</p>
            </div>
            <p className={styles.overview}>{overview}</p>
            <button className={styles.btn}><span><img src={play} alt="playsvg" /></span>Watch Trailer</button>
        </article>
    )
};
export default PosterDetails;