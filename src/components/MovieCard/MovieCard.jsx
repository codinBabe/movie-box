import imbd from "../../assets/Imbd.svg";
import tomato from "../../assets/tomato.svg";
import styles from "./MovieCard.module.css";
import genres from "../utils/Genres";
import FavoriteIcon from "./FavouriteIcon";
import { useState } from "react";


const MovieCard = ({ backdrop_path, release_date, title, vote_count, vote_average, genre_ids }) => {
    const [isFavorite, setIsFavorite] = useState(false);
    let genreList = "";
    genre_ids.forEach(id => {
        genreList ? genreList += ", " + genres[id] : genreList = genres[id];
    });
    return (
        <div className={styles.section}>
            <div className={styles.bg_img}>
                <img className={styles.back_drop} src={`https://image.tmdb.org/t/p/original${backdrop_path}`} alt="backdropImg" />
                <div className={styles.favorite}><FavoriteIcon isFavorite={isFavorite} setIsFavorite={setIsFavorite} /> </div>
            </div>
            <div className={styles.movie_details}>
                <p><span>Release-Date: </span>{release_date}</p>
                <h3>{title}</h3>
                <div className={styles.rating}>
                    <div className={styles.flex}>
                        <img src={imbd} alt="imbdlogo" />
                        <p>{vote_count}</p>
                    </div>
                    <div className={styles.flex}><img src={tomato} alt="tomatosvg" />
                        <p> {vote_average / 10 * 100}%</p>
                    </div>
                </div>
                <p>{genreList}</p>
            </div>
        </div>
    )
};
export default MovieCard;